import { Project, SyntaxKind, TypeFormatFlags } from "ts-morph";
import * as fs from "fs";
import * as path from "path";
import * as glob from "glob";

const project = new Project({
    tsConfigFilePath: "tsconfig.app.json",
});

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.resolve(__dirname, "../src/components");
const docsDir = path.resolve(__dirname, "../docs/components");

// Mapping of component names to their doc files
const componentDocsMap: Record<string, string> = {
    Button: "button.md",
    Input: "input.md",
    Checkbox: "checkbox.md",
    Select: "select.md",
    Card: "card.md",
    Badge: "badge.md",
    Alert: "alert.md",
    // Add other mappings as needed
};

function generateApiTable(componentName: string, filePath: string): string | null {
    const sourceFile = project.addSourceFileAtPath(filePath);
    const componentExport = sourceFile.getVariableDeclaration(componentName);

    // Attempt to find ${ComponentName}Props interface or type alias
    const propsInterface = sourceFile.getInterface(`${componentName}Props`);
    const propsTypeAlias = sourceFile.getTypeAlias(`${componentName}Props`);

    if (!propsInterface && !propsTypeAlias) {
        // Fallback for components like Input that just forward generic HTML props
        return `### ${componentName} Props\n\nThis component extends standard HTML attributes for its element type. No specific custom props are defined in a named interface.`;
    }

    let table = `### ${componentName} Props\n\n`;
    table += "| Prop | Type | Default | Description |\n";
    table += "|------|------|---------|-------------|\n";

    const processProperty = (name: string, type: string, jsDocs: unknown[]) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const description = jsDocs.length > 0 ? (jsDocs[0] as any).getComment() : "-";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const defaultTag = jsDocs.length > 0 ? (jsDocs[0] as any).getTags().find((t: any) => t.getTagName() === "default") : null;
        const defaultValue = defaultTag ? defaultTag.getComment() : "-";
        table += `| \`${name}\` | \`${type.replace(/\|/g, "\\|").replace(/</g, "&lt;").replace(/>/g, "&gt;")}\` | ${defaultValue} | ${description} |\n`;
    };

    if (propsInterface) {
        propsInterface.getProperties().forEach(prop => {
            processProperty(prop.getName(), prop.getType().getText(undefined, TypeFormatFlags.NoTruncation), prop.getJsDocs());
        });
    } else if (propsTypeAlias) {
        const typeNode = propsTypeAlias.getTypeNode();

        if (typeNode && typeNode.getKind() === SyntaxKind.TypeLiteral) {
            // @ts-expect-error - typeNode members are complex to type strictly here
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            typeNode.getMembers().forEach((member: any) => {
                if (member.getName) {
                    processProperty(member.getName(), member.getType().getText(undefined, TypeFormatFlags.NoTruncation), member.getJsDocs());
                }
            });
        } else {
            // For complex types (intersections etc), print the raw type
            table += `| (Type Definition) | \`${propsTypeAlias.getType().getText(undefined, TypeFormatFlags.NoTruncation)}\` | - | - |\n`;
        }
    }

    return table;
}

// Main execution
console.log("Generating API docs...");

Object.entries(componentDocsMap).forEach(([componentName, docFileName]) => {
    const componentPath = path.join(componentsDir, "ui", `${componentName.toLowerCase()}.tsx`);

    // Also check library folder if not in ui
    let resolvedPath = componentPath;
    if (!fs.existsSync(resolvedPath)) {
        resolvedPath = path.join(componentsDir, "library", `${componentName}.tsx`);
    }

    if (!fs.existsSync(resolvedPath)) {
        // try to find by glob 
        const matches = glob.sync(`${componentsDir}/**/${componentName}.tsx`);
        if (matches.length > 0) {
            resolvedPath = matches[0];
        } else {
            console.warn(`Could not find component file for ${componentName}`);
            return;
        }
    }

    const apiTable = generateApiTable(componentName, resolvedPath);

    if (apiTable) {
        const docPath = path.join(docsDir, docFileName);
        if (fs.existsSync(docPath)) {
            let content = fs.readFileSync(docPath, "utf-8");

            // Replace existing API Reference section or append
            const apiHeaderRegex = /## API Reference\n\n### Props[\s\S]*?(?=##|$)/;

            if (apiHeaderRegex.test(content)) {
                content = content.replace(apiHeaderRegex, `## API Reference\n\n${apiTable}\n`);
            } else {
                content += `\n## API Reference\n\n${apiTable}\n`;
            }

            fs.writeFileSync(docPath, content);
            console.log(`Updated ${docFileName}`);
        } else {
            console.warn(`Doc file ${docFileName} not found`);
        }
    } else {
        console.warn(`Could not generate API table for ${componentName}`);
    }
});

console.log("Done.");
