Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/project/src/box.ts]
export interface Box<T> {
    unbox(): T
}


//// [/src/project/src/bug.js]
import * as B from "./box.js"
import * as W from "./wrap.js"

/**
 * @template {object} C
 * @param {C} source
 * @returns {W.Wrap<C>}
 */
const wrap = source => {
throw source
}

/**
 * @returns {B.Box<number>}
 */
const box = (n = 0) => ({ unbox: () => n })

export const bug = wrap({ n: box(1) });


//// [/src/project/src/wrap.ts]
export type Wrap<C> = {
    [K in keyof C]: { wrapped: C[K] }
}


//// [/src/project/tsconfig.json]
{"compilerOptions":{"composite":true,"outDir":"outDir","checkJs":true},"include":["src"]}



Output::
/lib/tsc -p /src/project
exitCode:: ExitStatus.Success


//// [/src/project/outDir/src/box.d.ts]
export interface Box<T> {
    unbox(): T;
}


//// [/src/project/outDir/src/box.js]
"use strict";
exports.__esModule = true;


//// [/src/project/outDir/src/bug.d.ts]
export const bug: W.Wrap<{
    n: B.Box<number>;
}>;
import * as B from "./box.js";
import * as W from "./wrap.js";


//// [/src/project/outDir/src/bug.js]
"use strict";
exports.__esModule = true;
exports.bug = void 0;
var B = require("./box.js");
var W = require("./wrap.js");
/**
 * @template {object} C
 * @param {C} source
 * @returns {W.Wrap<C>}
 */
var wrap = function (source) {
    throw source;
};
/**
 * @returns {B.Box<number>}
 */
var box = function (n) {
    if (n === void 0) { n = 0; }
    return ({ unbox: function () { return n; } });
};
exports.bug = wrap({ n: box(1) });


//// [/src/project/outDir/src/wrap.d.ts]
export type Wrap<C> = {
    [K in keyof C]: {
        wrapped: C[K];
    };
};


//// [/src/project/outDir/src/wrap.js]
"use strict";
exports.__esModule = true;


//// [/src/project/outDir/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../lib/lib.d.ts","../src/box.ts","../src/wrap.ts","../src/bug.js"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-14267342128-export interface Box<T> {\n    unbox(): T\n}\n","signature":"-3708762094-export interface Box<T> {\r\n    unbox(): T;\r\n}\r\n"},{"version":"-7208318765-export type Wrap<C> = {\n    [K in keyof C]: { wrapped: C[K] }\n}\n","signature":"-1963209831-export type Wrap<C> = {\r\n    [K in keyof C]: {\r\n        wrapped: C[K];\r\n    };\r\n};\r\n"},{"version":"-27771690375-import * as B from \"./box.js\"\nimport * as W from \"./wrap.js\"\n\n/**\n * @template {object} C\n * @param {C} source\n * @returns {W.Wrap<C>}\n */\nconst wrap = source => {\nthrow source\n}\n\n/**\n * @returns {B.Box<number>}\n */\nconst box = (n = 0) => ({ unbox: () => n })\n\nexport const bug = wrap({ n: box(1) });\n","signature":"-5229180856-export const bug: W.Wrap<{\r\n    n: B.Box<number>;\r\n}>;\r\nimport * as B from \"./box.js\";\r\nimport * as W from \"./wrap.js\";\r\n"}],"options":{"composite":true,"outDir":"./"},"fileIdsList":[[2,3]],"referencedMap":[[4,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,4,3],"latestChangedDtsFile":"./src/bug.d.ts"},"version":"FakeTSVersion"}

