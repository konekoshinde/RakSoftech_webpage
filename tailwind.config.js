/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const config={

  content: [
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ,
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
      animation: {
        'ping': 'ping 5s cubic-bezier(0, 0, 0.2, 0.2) infinite'
      },
      keyframes: {
        ping: {
          "0%": {
            transform: 'scale(1)',
            opacity: '100'
          },
          "50%":{
            transform: 'scale(1.25)',
            opacity: '75'

          },
          "100%":{
            transform: 'scale(1)',
            opacity: '100'
          }
        }
      }
      
    },
  },
  plugins: [
    require("flowbite/plugin")
  ]
}

module.exports=withMT(config);
