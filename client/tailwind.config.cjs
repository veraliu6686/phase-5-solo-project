/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      padding: '3rem',
    },
     fontSize: {
      sm: '1rem',
      base: '2rem',
      lg:'2.5rem',
      xl: '3rem',
      '2xl': ['3.5rem', {
        lineHeight: '3.2rem',
        letterSpacing: '.1em',
        fontWeight: '500',
      }],
      '3xl': ['3.5rem', {
        lineHeight: '4rem',
        letterSpacing: '.2em',
        fontWeight: '700',
      }],
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
  themes: ["dark", "retro", "valentine", "garden", "forest", "dracula","aqua"],
  },
  // purge: {
  //     content: ['yourfiles/**/*.html'],
  //     options: {
  //       safelist: [
  //         /data-theme$/,
  //       ]
  //     },
  //   },
}
