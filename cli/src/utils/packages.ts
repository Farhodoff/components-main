import fs from 'fs-extra'
import path from 'path'
import type { PackageManager } from '../types'

export async function detectPackageManager(): Promise<PackageManager> {
    const cwd = process.cwd()

    if (await fs.pathExists(path.join(cwd, 'pnpm-lock.yaml'))) {
        return 'pnpm'
    }

    if (await fs.pathExists(path.join(cwd, 'yarn.lock'))) {
        return 'yarn'
    }

    if (await fs.pathExists(path.join(cwd, 'package-lock.json'))) {
        return 'npm'
    }

    return 'npm'
}

export function getInstallCommand(pm: PackageManager): string {
    const commands = {
        npm: 'npm install',
        pnpm: 'pnpm add',
        yarn: 'yarn add',
    }

    return commands[pm]
}
