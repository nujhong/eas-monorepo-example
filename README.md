Fork from: https://github.com/byCedric/eas-monorepo-example

For any react-native project, configure hybrid mode as instructed at https://yarnpkg.com/getting-started/recipes/#hybrid-pnp--node_modules-mono-repo.

> That might also mean for any dependencies you need to build will need to be managed.

> This only covers **Managed Workflow**. Haven't tested with **Bare Workflow**.

1. Run `yarn` in root directory
2. Run `yarn` in [packages/ui](packages/ui)
   1. Run `yarn build` to build the library
3. Run `yarn` in [apps/managed](apps/managed)
4. Run `yarn start` in [apps/managed](apps/managed) will start the app