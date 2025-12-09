/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'background-light': 'var(--color-background-light)',
                'background-dark': 'var(--color-background-dark)',
                'text-light': 'var(--color-text-light)',
                'text-dark': 'var(--color-text-dark)',
                'muted-light': 'var(--color-muted-light)',
                'muted-dark': 'var(--color-muted-dark)',
                'border-light': 'var(--color-border-light)',
                'border-dark': 'var(--color-border-dark)',
                'card-light': 'var(--color-card-light)',
                'card-dark': 'var(--color-card-dark)',
                'surface-light': 'var(--color-surface-light)',
                'surface-dark': 'var(--color-surface-dark)',
                'primary': 'var(--color-primary)',
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
};