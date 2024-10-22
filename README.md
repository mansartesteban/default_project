# default_project

Just a basic repo with boilerplates to copy/paste to start a fresh project without recreating package, vite, index.html, styles ...

## vite-no-vue

### Contains

- `vite.config.js`
  - default alias "@" pointing to "[project_directory]/src"
  - style loaders (sass)
- `package.json`
  - vite
  - sass
- `.gitignore`
- `index.html`
  - imports `main.js`
- `main.js`
  - imports `_reset.scss`
- `_reset.scss`
  
### Pre-requisite

- [Node](https://nodejs.org/en/download/package-manager)
- [pnpm](https://pnpm.io/fr/installation)

## vite-with-vue

**Contains :**

- `vite.config.js`
  - default alias "@" pointing to "[project_directory]/src"
  - style loaders (sass)
  - plugins
    - vue
    - vue-autoimport
- `package.json`
  - vite
  - sass
- `.gitignore`
- `index.html`
  - imports `main.js`
- `main.js`
  - imports `_reset.scss`
  - default import to directive, plugin and store
- `reset.scss`
- `App.vue`
  
### Pre-requisite

- [Node](https://nodejs.org/en/download/package-manager)
- [pnpm](https://pnpm.io/fr/installation)
