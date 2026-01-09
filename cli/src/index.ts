#!/usr/bin/env node

import { Command } from 'commander'
import { addCommand } from './commands/add'
import { listCommand } from './commands/list'
import { initCommand } from './commands/init'

const program = new Command()

program
    .name('super-ui')
    .description('CLI tool for Super UI component library')
    .version('0.1.0')

// Add command
program
    .command('add')
    .description('Add a component to your project')
    .argument('[components...]', 'Component names to add')
    .option('-a, --all', 'Add all components')
    .option('-o, --overwrite', 'Overwrite existing files')
    .option('-p, --path <path>', 'Custom component path', 'src/components/ui')
    .action(addCommand)

// List command
program
    .command('list')
    .description('List all available components')
    .option('-c, --categories', 'Group by categories')
    .action(listCommand)

// Init command
program
    .command('init')
    .description('Initialize Super UI in your project')
    .option('--yes', 'Skip prompts and use defaults')
    .action(initCommand)

// Parse arguments
program.parse()
