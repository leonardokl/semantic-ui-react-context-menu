import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "dist/semantic-ui-react-context-menu.js",
    format: "cjs"
  },
  external: ["react", "react-dom", "prop-types", "semantic-ui-react"],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**",
      presets: ['stage-1'], 
    })
  ]
};
