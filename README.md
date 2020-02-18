# A template for typescript projects (with nodejs)

## features:
- eslint 
  - @typescript-eslint/eslint-plugin
  - @typescript-eslint/parser
  - OFF: no explicit any
  - OFF: no use before define
  - these overrides can be toggled in `.eslintrc.js` under overrides
- jest
  - uses ts-jest to transform
  - config file at `jest.config.js`
- @types/node
- @types/jest

## available commands
- to test: `npm run test` 
  - runs all `*.test.(ts|js)` files with jest
- to lint: `npm run lint`
  - lints files in `src` with eslint (and typescript rules)
