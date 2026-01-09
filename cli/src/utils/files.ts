import fs from 'fs-extra'
import path from 'path'

export async function ensureDir(dirPath: string): Promise<void> {
    await fs.ensureDir(dirPath)
}

export async function copyFile(src: string, dest: string): Promise<void> {
    await fs.copy(src, dest, { overwrite: true })
}

export async function fileExists(filePath: string): Promise<boolean> {
    return fs.pathExists(filePath)
}

export async function readFile(filePath: string): Promise<string> {
    return fs.readFile(filePath, 'utf-8')
}

export async function writeFile(filePath: string, content: string): Promise<void> {
    await ensureDir(path.dirname(filePath))
    await fs.writeFile(filePath, content, 'utf-8')
}
