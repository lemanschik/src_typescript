Input::
//// [/src/projects/project/src/tsconfig.json]
{"compilerOptions":{"target":"es2016","composite":true,"module":"node16","outDir":"../out","cacheResolutions":true,"traceResolution":true},"files":["fileA.ts","fileB.mts","randomFile.ts","a/randomFile.ts","b/ba/randomFile.ts","b/randomFile.ts","c/ca/randomFile.ts","c/ca/caa/randomFile.ts","c/ca/caa/caaa/randomFile.ts","c/cb/randomFile.ts","d/da/daa/daaa/x/y/z/randomFile.ts","d/da/daa/daaa/randomFile.ts","d/da/daa/randomFile.ts","d/da/randomFile.ts","e/ea/randomFile.ts","e/ea/eaa/randomFile.ts","e/ea/eaa/eaaa/randomFile.ts","e/ea/eaa/eaaa/x/y/z/randomFile.ts","f/fa/faa/x/y/z/randomFile.ts","f/fa/faa/faaa/randomFile.ts"]}

//// [/src/projects/project/src/fileA.ts]
import { foo } from "./fileB.mjs";
foo();


//// [/src/projects/project/src/fileB.mts]
export function foo() {}

//// [/src/projects/project/src/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/a/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/b/ba/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/b/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/ca/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/ca/caa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/ca/caa/caaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/c/cb/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/daa/daaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/daa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/d/da/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/eaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/f/fa/faa/faaa/randomFile.ts]
export const x = 10;

//// [/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts]
export const x = 10;

//// [/src/projects/project/package.json]
{"name":"app","version":"1.0.0"}

//// [/a/lib/lib.es2016.full.d.ts]
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


