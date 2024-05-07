/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      flexDirection: {
        'row': 'row',
        'row-reverse': 'row-reverse',
        'col': 'column',
        'col-reverse': 'column-reverse',
      },
      justifyContent: {
        'start': 'flex-start',
        'end': 'flex-end',
        'center': 'center',
        'between': 'space-between',
        'around': 'space-around',
        'evenly': 'space-evenly',
      },
    },
    plugins: [],
  }
}
