import chalk from 'chalk'
import { COMPONENTS, CATEGORIES } from '../constants/components'
import { logger } from '../utils/logger'
import type { CLIOptions } from '../types'

export async function listCommand(options: CLIOptions) {
    console.log()
    console.log(chalk.bold('📦 Available Components\n'))

    if (options.categories) {
        // Group by categories
        const byCategory: Record<string, string[]> = {}

        Object.entries(COMPONENTS).forEach(([key, component]) => {
            if (!byCategory[component.category]) {
                byCategory[component.category] = []
            }
            byCategory[component.category].push(key)
        })

        Object.entries(byCategory).forEach(([category, components]) => {
            const categoryName = CATEGORIES[category as keyof typeof CATEGORIES] || category
            console.log(chalk.cyan.bold(`\n${categoryName}:`))
            components.forEach((name) => {
                const component = COMPONENTS[name]
                console.log(`  ${chalk.green('●')} ${chalk.bold(name)} - ${chalk.gray(component.description)}`)
            })
        })
    } else {
        // Simple list
        Object.entries(COMPONENTS).forEach(([key, component]) => {
            console.log(`  ${chalk.green('●')} ${chalk.bold(key)} - ${chalk.gray(component.description)}`)
        })
    }

    console.log()
    console.log(chalk.gray(`Total: ${Object.keys(COMPONENTS).length} components`))
    console.log()
    console.log(chalk.dim('Usage:'))
    console.log(chalk.dim('  npx super-ui add button'))
    console.log(chalk.dim('  npx super-ui add button input card'))
    console.log()
}
