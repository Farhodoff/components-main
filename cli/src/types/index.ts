export interface Component {
    name: string
    category: string
    dependencies: string[]
    files: string[]
    description: string
    tags: string[]
}

export type ComponentRegistry = Record<string, Component>

export interface CLIOptions {
    all?: boolean
    overwrite?: boolean
    path?: string
    categories?: boolean
    yes?: boolean
}

export type PackageManager = 'npm' | 'pnpm' | 'yarn'
