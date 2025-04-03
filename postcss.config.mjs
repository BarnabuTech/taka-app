const config = {
  plugins: {
    "tailwindcss/nesting": {}, // Required for CSS nesting support
    "tailwindcss": {},         // Tailwind v4 processor
    "autoprefixer": {},
    "postcss-nesting": {},        // Adds vendor prefixes
  },
};

export default config;










// import tailwindcss from "tailwindcss";
// import autoprefixer from "autoprefixer";

// const config = {
//   plugins: [
//     tailwindcss,
//     autoprefixer
//   ],
// };

// export default config;










// My initial codes for attempt to use tailwindcss with postcss.

// const config = {
//   plugins: ["@tailwindcss/postcss"],
// };

// export default config;
