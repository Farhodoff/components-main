import path from 'path'
import ora from 'ora'
import chalk from 'chalk'
import { execa } from 'execa'
import { COMPONENTS } from '../constants/components'
import { logger } from '../utils/logger'
import { copyFile, fileExists, ensureDir } from '../utils/files'
import { detectPackageManager, getInstallCommand } from '../utils/packages'
import type { CLIOptions } from '../types'

export async function addCommand(components: string[], options: CLIOptions) {
    const cwd = process.cwd()

    // Validate component names
    const invalidComponents = components.filter((name) => !COMPONENTS[name])
    if (invalidComponents.length > 0) {
        logger.error(`Unknown components: ${invalidComponents.join(', ')}`)
        logger.info('Run "super-ui list" to see available components')
        process.exit(1)
    }

    // If --all flag, add all components
    if (options.all) {
        components = Object.keys(COMPONENTS)
    }

    if (components.length === 0) {
        logger.error('Please specify at least one component')
        logger.info('Usage: super-ui add button input card')
        process.exit(1)
    }

    console.log()
    logger.info(`Adding ${chalk.bold(components.length)} component(s)...`)
    console.log()

    const targetDir = options.path || 'src/components/ui'
    await ensureDir(path.join(cwd, targetDir))

    // Collect all dependencies
    const allDeps = new Set<string>()

    for (const componentName of components) {
        const component = COMPONENTS[componentName]
        const spinner = ora(`Copying ${chalk.cyan(componentName)}...`).start()

        try {
            // Check if component already exists
            for (const file of component.files) {
                const targetPath = path.join(cwd, targetDir, file)

                if (await fileExists(targetPath) && !options.overwrite) {
                    spinner.warn(chalk.yellow(`${componentName} already exists (use --overwrite to replace)`))
                    continue
                }

                // Copy from templates
                const sourcePath = path.join(__dirname, '../../templates/components/ui', file)
                await copyFile(sourcePath, targetPath)
            }

            // Collect dependencies
            component.dependencies.forEach((dep) => allDeps.add(dep))

            spinner.succeed(chalk.green(`Added ${componentName}`))
        } catch (error) {
            spinner.fail(chalk.red(`Failed to add ${componentName}`))
            console.error(error)
        }
    }

    // Install dependencies
    if (allDeps.size > 0) {
        console.log()
        const pm = await detectPackageManager()
        const spinner = ora('Installing dependencies...').start()

        try {
            const deps = Array.from(allDeps)
            await execa(pm, ['add', ...deps])
            spinner.succeed('Dependencies installed')
        } catch (error) {
            spinner.fail('Failed to install dependencies')
            logger.warn(`Please install manually: ${getInstallCommand(pm)} ${Array.from(allDeps).join(' ')}`)
        }
    }

    // Success message
    console.log()
    logger.success(chalk.bold('Components added successfully! 🎉'))
    console.log()
    console.log(chalk.dim('Usage example:'))
    console.log(chalk.cyan(`  import { ${components.map(c => COMPONENTS[c].name).join(', ')} } from '@/components/ui/${components[0]}'`))
    console.log()
}
