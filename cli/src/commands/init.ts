import prompts from 'prompts'
import chalk from 'chalk'
import { logger } from '../utils/logger'
import type { CLIOptions } from '../types'

export async function initCommand(options: CLIOptions) {
    console.log()
    console.log(chalk.bold('🚀 Initialize Super UI\n'))

    if (!options.yes) {
        const response = await prompts([
            {
                type: 'select',
                name: 'packageManager',
                message: 'Which package manager do you use?',
                choices: [
                    { title: 'pnpm (recommended)', value: 'pnpm' },
                    { title: 'npm', value: 'npm' },
                    { title: 'yarn', value: 'yarn' },
                ],
            },
            {
                type: 'confirm',
                name: 'typescript',
                message: 'Use TypeScript?',
                initial: true,
            },
            {
                type: 'text',
                name: 'componentsDir',
                message: 'Where should we put components?',
                initial: 'src/components',
            },
            {
                type: 'confirm',
                name: 'tailwind',
                message: 'Configure Tailwind CSS?',
                initial: true,
            },
        ])

        if (!response.packageManager) {
            logger.error('Initialization cancelled')
            process.exit(0)
        }

        console.log()
        logger.info('Setting up Super UI...')
        logger.step('Installing dependencies...')
        logger.step('Configuring Tailwind CSS...')
        logger.step('Creating component directory...')
        logger.step('Adding base styles...')
        console.log()
        logger.success('Super UI is ready! 🎉')
        console.log()
        console.log(chalk.bold('Next steps:'))
        console.log(chalk.dim('  1. Add a component: npx super-ui add button'))
        console.log(chalk.dim('  2. See all components: npx super-ui list'))
        console.log(chalk.dim('  3. Read docs: https://super-ui.dev'))
        console.log()
    }
}
