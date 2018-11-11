import theme from "mdx-deck/themes"

export default {
  ...theme,
  monospace: '"Source Code Pro", monaco, monospace',
  font:
    '"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  // custom colors
  colors: {
    background: "#fff",
    text: "#272C34"
  },
  css: {
    textAlign: "left",
    h1: {
      fontSize: '3.5rem'
    },
    h2: {
      marginTop: '2.5rem'
    }
  }
}
