// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
  //     './src/**/*.{js,ts,jsx,tsx}', // Your app's component files
  //     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Flowbite components
  //   ],
//   theme: {
//     extend: {},
//   },
  // plugins: [
//     require('flowbite/plugin'), // Use the Flowbite plugin here correctly
//   ],
// }

const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensure these paths are correct
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
    // Add Flowbite's components path
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
    // Ensure Flowbite is required correctly here
  ],
};