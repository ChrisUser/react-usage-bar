module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
  ],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        outDir: "build",
        allowJs: true,
        checkJs: false,
        jsx: "react",
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
}