//// [/src/project/outDir/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../lib/lib.d.ts",
      "../src/box.ts",
      "../src/wrap.ts",
      "../src/bug.js"
    ],
    "fileNamesList": [
      [
        "../src/box.ts",
        "../src/wrap.ts"
      ]
    ],
    "fileInfos": {
      "../../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../src/box.ts": {
        "original": {
          "version": "-14267342128-export interface Box<T> {\n    unbox(): T\n}\n",
          "signature": "-3708762094-export interface Box<T> {\r\n    unbox(): T;\r\n}\r\n"
        },
        "version": "-14267342128-export interface Box<T> {\n    unbox(): T\n}\n",
        "signature": "-3708762094-export interface Box<T> {\r\n    unbox(): T;\r\n}\r\n"
      },
      "../src/wrap.ts": {
        "original": {
          "version": "-7208318765-export type Wrap<C> = {\n    [K in keyof C]: { wrapped: C[K] }\n}\n",
          "signature": "-1963209831-export type Wrap<C> = {\r\n    [K in keyof C]: {\r\n        wrapped: C[K];\r\n    };\r\n};\r\n"
        },
        "version": "-7208318765-export type Wrap<C> = {\n    [K in keyof C]: { wrapped: C[K] }\n}\n",
        "signature": "-1963209831-export type Wrap<C> = {\r\n    [K in keyof C]: {\r\n        wrapped: C[K];\r\n    };\r\n};\r\n"
      },
      "../src/bug.js": {
        "original": {
          "version": "-27771690375-import * as B from \"./box.js\"\nimport * as W from \"./wrap.js\"\n\n/**\n * @template {object} C\n * @param {C} source\n * @returns {W.Wrap<C>}\n */\nconst wrap = source => {\nthrow source\n}\n\n/**\n * @returns {B.Box<number>}\n */\nconst box = (n = 0) => ({ unbox: () => n })\n\nexport const bug = wrap({ n: box(1) });\n",
          "signature": "-5229180856-export const bug: W.Wrap<{\r\n    n: B.Box<number>;\r\n}>;\r\nimport * as B from \"./box.js\";\r\nimport * as W from \"./wrap.js\";\r\n"
        },
        "version": "-27771690375-import * as B from \"./box.js\"\nimport * as W from \"./wrap.js\"\n\n/**\n * @template {object} C\n * @param {C} source\n * @returns {W.Wrap<C>}\n */\nconst wrap = source => {\nthrow source\n}\n\n/**\n * @returns {B.Box<number>}\n */\nconst box = (n = 0) => ({ unbox: () => n })\n\nexport const bug = wrap({ n: box(1) });\n",
        "signature": "-5229180856-export const bug: W.Wrap<{\r\n    n: B.Box<number>;\r\n}>;\r\nimport * as B from \"./box.js\";\r\nimport * as W from \"./wrap.js\";\r\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "./"
    },
    "referencedMap": {
      "../src/bug.js": [
        "../src/box.ts",
        "../src/wrap.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../lib/lib.d.ts",
      "../src/box.ts",
      "../src/bug.js",
      "../src/wrap.ts"
    ],
    "latestChangedDtsFile": "./src/bug.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1693
}



Change:: modify js file
Input::
//// [/src/project/src/bug.js]
import * as B from "./box.js"
import * as W from "./wrap.js"

/**
 * @template {object} C
 * @param {C} source
 * @returns {W.Wrap<C>}
 */
const wrap = source => {
throw source
}

/**
 * @returns {B.Box<number>}
 */
const box = (n = 0) => ({ unbox: () => n })

export const bug = wrap({ n: box(1) });
export const something = 1;



Output::
/lib/tsc -p /src/project
exitCode:: ExitStatus.Success


//// [/src/project/outDir/src/bug.d.ts]
export const bug: W.Wrap<{
    n: B.Box<number>;
}>;
export const something: 1;
import * as W from "./wrap.js";


//// [/src/project/outDir/src/bug.js]
"use strict";
exports.__esModule = true;
exports.something = exports.bug = void 0;
var B = require("./box.js");
var W = require("./wrap.js");
/**
 * @template {object} C
 * @param {C} source
 * @returns {W.Wrap<C>}
 */
var wrap = function (source) {
    throw source;
};
/**
 * @returns {B.Box<number>}
 */
var box = function (n) {
    if (n === void 0) { n = 0; }
    return ({ unbox: function () { return n; } });
};
exports.bug = wrap({ n: box(1) });
exports.something = 1;


//// [/src/project/outDir/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../lib/lib.d.ts","../src/box.ts","../src/wrap.ts","../src/bug.js"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-14267342128-export interface Box<T> {\n    unbox(): T\n}\n","signature":"-3708762094-export interface Box<T> {\r\n    unbox(): T;\r\n}\r\n"},{"version":"-7208318765-export type Wrap<C> = {\n    [K in keyof C]: { wrapped: C[K] }\n}\n","signature":"-1963209831-export type Wrap<C> = {\r\n    [K in keyof C]: {\r\n        wrapped: C[K];\r\n    };\r\n};\r\n"},{"version":"-25729561895-import * as B from \"./box.js\"\nimport * as W from \"./wrap.js\"\n\n/**\n * @template {object} C\n * @param {C} source\n * @returns {W.Wrap<C>}\n */\nconst wrap = source => {\nthrow source\n}\n\n/**\n * @returns {B.Box<number>}\n */\nconst box = (n = 0) => ({ unbox: () => n })\n\nexport const bug = wrap({ n: box(1) });\nexport const something = 1;","signature":"-18323848036-export const bug: W.Wrap<{\r\n    n: B.Box<number>;\r\n}>;\r\nexport const something: 1;\r\nimport * as B from \"./box.js\";\r\nimport * as W from \"./wrap.js\";\r\n"}],"options":{"composite":true,"outDir":"./"},"fileIdsList":[[2,3]],"referencedMap":[[4,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,4,3],"emitSignatures":[[4,"-5518966042-export const bug: W.Wrap<{\r\n    n: B.Box<number>;\r\n}>;\r\nexport const something: 1;\r\nimport * as W from \"./wrap.js\";\r\n"]],"latestChangedDtsFile":"./src/bug.d.ts"},"version":"FakeTSVersion"}

//// [/src/project/outDir/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../lib/lib.d.ts",
      "../src/box.ts",
      "../src/wrap.ts",
      "../src/bug.js"
    ],
    "fileNamesList": [
      [
        "../src/box.ts",
        "../src/wrap.ts"
      ]
    ],
    "fileInfos": {
      "../../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../src/box.ts": {
        "original": {
          "version": "-14267342128-export interface Box<T> {\n    unbox(): T\n}\n",
          "signature": "-3708762094-export interface Box<T> {\r\n    unbox(): T;\r\n}\r\n"
        },
        "version": "-14267342128-export interface Box<T> {\n    unbox(): T\n}\n",
        "signature": "-3708762094-export interface Box<T> {\r\n    unbox(): T;\r\n}\r\n"
      },
      "../src/wrap.ts": {
        "original": {
          "version": "-7208318765-export type Wrap<C> = {\n    [K in keyof C]: { wrapped: C[K] }\n}\n",
          "signature": "-1963209831-export type Wrap<C> = {\r\n    [K in keyof C]: {\r\n        wrapped: C[K];\r\n    };\r\n};\r\n"
        },
        "version": "-7208318765-export type Wrap<C> = {\n    [K in keyof C]: { wrapped: C[K] }\n}\n",
        "signature": "-1963209831-export type Wrap<C> = {\r\n    [K in keyof C]: {\r\n        wrapped: C[K];\r\n    };\r\n};\r\n"
      },
      "../src/bug.js": {
        "original": {
          "version": "-25729561895-import * as B from \"./box.js\"\nimport * as W from \"./wrap.js\"\n\n/**\n * @template {object} C\n * @param {C} source\n * @returns {W.Wrap<C>}\n */\nconst wrap = source => {\nthrow source\n}\n\n/**\n * @returns {B.Box<number>}\n */\nconst box = (n = 0) => ({ unbox: () => n })\n\nexport const bug = wrap({ n: box(1) });\nexport const something = 1;",
          "signature": "-18323848036-export const bug: W.Wrap<{\r\n    n: B.Box<number>;\r\n}>;\r\nexport const something: 1;\r\nimport * as B from \"./box.js\";\r\nimport * as W from \"./wrap.js\";\r\n"
        },
        "version": "-25729561895-import * as B from \"./box.js\"\nimport * as W from \"./wrap.js\"\n\n/**\n * @template {object} C\n * @param {C} source\n * @returns {W.Wrap<C>}\n */\nconst wrap = source => {\nthrow source\n}\n\n/**\n * @returns {B.Box<number>}\n */\nconst box = (n = 0) => ({ unbox: () => n })\n\nexport const bug = wrap({ n: box(1) });\nexport const something = 1;",
        "signature": "-18323848036-export const bug: W.Wrap<{\r\n    n: B.Box<number>;\r\n}>;\r\nexport const something: 1;\r\nimport * as B from \"./box.js\";\r\nimport * as W from \"./wrap.js\";\r\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "./"
    },
    "referencedMap": {
      "../src/bug.js": [
        "../src/box.ts",
        "../src/wrap.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../lib/lib.d.ts",
      "../src/box.ts",
      "../src/bug.js",
      "../src/wrap.ts"
    ],
    "emitSignatures": [
      [
        "../src/bug.js",
        "-5518966042-export const bug: W.Wrap<{\r\n    n: B.Box<number>;\r\n}>;\r\nexport const something: 1;\r\nimport * as W from \"./wrap.js\";\r\n"
      ]
    ],
    "latestChangedDtsFile": "./src/bug.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1918
}

