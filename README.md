Fork from: https://github.com/byCedric/eas-monorepo-example

`yarn` in root dir
then in `apps/managed` do another `yarn`

# Approach #1 Hybrid (Current setup)
- https://yarnpkg.com/getting-started/recipes/#hybrid-pnp--node_modules-mono-repo

# Approach #2 Hoist node_modules to root dir
- Don't create `yarn.lock` in `/apps/managed` 
- This deletes the yarn pnp files in the root dir