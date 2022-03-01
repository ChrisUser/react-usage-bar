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
        module: "esnext",
        target: "esnext",
        lib: ["es6", "dom", "es2016", "es2017"],
        sourceMap: true,
        allowJs: false,
        jsx: "react",
        declaration: true,
        forceConsistentCasingInFileNames: true,
        noImplicitReturns: true,
        noImplicitThis: true,
        noImplicitAny: true,
        strictNullChecks: true,
        suppressImplicitAnyIndexErrors: true,
        noUnusedLocals: false,
        noUnusedParameters: true,
        esModuleInterop: true,
      },
    },
  },
}
