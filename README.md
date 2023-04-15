
# TypeScript


[TypeScript](https://www.typescriptlang.org/) is a set of modules to transpil the esoteric typescript lang into ECMAScript ESNext as also
contains vairus integration and tools for ECMAScript and JSDOC Components. It also got support for a own bundler package format called tsconfig.json
the tsconfig.json is equal to a configurable package.json abstraction 

This exists mostly as dependency of the rollup loader which is able to load typescript packages aka tsconfig.json and typescript esoteric syntax into ECMAScript Modules.

## CJS ES
ESM Wrapper.
```js
// prepend 
const cjsBundel = `exports.hi = 'uh'`
const load = (cjsBundel) => new Function(`const module = { exports: {}};
const { exports } = module;
{${cjsBundel}}
return Object.assign(module.exports,exports);`)
// attach

```


## Roadmap

For details on our planned features and future direction please refer to our [roadmap](https://github.com/microsoft/TypeScript/wiki/Roadmap).
