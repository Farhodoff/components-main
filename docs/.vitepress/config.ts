import { defineConfig } from 'vitepress'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
    vite: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '../../src'),
            },
        },
    },
    title: 'Super UI',
    description: 'A comprehensive, accessible React component library built with Radix UI and Tailwind CSS',

    head: [
        // Favicons
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],

        // Theme & Meta
        ['meta', { name: 'theme-color', content: '#1faaa0' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:locale', content: 'en' }],
        ['meta', { name: 'og:site_name', content: '@farhod_dev/super-ui' }],
    ],

    themeConfig: {
        logo: '/logo.svg',

        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Components', link: '/components/' },
            { text: 'API Reference', link: '/api/' },
            { text: 'Examples', link: '/examples/' },
            {
                text: 'v0.0.1',
                items: [
                    { text: 'Changelog', link: 'https://github.com/Farhodoff/components-main/releases' },
                    { text: 'Contributing', link: '/guide/contributing' }
                ]
            }
        ],

        sidebar: {
            '/guide/': [
                {
                    text: 'Introduction',
                    items: [
                        { text: 'Getting Started', link: '/guide/' },
                        { text: ' Installation', link: '/guide/installation' },
                        { text: 'Quick Start', link: '/guide/quick-start' },
                    ]
                },
                {
                    text: 'Essentials',
                    items: [
                        { text: 'Theming', link: '/guide/theming' },
                        { text: 'Internationalization', link: '/guide/i18n' },
                        { text: 'Accessibility', link: '/guide/accessibility' },
                    ]
                }
            ],
            '/components/': [
                {
                    text: 'Components',
                    items: [
                        { text: 'Overview', link: '/components/' },
                    ]
                },
                {
                    text: 'Form',
                    items: [
                        { text: 'Button', link: '/components/button' },
                        { text: 'Input', link: '/components/input' },
                        { text: 'Checkbox', link: '/components/checkbox' },
                        { text: 'Select', link: '/components/select' },
                    ]
                },
                {
                    text: 'Data Display',
                    items: [
                        { text: 'Card', link: '/components/card' },
                        { text: 'Badge', link: '/components/badge' },
                        { text: 'Alert', link: '/components/alert' },
                        { text: 'Table', link: '/components/table' },
                    ]
                },
                {
                    text: 'Feedback',
                    items: [
                        { text: 'Dialog', link: '/components/dialog' },
                        { text: 'Toast', link: '/components/toast' },
                        { text: 'Progress', link: '/components/progress' },
                    ]
                }
            ],
            '/api/': [
                {
                    text: 'API Reference',
                    items: [
                        { text: 'Components', link: '/api/' },
                        { text: 'Types', link: '/api/types' },
                        { text: 'Utilities', link: '/api/utilities' },
                    ]
                }
            ],
            '/examples/': [
                {
                    text: 'Examples',
                    items: [
                        { text: 'Overview', link: '/examples/' },
                        { text: 'Forms', link: '/examples/forms' },
                        { text: 'Layouts', link: '/examples/layouts' },
                        { text: 'Dashboards', link: '/examples/dashboards' },
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Farhodoff' },
            { icon: 'npm', link: 'https://www.npmjs.com/package/@farhod_dev/super-ui' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026 Farhod Soyilov'
        },

        search: {
            provider: 'local'
        },

        editLink: {
            pattern: 'https://github.com/Farhodoff/components-main/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        lastUpdated: {
            text: 'Last updated',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'short'
            }
        }
    }
})
