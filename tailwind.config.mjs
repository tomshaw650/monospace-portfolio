const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      'sans': ['"JetBrainsMono"', 'monospace', 'system-ui', ...defaultTheme.fontFamily.sans],
      'jetbrainsbold': ['JetBrainsMonoBold', 'monospace', 'system-ui'],
			'jetbrainsitalic': ['JetBrainsMonoItalic', 'monospace', 'system-ui'],
    },
  },
	plugins: [
    require('@tailwindcss/typography'),
  ],
}