/a/lib/tsc.js --b src -w --explainFiles --extendedDiagnostics
Output::
[[90m12:01:59 AM[0m] Starting compilation in watch mode...

File '/src/projects/project/src/package.json' does not exist.
Found 'package.json' at '/src/projects/project/package.json'.
======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in CJS mode with conditions 'node', 'require', 'types'.
Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/src/projects/project/src/fileB.mts' exist - use it as a name resolution result.
======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/a/package.json' does not exist.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/b/ba/package.json' does not exist.
File '/src/projects/project/src/b/package.json' does not exist.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/b' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/c/ca/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist.
Directory '/src/projects/project/src/c/ca' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist.
Directory '/src/projects/project/src/c/ca/caa' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/c/cb/package.json' does not exist.
Directory '/src/projects/project/src/c' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/package.json' does not exist.
File '/src/projects/project/src/d/da/package.json' does not exist.
File '/src/projects/project/src/d/package.json' does not exist.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da/daa/daaa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da/daa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/e/ea/package.json' does not exist.
File '/src/projects/project/src/e/package.json' does not exist.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist.
Directory '/src/projects/project/src/e/ea' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist.
Directory '/src/projects/project/src/e/ea/eaa' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist.
Directory '/src/projects/project/src/e/ea/eaa/eaaa' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist.
File '/src/projects/project/src/f/fa/package.json' does not exist.
File '/src/projects/project/src/f/package.json' does not exist.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist.
Directory '/src/projects/project/src/f/fa/faa' resolves to '/src/projects/project/package.json' scope according to cache.
File '/a/lib/package.json' does not exist.
File '/a/package.json' does not exist.
File '/package.json' does not exist.
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS1479: [0mThe current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("./fileB.mjs")' call instead.
  To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `"type": "module"` to '/src/projects/project/package.json'.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
[[90m12:02:08 AM[0m] Found 1 error. Watching for file changes.

FileWatcher:: Added:: WatchInfo: /src/projects/project/src/tsconfig.json 2000 undefined Config file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/fileA.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/fileB.mts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/a/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/b/ba/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/b/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/caa/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/caa/caaa/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/cb/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/faaa/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/a/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/b/ba/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/b/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/caa/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/ca/caa/caaa/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/c/cb/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/x/y/z/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/x/y/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/x/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/daaa/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/daa/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/da/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/d/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/e/ea/eaa/eaaa/x/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/x/y/z/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/x/y/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/x/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /src/projects/project/src/f/fa/faa/faaa/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /a/lib/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /a/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Added:: WatchInfo: /package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json


Program root files: ["/src/projects/project/src/fileA.ts","/src/projects/project/src/fileB.mts","/src/projects/project/src/randomFile.ts","/src/projects/project/src/a/randomFile.ts","/src/projects/project/src/b/ba/randomFile.ts","/src/projects/project/src/b/randomFile.ts","/src/projects/project/src/c/ca/randomFile.ts","/src/projects/project/src/c/ca/caa/randomFile.ts","/src/projects/project/src/c/ca/caa/caaa/randomFile.ts","/src/projects/project/src/c/cb/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/randomFile.ts","/src/projects/project/src/d/da/daa/randomFile.ts","/src/projects/project/src/d/da/randomFile.ts","/src/projects/project/src/e/ea/randomFile.ts","/src/projects/project/src/e/ea/eaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"]
Program options: {"target":3,"composite":true,"module":100,"outDir":"/src/projects/project/out","cacheResolutions":true,"traceResolution":true,"watch":true,"explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/src/projects/project/src/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Shape signatures in builder refreshed for::
/a/lib/lib.es2016.full.d.ts (used version)
/src/projects/project/src/fileb.mts (used version)
/src/projects/project/src/filea.ts (used version)
/src/projects/project/src/randomfile.ts (used version)
/src/projects/project/src/a/randomfile.ts (used version)
/src/projects/project/src/b/ba/randomfile.ts (used version)
/src/projects/project/src/b/randomfile.ts (used version)
/src/projects/project/src/c/ca/randomfile.ts (used version)
/src/projects/project/src/c/ca/caa/randomfile.ts (used version)
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts (used version)
/src/projects/project/src/c/cb/randomfile.ts (used version)
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts (used version)
/src/projects/project/src/d/da/daa/daaa/randomfile.ts (used version)
/src/projects/project/src/d/da/daa/randomfile.ts (used version)
/src/projects/project/src/d/da/randomfile.ts (used version)
/src/projects/project/src/e/ea/randomfile.ts (used version)
/src/projects/project/src/e/ea/eaa/randomfile.ts (used version)
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts (used version)
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts (used version)
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts (used version)
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts (used version)

PolledWatches::
/src/projects/project/src/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/a/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/b/ba/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/b/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/caaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/cb/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/faaa/package.json:
  {"pollingInterval":2000}
/a/lib/package.json:
  {"pollingInterval":2000}
/a/package.json:
  {"pollingInterval":2000}
/package.json:
  {"pollingInterval":2000}

FsWatches::
/src/projects/project/src/tsconfig.json:
  {}
/src/projects/project/src/filea.ts:
  {}
/src/projects/project/src/fileb.mts:
  {}
/src/projects/project/src/randomfile.ts:
  {}
/src/projects/project/src/a/randomfile.ts:
  {}
/src/projects/project/src/b/ba/randomfile.ts:
  {}
/src/projects/project/src/b/randomfile.ts:
  {}
/src/projects/project/src/c/ca/randomfile.ts:
  {}
/src/projects/project/src/c/ca/caa/randomfile.ts:
  {}
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts:
  {}
/src/projects/project/src/c/cb/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/daaa/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/randomfile.ts:
  {}
/src/projects/project/src/d/da/randomfile.ts:
  {}
/src/projects/project/src/e/ea/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts:
  {}
/src/projects/project/package.json:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.es2016.full.d.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts","../src","../src/fileB.mts","../src/a","../package.json","../src/b/ba","../src/c/ca/caa/caaa","../src/c/cb","../src/d/da/daa/daaa/x/y/z","../src/e/ea/eaa/eaaa/x/y/z","../src/f/fa/faa/x/y/z","../src/f/fa/faa/faaa"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"3524703962-export function foo() {}","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"module":100,"outDir":"./","target":3},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[[3,1]],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,[3,[{"file":"../src/filea.ts","start":20,"length":13,"code":1479,"category":1,"messageText":{"messageText":"The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.","category":1,"code":1479,"next":[{"messageText":"To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `\"type\": \"module\"` to '/src/projects/project/package.json'.","category":3,"code":1481}]}}]],2,4],"affectedFilesPendingEmit":[5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,3,2,4],"emitSignatures":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],"cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":23}}],"names":["./fileB.mjs"],"resolutionEntries":[[1,1,1]],"modules":[[22,[1]]],"packageJsons":[[24,25],[26,25],[27,25],[28,25],[29,25],[30,25],[31,25],[32,25]]}},"version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.es2016.full.d.ts",
      "../src/fileb.mts",
      "../src/filea.ts",
      "../src/randomfile.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src",
      "../src/fileB.mts",
      "../src/a",
      "../package.json",
      "../src/b/ba",
      "../src/c/ca/caa/caaa",
      "../src/c/cb",
      "../src/d/da/daa/daaa/x/y/z",
      "../src/e/ea/eaa/eaaa/x/y/z",
      "../src/f/fa/faa/x/y/z",
      "../src/f/fa/faa/faaa"
    ],
    "fileNamesList": [
      [
        "../src/fileb.mts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.es2016.full.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../src/fileb.mts": {
        "original": {
          "version": "3524703962-export function foo() {}",
          "impliedFormat": 99
        },
        "version": "3524703962-export function foo() {}",
        "signature": "3524703962-export function foo() {}",
        "impliedFormat": "esnext"
      },
      "../src/filea.ts": {
        "original": {
          "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
          "impliedFormat": 1
        },
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "impliedFormat": "commonjs"
      },
      "../src/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/a/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/b/ba/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/b/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/caaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/c/cb/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/faaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 100,
      "outDir": "./",
      "target": 3
    },
    "referencedMap": {
      "../src/filea.ts": [
        "../src/fileb.mts"
      ]
    },
    "exportedModulesMap": {
      "../src/filea.ts": [
        "../src/fileb.mts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.es2016.full.d.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      [
        "../src/filea.ts",
        [
          {
            "file": "../src/filea.ts",
            "start": 20,
            "length": 13,
            "code": 1479,
            "category": 1,
            "messageText": {
              "messageText": "The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.",
              "category": 1,
              "code": 1479,
              "next": [
                {
                  "messageText": "To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `\"type\": \"module\"` to '/src/projects/project/package.json'.",
                  "category": 3,
                  "code": 1481
                }
              ]
            }
          }
        ]
      ],
      "../src/fileb.mts",
      "../src/randomfile.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "../src/a/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/b/ba/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/b/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/ca/caa/caaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/ca/caa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/ca/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/cb/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/daa/daaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/daa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/eaa/eaaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/eaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/f/fa/faa/faaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/f/fa/faa/x/y/z/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/filea.ts",
        "Js | Dts"
      ],
      [
        "../src/fileb.mts",
        "Js | Dts"
      ],
      [
        "../src/randomfile.ts",
        "Js | Dts"
      ]
    ],
    "emitSignatures": [
      "../src/fileb.mts",
      "../src/filea.ts",
      "../src/randomfile.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts"
    ],
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 23
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "../src/fileB.mts"
          }
        }
      ],
      "names": [
        "./fileB.mjs"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "./fileB.mjs",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "../src/fileB.mts"
            }
          },
          "mode": "commonjs"
        }
      ],
      "modules": [
        {
          "dir": "../src",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "./fileB.mjs",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "../src/fileB.mts"
                }
              },
              "mode": "commonjs"
            }
          ]
        }
      ],
      "packageJsons": [
        [
          "../src/a",
          "../package.json"
        ],
        [
          "../src/b/ba",
          "../package.json"
        ],
        [
          "../src/c/ca/caa/caaa",
          "../package.json"
        ],
        [
          "../src/c/cb",
          "../package.json"
        ],
        [
          "../src/d/da/daa/daaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/e/ea/eaa/eaaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/faaa",
          "../package.json"
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 3934
}


Change:: random edit

Input::
//// [/src/projects/project/src/randomFile.ts]
export const x = 10;export const y = 10;


Output::
FileWatcher:: Triggered with /src/projects/project/src/randomFile.ts 1:: WatchInfo: /src/projects/project/src/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/src/randomFile.ts 1:: WatchInfo: /src/projects/project/src/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
[[90m12:02:11 AM[0m] File change detected. Starting incremental compilation...

Found 'package.json' at '/src/projects/project/package.json'.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
Reusing resolution of module './fileB.mjs' from '/src/projects/project/src/fileA.ts' found in cache from location '/src/projects/project/src', it was successfully resolved to '/src/projects/project/src/fileB.mts'.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/a' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/b/ba' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/b' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/c/ca' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/c/ca/caa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/c/ca/caa/caaa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/c/cb' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da/daa/daaa/x/y/z' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da/daa/daaa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da/daa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/e/ea' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/e/ea/eaa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/e/ea/eaa/eaaa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/f/fa/faa/x/y/z' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/f/fa/faa/faaa' resolves to '/src/projects/project/package.json' scope according to cache.
File '/a/lib/package.json' does not exist.
File '/a/package.json' does not exist.
File '/package.json' does not exist.
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS1479: [0mThe current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("./fileB.mjs")' call instead.
  To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `"type": "module"` to '/src/projects/project/package.json'.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
[[90m12:02:19 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/src/projects/project/src/fileA.ts","/src/projects/project/src/fileB.mts","/src/projects/project/src/randomFile.ts","/src/projects/project/src/a/randomFile.ts","/src/projects/project/src/b/ba/randomFile.ts","/src/projects/project/src/b/randomFile.ts","/src/projects/project/src/c/ca/randomFile.ts","/src/projects/project/src/c/ca/caa/randomFile.ts","/src/projects/project/src/c/ca/caa/caaa/randomFile.ts","/src/projects/project/src/c/cb/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/randomFile.ts","/src/projects/project/src/d/da/daa/randomFile.ts","/src/projects/project/src/d/da/randomFile.ts","/src/projects/project/src/e/ea/randomFile.ts","/src/projects/project/src/e/ea/eaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"]
Program options: {"target":3,"composite":true,"module":100,"outDir":"/src/projects/project/out","cacheResolutions":true,"traceResolution":true,"watch":true,"explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/src/projects/project/src/tsconfig.json"}
Program structureReused: SafeModuleCache
Program files::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Semantic diagnostics in builder refreshed for::
/src/projects/project/src/randomFile.ts

Shape signatures in builder refreshed for::
/src/projects/project/src/randomfile.ts (computed .d.ts)

PolledWatches::
/src/projects/project/src/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/a/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/b/ba/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/b/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/caaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/cb/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/faaa/package.json:
  {"pollingInterval":2000}
/a/lib/package.json:
  {"pollingInterval":2000}
/a/package.json:
  {"pollingInterval":2000}
/package.json:
  {"pollingInterval":2000}

FsWatches::
/src/projects/project/src/tsconfig.json:
  {}
/src/projects/project/src/filea.ts:
  {}
/src/projects/project/src/fileb.mts:
  {}
/src/projects/project/src/randomfile.ts:
  {}
/src/projects/project/src/a/randomfile.ts:
  {}
/src/projects/project/src/b/ba/randomfile.ts:
  {}
/src/projects/project/src/b/randomfile.ts:
  {}
/src/projects/project/src/c/ca/randomfile.ts:
  {}
/src/projects/project/src/c/ca/caa/randomfile.ts:
  {}
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts:
  {}
/src/projects/project/src/c/cb/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/daaa/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/randomfile.ts:
  {}
/src/projects/project/src/d/da/randomfile.ts:
  {}
/src/projects/project/src/e/ea/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts:
  {}
/src/projects/project/package.json:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.es2016.full.d.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts","../src","../src/fileB.mts","../src/a","../package.json","../src/b/ba","../src/c/ca/caa/caaa","../src/c/cb","../src/d/da/daa/daaa/x/y/z","../src/e/ea/eaa/eaaa/x/y/z","../src/f/fa/faa/x/y/z","../src/f/fa/faa/faaa"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"3524703962-export function foo() {}","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","impliedFormat":1},{"version":"-9547279430-export const x = 10;export const y = 10;","signature":"-18799098802-export declare const x = 10;\nexport declare const y = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"module":100,"outDir":"./","target":3},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[[3,1]],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,[3,[{"file":"../src/filea.ts","start":20,"length":13,"code":1479,"category":1,"messageText":{"messageText":"The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.","category":1,"code":1479,"next":[{"messageText":"To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `\"type\": \"module\"` to '/src/projects/project/package.json'.","category":3,"code":1481}]}}]],2,4],"affectedFilesPendingEmit":[5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,3,2,4],"emitSignatures":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],"cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":23}}],"names":["./fileB.mjs"],"resolutionEntries":[[1,1,1]],"modules":[[22,[1]]],"packageJsons":[[24,25],[26,25],[27,25],[28,25],[29,25],[30,25],[31,25],[32,25]]}},"version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.es2016.full.d.ts",
      "../src/fileb.mts",
      "../src/filea.ts",
      "../src/randomfile.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src",
      "../src/fileB.mts",
      "../src/a",
      "../package.json",
      "../src/b/ba",
      "../src/c/ca/caa/caaa",
      "../src/c/cb",
      "../src/d/da/daa/daaa/x/y/z",
      "../src/e/ea/eaa/eaaa/x/y/z",
      "../src/f/fa/faa/x/y/z",
      "../src/f/fa/faa/faaa"
    ],
    "fileNamesList": [
      [
        "../src/fileb.mts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.es2016.full.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../src/fileb.mts": {
        "original": {
          "version": "3524703962-export function foo() {}",
          "impliedFormat": 99
        },
        "version": "3524703962-export function foo() {}",
        "signature": "3524703962-export function foo() {}",
        "impliedFormat": "esnext"
      },
      "../src/filea.ts": {
        "original": {
          "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
          "impliedFormat": 1
        },
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "impliedFormat": "commonjs"
      },
      "../src/randomfile.ts": {
        "original": {
          "version": "-9547279430-export const x = 10;export const y = 10;",
          "signature": "-18799098802-export declare const x = 10;\nexport declare const y = 10;\n",
          "impliedFormat": 1
        },
        "version": "-9547279430-export const x = 10;export const y = 10;",
        "signature": "-18799098802-export declare const x = 10;\nexport declare const y = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/a/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/b/ba/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/b/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/caaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/c/cb/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/faaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 100,
      "outDir": "./",
      "target": 3
    },
    "referencedMap": {
      "../src/filea.ts": [
        "../src/fileb.mts"
      ]
    },
    "exportedModulesMap": {
      "../src/filea.ts": [
        "../src/fileb.mts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.es2016.full.d.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      [
        "../src/filea.ts",
        [
          {
            "file": "../src/filea.ts",
            "start": 20,
            "length": 13,
            "code": 1479,
            "category": 1,
            "messageText": {
              "messageText": "The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.",
              "category": 1,
              "code": 1479,
              "next": [
                {
                  "messageText": "To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `\"type\": \"module\"` to '/src/projects/project/package.json'.",
                  "category": 3,
                  "code": 1481
                }
              ]
            }
          }
        ]
      ],
      "../src/fileb.mts",
      "../src/randomfile.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "../src/a/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/b/ba/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/b/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/ca/caa/caaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/ca/caa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/ca/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/cb/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/daa/daaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/daa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/eaa/eaaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/eaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/f/fa/faa/faaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/f/fa/faa/x/y/z/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/filea.ts",
        "Js | Dts"
      ],
      [
        "../src/fileb.mts",
        "Js | Dts"
      ],
      [
        "../src/randomfile.ts",
        "Js | Dts"
      ]
    ],
    "emitSignatures": [
      "../src/fileb.mts",
      "../src/filea.ts",
      "../src/randomfile.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts"
    ],
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 23
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "../src/fileB.mts"
          }
        }
      ],
      "names": [
        "./fileB.mjs"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "./fileB.mjs",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "../src/fileB.mts"
            }
          },
          "mode": "commonjs"
        }
      ],
      "modules": [
        {
          "dir": "../src",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "./fileB.mjs",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "../src/fileB.mts"
                }
              },
              "mode": "commonjs"
            }
          ]
        }
      ],
      "packageJsons": [
        [
          "../src/a",
          "../package.json"
        ],
        [
          "../src/b/ba",
          "../package.json"
        ],
        [
          "../src/c/ca/caa/caaa",
          "../package.json"
        ],
        [
          "../src/c/cb",
          "../package.json"
        ],
        [
          "../src/d/da/daa/daaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/e/ea/eaa/eaaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/faaa",
          "../package.json"
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 4041
}


Change:: Modify package json file to add type module

Input::
//// [/src/projects/project/package.json]
{"name":"app","version":"1.0.0","type":"module"}


Output::
FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
[[90m12:02:23 AM[0m] File change detected. Starting incremental compilation...

Found 'package.json' at '/src/projects/project/package.json'.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in ESM mode with conditions 'node', 'import', 'types'.
Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/src/projects/project/src/fileB.mts' exist - use it as a name resolution result.
======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/a' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/b/ba' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/b' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/c/ca' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/c/ca/caa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/c/ca/caa/caaa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/c/cb' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da/daa/daaa/x/y/z' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da/daa/daaa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da/daa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/e/ea' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/e/ea/eaa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/e/ea/eaa/eaaa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/f/fa/faa/x/y/z' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/f/fa/faa/faaa' resolves to '/src/projects/project/package.json' scope according to cache.
File '/a/lib/package.json' does not exist.
File '/a/package.json' does not exist.
File '/package.json' does not exist.
../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
[[90m12:05:02 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/src/projects/project/src/fileA.ts","/src/projects/project/src/fileB.mts","/src/projects/project/src/randomFile.ts","/src/projects/project/src/a/randomFile.ts","/src/projects/project/src/b/ba/randomFile.ts","/src/projects/project/src/b/randomFile.ts","/src/projects/project/src/c/ca/randomFile.ts","/src/projects/project/src/c/ca/caa/randomFile.ts","/src/projects/project/src/c/ca/caa/caaa/randomFile.ts","/src/projects/project/src/c/cb/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/randomFile.ts","/src/projects/project/src/d/da/daa/randomFile.ts","/src/projects/project/src/d/da/randomFile.ts","/src/projects/project/src/e/ea/randomFile.ts","/src/projects/project/src/e/ea/eaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"]
Program options: {"target":3,"composite":true,"module":100,"outDir":"/src/projects/project/out","cacheResolutions":true,"traceResolution":true,"watch":true,"explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/src/projects/project/src/tsconfig.json"}
Program structureReused: SafeModuleCache
Program files::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Semantic diagnostics in builder refreshed for::
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Shape signatures in builder refreshed for::
/src/projects/project/src/filea.ts (computed .d.ts)
/src/projects/project/src/randomfile.ts (computed .d.ts)
/src/projects/project/src/a/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/ba/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/cb/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts (computed .d.ts)

PolledWatches::
/src/projects/project/src/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/a/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/b/ba/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/b/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/caaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/cb/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/faaa/package.json:
  {"pollingInterval":2000}
/a/lib/package.json:
  {"pollingInterval":2000}
/a/package.json:
  {"pollingInterval":2000}
/package.json:
  {"pollingInterval":2000}

FsWatches::
/src/projects/project/src/tsconfig.json:
  {}
/src/projects/project/src/filea.ts:
  {}
/src/projects/project/src/fileb.mts:
  {}
/src/projects/project/src/randomfile.ts:
  {}
/src/projects/project/src/a/randomfile.ts:
  {}
/src/projects/project/src/b/ba/randomfile.ts:
  {}
/src/projects/project/src/b/randomfile.ts:
  {}
/src/projects/project/src/c/ca/randomfile.ts:
  {}
/src/projects/project/src/c/ca/caa/randomfile.ts:
  {}
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts:
  {}
/src/projects/project/src/c/cb/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/daaa/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/randomfile.ts:
  {}
/src/projects/project/src/d/da/randomfile.ts:
  {}
/src/projects/project/src/e/ea/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts:
  {}
/src/projects/project/package.json:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.es2016.full.d.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts","../src","../src/fileB.mts","../src/a","../package.json","../src/b/ba","../src/c/ca/caa/caaa","../src/c/cb","../src/d/da/daa/daaa/x/y/z","../src/e/ea/eaa/eaaa/x/y/z","../src/f/fa/faa/x/y/z","../src/f/fa/faa/faaa"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"3524703962-export function foo() {}","signature":"-5677608893-export declare function foo(): void;\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-3531856636-export {};\n","impliedFormat":99},{"version":"-9547279430-export const x = 10;export const y = 10;","signature":"-18799098802-export declare const x = 10;\nexport declare const y = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99}],"options":{"cacheResolutions":true,"composite":true,"module":100,"outDir":"./","target":3},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,3,2,4],"latestChangedDtsFile":"./f/fa/faa/faaa/randomFile.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":23}}],"names":["./fileB.mjs"],"resolutionEntries":[[1,1,99]],"modules":[[22,[1]]],"packageJsons":[[24,25],[26,25],[27,25],[28,25],[29,25],[30,25],[31,25],[32,25]]}},"version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.es2016.full.d.ts",
      "../src/fileb.mts",
      "../src/filea.ts",
      "../src/randomfile.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src",
      "../src/fileB.mts",
      "../src/a",
      "../package.json",
      "../src/b/ba",
      "../src/c/ca/caa/caaa",
      "../src/c/cb",
      "../src/d/da/daa/daaa/x/y/z",
      "../src/e/ea/eaa/eaaa/x/y/z",
      "../src/f/fa/faa/x/y/z",
      "../src/f/fa/faa/faaa"
    ],
    "fileNamesList": [
      [
        "../src/fileb.mts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.es2016.full.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../src/fileb.mts": {
        "original": {
          "version": "3524703962-export function foo() {}",
          "signature": "-5677608893-export declare function foo(): void;\n",
          "impliedFormat": 99
        },
        "version": "3524703962-export function foo() {}",
        "signature": "-5677608893-export declare function foo(): void;\n",
        "impliedFormat": "esnext"
      },
      "../src/filea.ts": {
        "original": {
          "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
          "signature": "-3531856636-export {};\n",
          "impliedFormat": 99
        },
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": "esnext"
      },
      "../src/randomfile.ts": {
        "original": {
          "version": "-9547279430-export const x = 10;export const y = 10;",
          "signature": "-18799098802-export declare const x = 10;\nexport declare const y = 10;\n",
          "impliedFormat": 99
        },
        "version": "-9547279430-export const x = 10;export const y = 10;",
        "signature": "-18799098802-export declare const x = 10;\nexport declare const y = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/a/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/b/ba/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/b/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/c/ca/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/c/ca/caa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/c/ca/caa/caaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/c/cb/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/daa/daaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/daa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/eaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/eaa/eaaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/f/fa/faa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/f/fa/faa/faaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 100,
      "outDir": "./",
      "target": 3
    },
    "referencedMap": {
      "../src/filea.ts": [
        "../src/fileb.mts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.es2016.full.d.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/filea.ts",
      "../src/fileb.mts",
      "../src/randomfile.ts"
    ],
    "latestChangedDtsFile": "./f/fa/faa/faaa/randomFile.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 23
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "../src/fileB.mts"
          }
        }
      ],
      "names": [
        "./fileB.mjs"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1,
            99
          ],
          "resolutionEntryId": 1,
          "name": "./fileB.mjs",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "../src/fileB.mts"
            }
          },
          "mode": "esnext"
        }
      ],
      "modules": [
        {
          "dir": "../src",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "./fileB.mjs",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "../src/fileB.mts"
                }
              },
              "mode": "esnext"
            }
          ]
        }
      ],
      "packageJsons": [
        [
          "../src/a",
          "../package.json"
        ],
        [
          "../src/b/ba",
          "../package.json"
        ],
        [
          "../src/c/ca/caa/caaa",
          "../package.json"
        ],
        [
          "../src/c/cb",
          "../package.json"
        ],
        [
          "../src/d/da/daa/daaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/e/ea/eaa/eaaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/faaa",
          "../package.json"
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 4441
}

//// [/src/projects/project/out/fileB.mjs]
export function foo() { }


//// [/src/projects/project/out/fileB.d.mts]
export declare function foo(): void;


//// [/src/projects/project/out/fileA.js]
import { foo } from "./fileB.mjs";
foo();


//// [/src/projects/project/out/fileA.d.ts]
export {};


//// [/src/projects/project/out/randomFile.js]
export const x = 10;
export const y = 10;


//// [/src/projects/project/out/randomFile.d.ts]
export declare const x = 10;
export declare const y = 10;


//// [/src/projects/project/out/a/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/a/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/b/ba/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/b/ba/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/b/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/b/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/c/ca/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/ca/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/c/ca/caa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/ca/caa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/c/ca/caa/caaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/ca/caa/caaa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/c/cb/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/c/cb/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/x/y/z/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/x/y/z/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/daa/daaa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/d/da/daa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/daa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/d/da/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/d/da/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/e/ea/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/e/ea/eaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/eaa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/x/y/z/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/e/ea/eaa/eaaa/x/y/z/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/f/fa/faa/x/y/z/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/f/fa/faa/x/y/z/randomFile.d.ts]
export declare const x = 10;


//// [/src/projects/project/out/f/fa/faa/faaa/randomFile.js]
export const x = 10;


//// [/src/projects/project/out/f/fa/faa/faaa/randomFile.d.ts]
export declare const x = 10;



Change:: Modify package.json file to remove type module and random edit

Input::
//// [/src/projects/project/src/randomFile.ts]
export const x = 10;export const y = 10;export const z = 10;

//// [/src/projects/project/package.json]
{"name":"app","version":"1.0.0"}


Output::
FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 1:: WatchInfo: /src/projects/project/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Triggered with /src/projects/project/src/randomFile.ts 1:: WatchInfo: /src/projects/project/src/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/src/randomFile.ts 1:: WatchInfo: /src/projects/project/src/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
[[90m12:05:08 AM[0m] File change detected. Starting incremental compilation...

Found 'package.json' at '/src/projects/project/package.json'.
File '/src/projects/project/package.json' exists according to earlier cached lookups.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in CJS mode with conditions 'node', 'require', 'types'.
Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/src/projects/project/src/fileB.mts' exist - use it as a name resolution result.
======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/a' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/b/ba' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/b' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/c/ca' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/c/ca/caa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/c/ca/caa/caaa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/c/cb' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da/daa/daaa/x/y/z' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da/daa/daaa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da/daa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/e/ea' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/e/ea/eaa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/e/ea/eaa/eaaa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/f/fa/faa/x/y/z' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/f/fa/faa/faaa' resolves to '/src/projects/project/package.json' scope according to cache.
File '/a/lib/package.json' does not exist.
File '/a/package.json' does not exist.
File '/package.json' does not exist.
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS1479: [0mThe current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("./fileB.mjs")' call instead.
  To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `"type": "module"` to '/src/projects/project/package.json'.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' does not have field "type"
[[90m12:05:16 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/src/projects/project/src/fileA.ts","/src/projects/project/src/fileB.mts","/src/projects/project/src/randomFile.ts","/src/projects/project/src/a/randomFile.ts","/src/projects/project/src/b/ba/randomFile.ts","/src/projects/project/src/b/randomFile.ts","/src/projects/project/src/c/ca/randomFile.ts","/src/projects/project/src/c/ca/caa/randomFile.ts","/src/projects/project/src/c/ca/caa/caaa/randomFile.ts","/src/projects/project/src/c/cb/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/randomFile.ts","/src/projects/project/src/d/da/daa/randomFile.ts","/src/projects/project/src/d/da/randomFile.ts","/src/projects/project/src/e/ea/randomFile.ts","/src/projects/project/src/e/ea/eaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"]
Program options: {"target":3,"composite":true,"module":100,"outDir":"/src/projects/project/out","cacheResolutions":true,"traceResolution":true,"watch":true,"explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/src/projects/project/src/tsconfig.json"}
Program structureReused: SafeModuleCache
Program files::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Semantic diagnostics in builder refreshed for::
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Shape signatures in builder refreshed for::
/src/projects/project/src/filea.ts (computed .d.ts)
/src/projects/project/src/randomfile.ts (computed .d.ts)
/src/projects/project/src/a/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/ba/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/cb/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts (computed .d.ts)

PolledWatches::
/src/projects/project/src/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/a/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/b/ba/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/b/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/caaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/cb/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/faaa/package.json:
  {"pollingInterval":2000}
/a/lib/package.json:
  {"pollingInterval":2000}
/a/package.json:
  {"pollingInterval":2000}
/package.json:
  {"pollingInterval":2000}

FsWatches::
/src/projects/project/src/tsconfig.json:
  {}
/src/projects/project/src/filea.ts:
  {}
/src/projects/project/src/fileb.mts:
  {}
/src/projects/project/src/randomfile.ts:
  {}
/src/projects/project/src/a/randomfile.ts:
  {}
/src/projects/project/src/b/ba/randomfile.ts:
  {}
/src/projects/project/src/b/randomfile.ts:
  {}
/src/projects/project/src/c/ca/randomfile.ts:
  {}
/src/projects/project/src/c/ca/caa/randomfile.ts:
  {}
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts:
  {}
/src/projects/project/src/c/cb/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/daaa/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/randomfile.ts:
  {}
/src/projects/project/src/d/da/randomfile.ts:
  {}
/src/projects/project/src/e/ea/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts:
  {}
/src/projects/project/package.json:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.es2016.full.d.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts","../src","../src/fileB.mts","../src/a","../package.json","../src/b/ba","../src/c/ca/caa/caaa","../src/c/cb","../src/d/da/daa/daaa/x/y/z","../src/e/ea/eaa/eaaa/x/y/z","../src/f/fa/faa/x/y/z","../src/f/fa/faa/faaa"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"3524703962-export function foo() {}","signature":"-5677608893-export declare function foo(): void;\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-3531856636-export {};\n","impliedFormat":1},{"version":"-8895866314-export const x = 10;export const y = 10;export const z = 10;","signature":"-26065391196-export declare const x = 10;\nexport declare const y = 10;\nexport declare const z = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"module":100,"outDir":"./","target":3},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,[3,[{"file":"../src/filea.ts","start":20,"length":13,"code":1479,"category":1,"messageText":{"messageText":"The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.","category":1,"code":1479,"next":[{"messageText":"To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `\"type\": \"module\"` to '/src/projects/project/package.json'.","category":3,"code":1481}]}}]],2,4],"affectedFilesPendingEmit":[5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,3,4],"emitSignatures":[[4,"-18799098802-export declare const x = 10;\nexport declare const y = 10;\n"]],"latestChangedDtsFile":"./f/fa/faa/faaa/randomFile.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":23}}],"names":["./fileB.mjs"],"resolutionEntries":[[1,1,1]],"modules":[[22,[1]]],"packageJsons":[[24,25],[26,25],[27,25],[28,25],[29,25],[30,25],[31,25],[32,25]]}},"version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.es2016.full.d.ts",
      "../src/fileb.mts",
      "../src/filea.ts",
      "../src/randomfile.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src",
      "../src/fileB.mts",
      "../src/a",
      "../package.json",
      "../src/b/ba",
      "../src/c/ca/caa/caaa",
      "../src/c/cb",
      "../src/d/da/daa/daaa/x/y/z",
      "../src/e/ea/eaa/eaaa/x/y/z",
      "../src/f/fa/faa/x/y/z",
      "../src/f/fa/faa/faaa"
    ],
    "fileNamesList": [
      [
        "../src/fileb.mts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.es2016.full.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../src/fileb.mts": {
        "original": {
          "version": "3524703962-export function foo() {}",
          "signature": "-5677608893-export declare function foo(): void;\n",
          "impliedFormat": 99
        },
        "version": "3524703962-export function foo() {}",
        "signature": "-5677608893-export declare function foo(): void;\n",
        "impliedFormat": "esnext"
      },
      "../src/filea.ts": {
        "original": {
          "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
          "signature": "-3531856636-export {};\n",
          "impliedFormat": 1
        },
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": "commonjs"
      },
      "../src/randomfile.ts": {
        "original": {
          "version": "-8895866314-export const x = 10;export const y = 10;export const z = 10;",
          "signature": "-26065391196-export declare const x = 10;\nexport declare const y = 10;\nexport declare const z = 10;\n",
          "impliedFormat": 1
        },
        "version": "-8895866314-export const x = 10;export const y = 10;export const z = 10;",
        "signature": "-26065391196-export declare const x = 10;\nexport declare const y = 10;\nexport declare const z = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/a/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/b/ba/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/b/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/caaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/cb/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/faaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 100,
      "outDir": "./",
      "target": 3
    },
    "referencedMap": {
      "../src/filea.ts": [
        "../src/fileb.mts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.es2016.full.d.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      [
        "../src/filea.ts",
        [
          {
            "file": "../src/filea.ts",
            "start": 20,
            "length": 13,
            "code": 1479,
            "category": 1,
            "messageText": {
              "messageText": "The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.",
              "category": 1,
              "code": 1479,
              "next": [
                {
                  "messageText": "To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `\"type\": \"module\"` to '/src/projects/project/package.json'.",
                  "category": 3,
                  "code": 1481
                }
              ]
            }
          }
        ]
      ],
      "../src/fileb.mts",
      "../src/randomfile.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "../src/a/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/b/ba/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/b/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/ca/caa/caaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/ca/caa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/ca/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/cb/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/daa/daaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/daa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/eaa/eaaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/eaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/f/fa/faa/faaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/f/fa/faa/x/y/z/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/filea.ts",
        "Js | Dts"
      ],
      [
        "../src/randomfile.ts",
        "Js | Dts"
      ]
    ],
    "emitSignatures": [
      [
        "../src/randomfile.ts",
        "-18799098802-export declare const x = 10;\nexport declare const y = 10;\n"
      ]
    ],
    "latestChangedDtsFile": "./f/fa/faa/faaa/randomFile.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 23
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "../src/fileB.mts"
          }
        }
      ],
      "names": [
        "./fileB.mjs"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "./fileB.mjs",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "../src/fileB.mts"
            }
          },
          "mode": "commonjs"
        }
      ],
      "modules": [
        {
          "dir": "../src",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "./fileB.mjs",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "../src/fileB.mts"
                }
              },
              "mode": "commonjs"
            }
          ]
        }
      ],
      "packageJsons": [
        [
          "../src/a",
          "../package.json"
        ],
        [
          "../src/b/ba",
          "../package.json"
        ],
        [
          "../src/c/ca/caa/caaa",
          "../package.json"
        ],
        [
          "../src/c/cb",
          "../package.json"
        ],
        [
          "../src/d/da/daa/daaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/e/ea/eaa/eaaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/faaa",
          "../package.json"
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 5242
}


Change:: Delete package.json

Input::
//// [/src/projects/project/package.json] deleted

Output::
FileWatcher:: Triggered with /src/projects/project/package.json 2:: WatchInfo: /src/projects/project/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 2:: WatchInfo: /src/projects/project/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
[[90m12:05:19 AM[0m] File change detected. Starting incremental compilation...

File '/src/projects/project/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of module './fileB.mjs' from '/src/projects/project/src/fileA.ts' found in cache from location '/src/projects/project/src', it was successfully resolved to '/src/projects/project/src/fileB.mts'.
Directory '/src/projects/project/src' has no containing package.json scope according to cache.
File '/src/projects/project/src/a/package.json' does not exist.
Directory '/src/projects/project/src' has no containing package.json scope according to cache.
File '/src/projects/project/src/b/ba/package.json' does not exist.
File '/src/projects/project/src/b/package.json' does not exist.
Directory '/src/projects/project/src' has no containing package.json scope according to cache.
Directory '/src/projects/project/src/b' has no containing package.json scope according to cache.
File '/src/projects/project/src/c/ca/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist.
Directory '/src/projects/project/src' has no containing package.json scope according to cache.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist.
Directory '/src/projects/project/src/c/ca' has no containing package.json scope according to cache.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist.
Directory '/src/projects/project/src/c/ca/caa' has no containing package.json scope according to cache.
File '/src/projects/project/src/c/cb/package.json' does not exist.
Directory '/src/projects/project/src/c' has no containing package.json scope according to cache.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/package.json' does not exist.
File '/src/projects/project/src/d/da/package.json' does not exist.
File '/src/projects/project/src/d/package.json' does not exist.
Directory '/src/projects/project/src' has no containing package.json scope according to cache.
Directory '/src/projects/project/src/d/da/daa/daaa' has no containing package.json scope according to cache.
Directory '/src/projects/project/src/d/da/daa' has no containing package.json scope according to cache.
Directory '/src/projects/project/src/d/da' has no containing package.json scope according to cache.
File '/src/projects/project/src/e/ea/package.json' does not exist.
File '/src/projects/project/src/e/package.json' does not exist.
Directory '/src/projects/project/src' has no containing package.json scope according to cache.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist.
Directory '/src/projects/project/src/e/ea' has no containing package.json scope according to cache.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist.
Directory '/src/projects/project/src/e/ea/eaa' has no containing package.json scope according to cache.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist.
Directory '/src/projects/project/src/e/ea/eaa/eaaa' has no containing package.json scope according to cache.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist.
File '/src/projects/project/src/f/fa/package.json' does not exist.
File '/src/projects/project/src/f/package.json' does not exist.
Directory '/src/projects/project/src' has no containing package.json scope according to cache.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist.
Directory '/src/projects/project/src/f/fa/faa' has no containing package.json scope according to cache.
File '/a/lib/package.json' does not exist.
File '/a/package.json' does not exist.
Directory '/' has no containing package.json scope according to cache.
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS1479: [0mThe current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("./fileB.mjs")' call instead.
  To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `"type": "module"` to '/src/projects/project/package.json'.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
[[90m12:05:20 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/src/projects/project/src/fileA.ts","/src/projects/project/src/fileB.mts","/src/projects/project/src/randomFile.ts","/src/projects/project/src/a/randomFile.ts","/src/projects/project/src/b/ba/randomFile.ts","/src/projects/project/src/b/randomFile.ts","/src/projects/project/src/c/ca/randomFile.ts","/src/projects/project/src/c/ca/caa/randomFile.ts","/src/projects/project/src/c/ca/caa/caaa/randomFile.ts","/src/projects/project/src/c/cb/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/randomFile.ts","/src/projects/project/src/d/da/daa/randomFile.ts","/src/projects/project/src/d/da/randomFile.ts","/src/projects/project/src/e/ea/randomFile.ts","/src/projects/project/src/e/ea/eaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"]
Program options: {"target":3,"composite":true,"module":100,"outDir":"/src/projects/project/out","cacheResolutions":true,"traceResolution":true,"watch":true,"explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/src/projects/project/src/tsconfig.json"}
Program structureReused: SafeModuleCache
Program files::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

PolledWatches::
/src/projects/project/src/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/a/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/b/ba/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/b/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/caaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/cb/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/faaa/package.json:
  {"pollingInterval":2000}
/a/lib/package.json:
  {"pollingInterval":2000}
/a/package.json:
  {"pollingInterval":2000}
/package.json:
  {"pollingInterval":2000}

FsWatches::
/src/projects/project/src/tsconfig.json:
  {}
/src/projects/project/src/filea.ts:
  {}
/src/projects/project/src/fileb.mts:
  {}
/src/projects/project/src/randomfile.ts:
  {}
/src/projects/project/src/a/randomfile.ts:
  {}
/src/projects/project/src/b/ba/randomfile.ts:
  {}
/src/projects/project/src/b/randomfile.ts:
  {}
/src/projects/project/src/c/ca/randomfile.ts:
  {}
/src/projects/project/src/c/ca/caa/randomfile.ts:
  {}
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts:
  {}
/src/projects/project/src/c/cb/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/daaa/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/randomfile.ts:
  {}
/src/projects/project/src/d/da/randomfile.ts:
  {}
/src/projects/project/src/e/ea/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts:
  {}
/src/projects/project/package.json:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined


Change:: Add package json file with type module

Input::
//// [/src/projects/project/package.json]
{"name":"app","version":"1.0.0","type":"module"}


Output::
FileWatcher:: Triggered with /src/projects/project/package.json 0:: WatchInfo: /src/projects/project/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 0:: WatchInfo: /src/projects/project/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
[[90m12:05:23 AM[0m] File change detected. Starting incremental compilation...

File '/src/projects/project/src/package.json' does not exist.
Found 'package.json' at '/src/projects/project/package.json'.
======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in ESM mode with conditions 'node', 'import', 'types'.
Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/src/projects/project/src/fileB.mts' exist - use it as a name resolution result.
======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/a/package.json' does not exist.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/b/ba/package.json' does not exist.
File '/src/projects/project/src/b/package.json' does not exist.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/b' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/c/ca/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist.
Directory '/src/projects/project/src/c/ca' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist.
Directory '/src/projects/project/src/c/ca/caa' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/c/cb/package.json' does not exist.
Directory '/src/projects/project/src/c' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/package.json' does not exist.
File '/src/projects/project/src/d/da/package.json' does not exist.
File '/src/projects/project/src/d/package.json' does not exist.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da/daa/daaa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da/daa' resolves to '/src/projects/project/package.json' scope according to cache.
Directory '/src/projects/project/src/d/da' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/e/ea/package.json' does not exist.
File '/src/projects/project/src/e/package.json' does not exist.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist.
Directory '/src/projects/project/src/e/ea' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist.
Directory '/src/projects/project/src/e/ea/eaa' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist.
Directory '/src/projects/project/src/e/ea/eaa/eaaa' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist.
File '/src/projects/project/src/f/fa/package.json' does not exist.
File '/src/projects/project/src/f/package.json' does not exist.
Directory '/src/projects/project/src' resolves to '/src/projects/project/package.json' scope according to cache.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist.
Directory '/src/projects/project/src/f/fa/faa' resolves to '/src/projects/project/package.json' scope according to cache.
File '/a/lib/package.json' does not exist.
File '/a/package.json' does not exist.
File '/package.json' does not exist.
../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is ECMAScript module because 'package.json' has field "type" with value "module"
[[90m12:06:31 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/src/projects/project/src/fileA.ts","/src/projects/project/src/fileB.mts","/src/projects/project/src/randomFile.ts","/src/projects/project/src/a/randomFile.ts","/src/projects/project/src/b/ba/randomFile.ts","/src/projects/project/src/b/randomFile.ts","/src/projects/project/src/c/ca/randomFile.ts","/src/projects/project/src/c/ca/caa/randomFile.ts","/src/projects/project/src/c/ca/caa/caaa/randomFile.ts","/src/projects/project/src/c/cb/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/randomFile.ts","/src/projects/project/src/d/da/daa/randomFile.ts","/src/projects/project/src/d/da/randomFile.ts","/src/projects/project/src/e/ea/randomFile.ts","/src/projects/project/src/e/ea/eaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"]
Program options: {"target":3,"composite":true,"module":100,"outDir":"/src/projects/project/out","cacheResolutions":true,"traceResolution":true,"watch":true,"explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/src/projects/project/src/tsconfig.json"}
Program structureReused: SafeModuleCache
Program files::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Semantic diagnostics in builder refreshed for::
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Shape signatures in builder refreshed for::
/src/projects/project/src/filea.ts (computed .d.ts)
/src/projects/project/src/randomfile.ts (computed .d.ts)
/src/projects/project/src/a/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/ba/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/cb/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts (computed .d.ts)

PolledWatches::
/src/projects/project/src/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/a/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/b/ba/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/b/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/caaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/cb/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/faaa/package.json:
  {"pollingInterval":2000}
/a/lib/package.json:
  {"pollingInterval":2000}
/a/package.json:
  {"pollingInterval":2000}
/package.json:
  {"pollingInterval":2000}

FsWatches::
/src/projects/project/src/tsconfig.json:
  {}
/src/projects/project/src/filea.ts:
  {}
/src/projects/project/src/fileb.mts:
  {}
/src/projects/project/src/randomfile.ts:
  {}
/src/projects/project/src/a/randomfile.ts:
  {}
/src/projects/project/src/b/ba/randomfile.ts:
  {}
/src/projects/project/src/b/randomfile.ts:
  {}
/src/projects/project/src/c/ca/randomfile.ts:
  {}
/src/projects/project/src/c/ca/caa/randomfile.ts:
  {}
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts:
  {}
/src/projects/project/src/c/cb/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/daaa/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/randomfile.ts:
  {}
/src/projects/project/src/d/da/randomfile.ts:
  {}
/src/projects/project/src/e/ea/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts:
  {}
/src/projects/project/package.json:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.es2016.full.d.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts","../src","../src/fileB.mts","../src/a","../package.json","../src/b/ba","../src/c/ca/caa/caaa","../src/c/cb","../src/d/da/daa/daaa/x/y/z","../src/e/ea/eaa/eaaa/x/y/z","../src/f/fa/faa/x/y/z","../src/f/fa/faa/faaa"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"3524703962-export function foo() {}","signature":"-5677608893-export declare function foo(): void;\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-3531856636-export {};\n","impliedFormat":99},{"version":"-8895866314-export const x = 10;export const y = 10;export const z = 10;","signature":"-26065391196-export declare const x = 10;\nexport declare const y = 10;\nexport declare const z = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":99}],"options":{"cacheResolutions":true,"composite":true,"module":100,"outDir":"./","target":3},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,3,2,4],"latestChangedDtsFile":"./randomFile.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":23}}],"names":["./fileB.mjs"],"resolutionEntries":[[1,1,99]],"modules":[[22,[1]]],"packageJsons":[[24,25],[26,25],[27,25],[28,25],[29,25],[30,25],[31,25],[32,25]]}},"version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.es2016.full.d.ts",
      "../src/fileb.mts",
      "../src/filea.ts",
      "../src/randomfile.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src",
      "../src/fileB.mts",
      "../src/a",
      "../package.json",
      "../src/b/ba",
      "../src/c/ca/caa/caaa",
      "../src/c/cb",
      "../src/d/da/daa/daaa/x/y/z",
      "../src/e/ea/eaa/eaaa/x/y/z",
      "../src/f/fa/faa/x/y/z",
      "../src/f/fa/faa/faaa"
    ],
    "fileNamesList": [
      [
        "../src/fileb.mts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.es2016.full.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../src/fileb.mts": {
        "original": {
          "version": "3524703962-export function foo() {}",
          "signature": "-5677608893-export declare function foo(): void;\n",
          "impliedFormat": 99
        },
        "version": "3524703962-export function foo() {}",
        "signature": "-5677608893-export declare function foo(): void;\n",
        "impliedFormat": "esnext"
      },
      "../src/filea.ts": {
        "original": {
          "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
          "signature": "-3531856636-export {};\n",
          "impliedFormat": 99
        },
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": "esnext"
      },
      "../src/randomfile.ts": {
        "original": {
          "version": "-8895866314-export const x = 10;export const y = 10;export const z = 10;",
          "signature": "-26065391196-export declare const x = 10;\nexport declare const y = 10;\nexport declare const z = 10;\n",
          "impliedFormat": 99
        },
        "version": "-8895866314-export const x = 10;export const y = 10;export const z = 10;",
        "signature": "-26065391196-export declare const x = 10;\nexport declare const y = 10;\nexport declare const z = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/a/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/b/ba/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/b/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/c/ca/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/c/ca/caa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/c/ca/caa/caaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/c/cb/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/daa/daaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/daa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/d/da/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/eaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/eaa/eaaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/f/fa/faa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      },
      "../src/f/fa/faa/faaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 99
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "esnext"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 100,
      "outDir": "./",
      "target": 3
    },
    "referencedMap": {
      "../src/filea.ts": [
        "../src/fileb.mts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.es2016.full.d.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/filea.ts",
      "../src/fileb.mts",
      "../src/randomfile.ts"
    ],
    "latestChangedDtsFile": "./randomFile.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 23
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "../src/fileB.mts"
          }
        }
      ],
      "names": [
        "./fileB.mjs"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1,
            99
          ],
          "resolutionEntryId": 1,
          "name": "./fileB.mjs",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "../src/fileB.mts"
            }
          },
          "mode": "esnext"
        }
      ],
      "modules": [
        {
          "dir": "../src",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "./fileB.mjs",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "../src/fileB.mts"
                }
              },
              "mode": "esnext"
            }
          ]
        }
      ],
      "packageJsons": [
        [
          "../src/a",
          "../package.json"
        ],
        [
          "../src/b/ba",
          "../package.json"
        ],
        [
          "../src/c/ca/caa/caaa",
          "../package.json"
        ],
        [
          "../src/c/cb",
          "../package.json"
        ],
        [
          "../src/d/da/daa/daaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/e/ea/eaa/eaaa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/x/y/z",
          "../package.json"
        ],
        [
          "../src/f/fa/faa/faaa",
          "../package.json"
        ]
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 4477
}

//// [/src/projects/project/out/fileA.js] file written with same contents
//// [/src/projects/project/out/randomFile.js]
export const x = 10;
export const y = 10;
export const z = 10;


//// [/src/projects/project/out/randomFile.d.ts]
export declare const x = 10;
export declare const y = 10;
export declare const z = 10;


//// [/src/projects/project/out/a/randomFile.js] file written with same contents
//// [/src/projects/project/out/b/ba/randomFile.js] file written with same contents
//// [/src/projects/project/out/b/randomFile.js] file written with same contents
//// [/src/projects/project/out/c/ca/randomFile.js] file written with same contents
//// [/src/projects/project/out/c/ca/caa/randomFile.js] file written with same contents
//// [/src/projects/project/out/c/ca/caa/caaa/randomFile.js] file written with same contents
//// [/src/projects/project/out/c/cb/randomFile.js] file written with same contents
//// [/src/projects/project/out/d/da/daa/daaa/x/y/z/randomFile.js] file written with same contents
//// [/src/projects/project/out/d/da/daa/daaa/randomFile.js] file written with same contents
//// [/src/projects/project/out/d/da/daa/randomFile.js] file written with same contents
//// [/src/projects/project/out/d/da/randomFile.js] file written with same contents
//// [/src/projects/project/out/e/ea/randomFile.js] file written with same contents
//// [/src/projects/project/out/e/ea/eaa/randomFile.js] file written with same contents
//// [/src/projects/project/out/e/ea/eaa/eaaa/randomFile.js] file written with same contents
//// [/src/projects/project/out/e/ea/eaa/eaaa/x/y/z/randomFile.js] file written with same contents
//// [/src/projects/project/out/f/fa/faa/x/y/z/randomFile.js] file written with same contents
//// [/src/projects/project/out/f/fa/faa/faaa/randomFile.js] file written with same contents

Change:: Delete package.json and random edit and random edit

Input::
//// [/src/projects/project/src/randomFile.ts]
export const x = 10;export const y = 10;export const z = 10;export const k = 10;

//// [/src/projects/project/package.json] deleted

Output::
FileWatcher:: Triggered with /src/projects/project/package.json 2:: WatchInfo: /src/projects/project/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/package.json 2:: WatchInfo: /src/projects/project/package.json 2000 undefined package.json file /src/projects/project/src/tsconfig.json
FileWatcher:: Triggered with /src/projects/project/src/randomFile.ts 1:: WatchInfo: /src/projects/project/src/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
Elapsed:: *ms FileWatcher:: Triggered with /src/projects/project/src/randomFile.ts 1:: WatchInfo: /src/projects/project/src/randomFile.ts 250 undefined Source file /src/projects/project/src/tsconfig.json
[[90m12:06:35 AM[0m] File change detected. Starting incremental compilation...

File '/src/projects/project/package.json' does not exist.
File '/src/projects/project/src/package.json' does not exist.
File '/src/projects/project/package.json' does not exist according to earlier cached lookups.
File '/src/projects/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
======== Resolving module './fileB.mjs' from '/src/projects/project/src/fileA.ts'. ========
Module resolution kind is not specified, using 'Node16'.
Resolving in CJS mode with conditions 'node', 'require', 'types'.
Loading module as file / folder, candidate module location '/src/projects/project/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
File name '/src/projects/project/src/fileB.mjs' has a '.mjs' extension - stripping it.
File '/src/projects/project/src/fileB.mts' exist - use it as a name resolution result.
======== Module name './fileB.mjs' was successfully resolved to '/src/projects/project/src/fileB.mts'. ========
Directory '/src/projects/project/src' has no containing package.json scope according to cache.
File '/src/projects/project/src/a/package.json' does not exist.
Directory '/src/projects/project/src' has no containing package.json scope according to cache.
File '/src/projects/project/src/b/ba/package.json' does not exist.
File '/src/projects/project/src/b/package.json' does not exist.
Directory '/src/projects/project/src' has no containing package.json scope according to cache.
Directory '/src/projects/project/src/b' has no containing package.json scope according to cache.
File '/src/projects/project/src/c/ca/package.json' does not exist.
File '/src/projects/project/src/c/package.json' does not exist.
Directory '/src/projects/project/src' has no containing package.json scope according to cache.
File '/src/projects/project/src/c/ca/caa/package.json' does not exist.
Directory '/src/projects/project/src/c/ca' has no containing package.json scope according to cache.
File '/src/projects/project/src/c/ca/caa/caaa/package.json' does not exist.
Directory '/src/projects/project/src/c/ca/caa' has no containing package.json scope according to cache.
File '/src/projects/project/src/c/cb/package.json' does not exist.
Directory '/src/projects/project/src/c' has no containing package.json scope according to cache.
File '/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/y/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/x/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/daaa/package.json' does not exist.
File '/src/projects/project/src/d/da/daa/package.json' does not exist.
File '/src/projects/project/src/d/da/package.json' does not exist.
File '/src/projects/project/src/d/package.json' does not exist.
Directory '/src/projects/project/src' has no containing package.json scope according to cache.
Directory '/src/projects/project/src/d/da/daa/daaa' has no containing package.json scope according to cache.
Directory '/src/projects/project/src/d/da/daa' has no containing package.json scope according to cache.
Directory '/src/projects/project/src/d/da' has no containing package.json scope according to cache.
File '/src/projects/project/src/e/ea/package.json' does not exist.
File '/src/projects/project/src/e/package.json' does not exist.
Directory '/src/projects/project/src' has no containing package.json scope according to cache.
File '/src/projects/project/src/e/ea/eaa/package.json' does not exist.
Directory '/src/projects/project/src/e/ea' has no containing package.json scope according to cache.
File '/src/projects/project/src/e/ea/eaa/eaaa/package.json' does not exist.
Directory '/src/projects/project/src/e/ea/eaa' has no containing package.json scope according to cache.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json' does not exist.
File '/src/projects/project/src/e/ea/eaa/eaaa/x/package.json' does not exist.
Directory '/src/projects/project/src/e/ea/eaa/eaaa' has no containing package.json scope according to cache.
File '/src/projects/project/src/f/fa/faa/x/y/z/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/y/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/x/package.json' does not exist.
File '/src/projects/project/src/f/fa/faa/package.json' does not exist.
File '/src/projects/project/src/f/fa/package.json' does not exist.
File '/src/projects/project/src/f/package.json' does not exist.
Directory '/src/projects/project/src' has no containing package.json scope according to cache.
File '/src/projects/project/src/f/fa/faa/faaa/package.json' does not exist.
Directory '/src/projects/project/src/f/fa/faa' has no containing package.json scope according to cache.
File '/a/lib/package.json' does not exist.
File '/a/package.json' does not exist.
Directory '/' has no containing package.json scope according to cache.
[96msrc/fileA.ts[0m:[93m1[0m:[93m21[0m - [91merror[0m[90m TS1479: [0mThe current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("./fileB.mjs")' call instead.
  To convert this file to an ECMAScript module, change its file extension to '.mts' or create a local package.json file with `{ "type": "module" }`.

[7m1[0m import { foo } from "./fileB.mjs";
[7m [0m [91m                    ~~~~~~~~~~~~~[0m

../../../a/lib/lib.es2016.full.d.ts
  Default library for target 'es2016'
src/fileB.mts
  Imported via "./fileB.mjs" from file 'src/fileA.ts'
  Part of 'files' list in tsconfig.json
src/fileA.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/a/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/b/ba/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/b/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/ca/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/ca/caa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/ca/caa/caaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/c/cb/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/daa/daaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/daa/daaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/daa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/d/da/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/eaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/eaa/eaaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/f/fa/faa/x/y/z/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
src/f/fa/faa/faaa/randomFile.ts
  Part of 'files' list in tsconfig.json
  File is CommonJS module because 'package.json' was not found
[[90m12:06:43 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/src/projects/project/src/fileA.ts","/src/projects/project/src/fileB.mts","/src/projects/project/src/randomFile.ts","/src/projects/project/src/a/randomFile.ts","/src/projects/project/src/b/ba/randomFile.ts","/src/projects/project/src/b/randomFile.ts","/src/projects/project/src/c/ca/randomFile.ts","/src/projects/project/src/c/ca/caa/randomFile.ts","/src/projects/project/src/c/ca/caa/caaa/randomFile.ts","/src/projects/project/src/c/cb/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts","/src/projects/project/src/d/da/daa/daaa/randomFile.ts","/src/projects/project/src/d/da/daa/randomFile.ts","/src/projects/project/src/d/da/randomFile.ts","/src/projects/project/src/e/ea/randomFile.ts","/src/projects/project/src/e/ea/eaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts","/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts","/src/projects/project/src/f/fa/faa/faaa/randomFile.ts"]
Program options: {"target":3,"composite":true,"module":100,"outDir":"/src/projects/project/out","cacheResolutions":true,"traceResolution":true,"watch":true,"explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/src/projects/project/src/tsconfig.json"}
Program structureReused: SafeModuleCache
Program files::
/a/lib/lib.es2016.full.d.ts
/src/projects/project/src/fileB.mts
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Semantic diagnostics in builder refreshed for::
/src/projects/project/src/fileA.ts
/src/projects/project/src/randomFile.ts
/src/projects/project/src/a/randomFile.ts
/src/projects/project/src/b/ba/randomFile.ts
/src/projects/project/src/b/randomFile.ts
/src/projects/project/src/c/ca/randomFile.ts
/src/projects/project/src/c/ca/caa/randomFile.ts
/src/projects/project/src/c/ca/caa/caaa/randomFile.ts
/src/projects/project/src/c/cb/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomFile.ts
/src/projects/project/src/d/da/daa/daaa/randomFile.ts
/src/projects/project/src/d/da/daa/randomFile.ts
/src/projects/project/src/d/da/randomFile.ts
/src/projects/project/src/e/ea/randomFile.ts
/src/projects/project/src/e/ea/eaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/randomFile.ts
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/x/y/z/randomFile.ts
/src/projects/project/src/f/fa/faa/faaa/randomFile.ts

Shape signatures in builder refreshed for::
/src/projects/project/src/filea.ts (computed .d.ts)
/src/projects/project/src/randomfile.ts (computed .d.ts)
/src/projects/project/src/a/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/ba/randomfile.ts (computed .d.ts)
/src/projects/project/src/b/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/c/cb/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/daaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/daa/randomfile.ts (computed .d.ts)
/src/projects/project/src/d/da/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts (computed .d.ts)
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts (computed .d.ts)
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts (computed .d.ts)

PolledWatches::
/src/projects/project/src/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/a/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/b/ba/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/b/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/ca/caa/caaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/c/cb/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/daaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/daa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/da/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/d/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/e/ea/eaa/eaaa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/z/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/y/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/x/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/package.json:
  {"pollingInterval":2000}
/src/projects/project/src/f/fa/faa/faaa/package.json:
  {"pollingInterval":2000}
/a/lib/package.json:
  {"pollingInterval":2000}
/a/package.json:
  {"pollingInterval":2000}
/package.json:
  {"pollingInterval":2000}

FsWatches::
/src/projects/project/src/tsconfig.json:
  {}
/src/projects/project/src/filea.ts:
  {}
/src/projects/project/src/fileb.mts:
  {}
/src/projects/project/src/randomfile.ts:
  {}
/src/projects/project/src/a/randomfile.ts:
  {}
/src/projects/project/src/b/ba/randomfile.ts:
  {}
/src/projects/project/src/b/randomfile.ts:
  {}
/src/projects/project/src/c/ca/randomfile.ts:
  {}
/src/projects/project/src/c/ca/caa/randomfile.ts:
  {}
/src/projects/project/src/c/ca/caa/caaa/randomfile.ts:
  {}
/src/projects/project/src/c/cb/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/daaa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/daaa/randomfile.ts:
  {}
/src/projects/project/src/d/da/daa/randomfile.ts:
  {}
/src/projects/project/src/d/da/randomfile.ts:
  {}
/src/projects/project/src/e/ea/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/eaaa/randomfile.ts:
  {}
/src/projects/project/src/e/ea/eaa/eaaa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/f/fa/faa/x/y/z/randomfile.ts:
  {}
/src/projects/project/src/f/fa/faa/faaa/randomfile.ts:
  {}
/src/projects/project/package.json:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/src/projects/project/out/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../a/lib/lib.es2016.full.d.ts","../src/fileb.mts","../src/filea.ts","../src/randomfile.ts","../src/a/randomfile.ts","../src/b/ba/randomfile.ts","../src/b/randomfile.ts","../src/c/ca/randomfile.ts","../src/c/ca/caa/randomfile.ts","../src/c/ca/caa/caaa/randomfile.ts","../src/c/cb/randomfile.ts","../src/d/da/daa/daaa/x/y/z/randomfile.ts","../src/d/da/daa/daaa/randomfile.ts","../src/d/da/daa/randomfile.ts","../src/d/da/randomfile.ts","../src/e/ea/randomfile.ts","../src/e/ea/eaa/randomfile.ts","../src/e/ea/eaa/eaaa/randomfile.ts","../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts","../src/f/fa/faa/x/y/z/randomfile.ts","../src/f/fa/faa/faaa/randomfile.ts","../src","../src/fileB.mts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true,"impliedFormat":1},{"version":"3524703962-export function foo() {}","signature":"-5677608893-export declare function foo(): void;\n","impliedFormat":99},{"version":"-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n","signature":"-3531856636-export {};\n","impliedFormat":1},{"version":"-7156111517-export const x = 10;export const y = 10;export const z = 10;export const k = 10;","signature":"-22914839157-export declare const x = 10;\nexport declare const y = 10;\nexport declare const z = 10;\nexport declare const k = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"module":100,"outDir":"./","target":3},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,[3,[{"file":"../src/filea.ts","start":20,"length":13,"code":1479,"category":1,"messageText":{"messageText":"The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.","category":1,"code":1479,"next":[{"messageText":"To convert this file to an ECMAScript module, change its file extension to '.mts' or create a local package.json file with `{ \"type\": \"module\" }`.","category":3,"code":1480}]}}]],2,4],"affectedFilesPendingEmit":[5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,21,20,3,4],"emitSignatures":[[4,"-26065391196-export declare const x = 10;\nexport declare const y = 10;\nexport declare const z = 10;\n"]],"latestChangedDtsFile":"./randomFile.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":23}}],"names":["./fileB.mjs"],"resolutionEntries":[[1,1,1]],"modules":[[22,[1]]]}},"version":"FakeTSVersion"}

//// [/src/projects/project/out/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../a/lib/lib.es2016.full.d.ts",
      "../src/fileb.mts",
      "../src/filea.ts",
      "../src/randomfile.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src",
      "../src/fileB.mts"
    ],
    "fileNamesList": [
      [
        "../src/fileb.mts"
      ]
    ],
    "fileInfos": {
      "../../../../a/lib/lib.es2016.full.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "../src/fileb.mts": {
        "original": {
          "version": "3524703962-export function foo() {}",
          "signature": "-5677608893-export declare function foo(): void;\n",
          "impliedFormat": 99
        },
        "version": "3524703962-export function foo() {}",
        "signature": "-5677608893-export declare function foo(): void;\n",
        "impliedFormat": "esnext"
      },
      "../src/filea.ts": {
        "original": {
          "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
          "signature": "-3531856636-export {};\n",
          "impliedFormat": 1
        },
        "version": "-5325347830-import { foo } from \"./fileB.mjs\";\nfoo();\n",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": "commonjs"
      },
      "../src/randomfile.ts": {
        "original": {
          "version": "-7156111517-export const x = 10;export const y = 10;export const z = 10;export const k = 10;",
          "signature": "-22914839157-export declare const x = 10;\nexport declare const y = 10;\nexport declare const z = 10;\nexport declare const k = 10;\n",
          "impliedFormat": 1
        },
        "version": "-7156111517-export const x = 10;export const y = 10;export const z = 10;export const k = 10;",
        "signature": "-22914839157-export declare const x = 10;\nexport declare const y = 10;\nexport declare const z = 10;\nexport declare const k = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/a/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/b/ba/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/b/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/ca/caa/caaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/c/cb/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/daaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/daa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/d/da/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/x/y/z/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      },
      "../src/f/fa/faa/faaa/randomfile.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 100,
      "outDir": "./",
      "target": 3
    },
    "referencedMap": {
      "../src/filea.ts": [
        "../src/fileb.mts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../a/lib/lib.es2016.full.d.ts",
      "../src/a/randomfile.ts",
      "../src/b/ba/randomfile.ts",
      "../src/b/randomfile.ts",
      "../src/c/ca/caa/caaa/randomfile.ts",
      "../src/c/ca/caa/randomfile.ts",
      "../src/c/ca/randomfile.ts",
      "../src/c/cb/randomfile.ts",
      "../src/d/da/daa/daaa/randomfile.ts",
      "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
      "../src/d/da/daa/randomfile.ts",
      "../src/d/da/randomfile.ts",
      "../src/e/ea/eaa/eaaa/randomfile.ts",
      "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
      "../src/e/ea/eaa/randomfile.ts",
      "../src/e/ea/randomfile.ts",
      "../src/f/fa/faa/faaa/randomfile.ts",
      "../src/f/fa/faa/x/y/z/randomfile.ts",
      [
        "../src/filea.ts",
        [
          {
            "file": "../src/filea.ts",
            "start": 20,
            "length": 13,
            "code": 1479,
            "category": 1,
            "messageText": {
              "messageText": "The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.",
              "category": 1,
              "code": 1479,
              "next": [
                {
                  "messageText": "To convert this file to an ECMAScript module, change its file extension to '.mts' or create a local package.json file with `{ \"type\": \"module\" }`.",
                  "category": 3,
                  "code": 1480
                }
              ]
            }
          }
        ]
      ],
      "../src/fileb.mts",
      "../src/randomfile.ts"
    ],
    "affectedFilesPendingEmit": [
      [
        "../src/a/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/b/ba/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/b/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/ca/caa/caaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/ca/caa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/ca/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/c/cb/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/daa/daaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/daa/daaa/x/y/z/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/daa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/d/da/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/eaa/eaaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/eaa/eaaa/x/y/z/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/eaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/e/ea/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/f/fa/faa/faaa/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/f/fa/faa/x/y/z/randomfile.ts",
        "Js | Dts"
      ],
      [
        "../src/filea.ts",
        "Js | Dts"
      ],
      [
        "../src/randomfile.ts",
        "Js | Dts"
      ]
    ],
    "emitSignatures": [
      [
        "../src/randomfile.ts",
        "-26065391196-export declare const x = 10;\nexport declare const y = 10;\nexport declare const z = 10;\n"
      ]
    ],
    "latestChangedDtsFile": "./randomFile.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 23
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "../src/fileB.mts"
          }
        }
      ],
      "names": [
        "./fileB.mjs"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "./fileB.mjs",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "../src/fileB.mts"
            }
          },
          "mode": "commonjs"
        }
      ],
      "modules": [
        {
          "dir": "../src",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "./fileB.mjs",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "../src/fileB.mts"
                }
              },
              "mode": "commonjs"
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 5029
}

