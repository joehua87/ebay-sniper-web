module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
