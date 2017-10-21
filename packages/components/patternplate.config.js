module.exports = {
  docs: ["docs/**/*.md"],
  readme: "docs/readme.md",
  entry: ["lib/**/demo.js"],
  render: "./patternplate.render.js",
  ui: {
    title: "@patternplate/components"
  }
};
