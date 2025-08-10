import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            screens: {
                '2lg': { max: '1258px' }
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                crayola: {
                    50: '#FCE4E9',
                    100: '#F8A6B8',
                    200: '#F0789F',
                    300: '#EC4F87',
                    400: '#EE4264',
                    DEFAULT: '#EF2D55',
                    600: '#C21034',
                    700: '#9E102C',
                    800: '#7C0F25',
                    900: '#5A0E1E',
                    950: '#3D0C17'
                },
                indigo: {
                    50: '#DDCEFA',
                    100: '#BBA3EC',
                    200: '#A788E7',
                    300: '#9068E0',
                    400: '#7340D7',
                    DEFAULT: '#6730D2',
                    600: '#4100C2',
                    700: '#3A00A5',
                    800: '#330086',
                    900: '#2C0067',
                    950: '#1F004F'
                },
                day: {
                    50: '#FFFFFF',
                    100: '#F5F3F1',
                    200: '#ECECEC',
                    DEFAULT: '#E8E4DF',
                    400: '#DED6CD',
                    500: '#D7CCC0',
                    600: '#C9B8A6',
                    700: '#B7A894',
                    800: '#A69A83',
                    900: '#9B8C74',
                    950: '#8F7B66'
                },
                night: {
                    50: '#C9C9C9',
                    100: '#999999',
                    200: '#666666',
                    300: '#444444',
                    400: '#333333',
                    DEFAULT: '#222222',
                    600: '#141414',
                    700: '#0F0F0F',
                    800: '#080808',
                    900: '#030303',
                    950: '#000000'
                },
                positive: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    DEFAULT: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554'
                },
                success: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    DEFAULT: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                    950: '#052e16'
                },
                warning: {
                    50: '#fffbeb',
                    100: '#fef3c7',
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24',
                    DEFAULT: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f',
                    950: '#451a03'
                },
                error: {
                    50: '#fef2f2',
                    100: '#fee2e2',
                    200: '#fecaca',
                    300: '#fca5a5',
                    400: '#f87171',
                    DEFAULT: '#ef4444',
                    600: '#dc2626',
                    700: '#b91c1c',
                    800: '#991b1b',
                    900: '#7f1d1d',
                    950: '#450a0a'
                },
                orange: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    DEFAULT: '#f97316',
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                    950: '#431407'
                }
            }
        }
    },
    plugins: []
} satisfies Config;
