Info 0    [00:02:55.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Info 1    [00:02:56.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/src/project/randomFileForImport.ts"
      },
      "seq": 1,
      "type": "request"
    }
Before request
//// [/src/project/tsconfig.json]
{"compilerOptions":{"composite":true,"cacheResolutions":true,"traceResolution":true},"files":["fileWithImports.ts","randomFileForImport.ts","a/fileWithImports.ts","b/ba/fileWithImports.ts","b/randomFileForImport.ts","c/ca/fileWithImports.ts","c/ca/caa/randomFileForImport.ts","c/ca/caa/caaa/fileWithImports.ts","c/cb/fileWithImports.ts","d/da/daa/daaa/x/y/z/randomFileForImport.ts","d/da/daa/daaa/fileWithImports.ts","d/da/daa/fileWithImports.ts","d/da/fileWithImports.ts","e/ea/fileWithImports.ts","e/ea/eaa/fileWithImports.ts","e/ea/eaa/eaaa/fileWithImports.ts","e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts"]}

//// [/src/project/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/randomFileForImport.ts]
export const x = 10;

//// [/src/project/a/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/b/ba/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/b/randomFileForImport.ts]
export const x = 10;

//// [/src/project/c/ca/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/c/ca/caa/randomFileForImport.ts]
export const x = 10;

//// [/src/project/c/ca/caa/caaa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/c/cb/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts]
import type { ImportInterface0 } from "pkg0";
export const x = 10;

//// [/src/project/d/da/daa/daaa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/d/da/daa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/d/da/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/e/ea/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/e/ea/eaa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/e/ea/eaa/eaaa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts]
export const x = 10;

//// [/src/project/node_modules/pkg0/index.d.ts]
export interface ImportInterface0 {}

//// [/a/lib/lib.d.ts]
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

//// [/src/project/fileWithImports.js]
"use strict";
exports.__esModule = true;


//// [/src/project/fileWithImports.d.ts]
export {};


//// [/src/project/randomFileForImport.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
exports.x = 10;


//// [/src/project/randomFileForImport.d.ts]
export declare const x = 10;


//// [/src/project/a/fileWithImports.js]
"use strict";
exports.__esModule = true;


//// [/src/project/a/fileWithImports.d.ts]
export {};


//// [/src/project/b/ba/fileWithImports.js]
"use strict";
exports.__esModule = true;


//// [/src/project/b/ba/fileWithImports.d.ts]
export {};


//// [/src/project/b/randomFileForImport.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
exports.x = 10;


//// [/src/project/b/randomFileForImport.d.ts]
export declare const x = 10;


//// [/src/project/c/ca/fileWithImports.js]
"use strict";
exports.__esModule = true;


//// [/src/project/c/ca/fileWithImports.d.ts]
export {};


//// [/src/project/c/ca/caa/randomFileForImport.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
exports.x = 10;


//// [/src/project/c/ca/caa/randomFileForImport.d.ts]
export declare const x = 10;


//// [/src/project/c/ca/caa/caaa/fileWithImports.js]
"use strict";
exports.__esModule = true;


//// [/src/project/c/ca/caa/caaa/fileWithImports.d.ts]
export {};


//// [/src/project/c/cb/fileWithImports.js]
"use strict";
exports.__esModule = true;


//// [/src/project/c/cb/fileWithImports.d.ts]
export {};


//// [/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
exports.x = 10;


//// [/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.d.ts]
export declare const x = 10;


//// [/src/project/d/da/daa/daaa/fileWithImports.js]
"use strict";
exports.__esModule = true;


//// [/src/project/d/da/daa/daaa/fileWithImports.d.ts]
export {};


//// [/src/project/d/da/daa/fileWithImports.js]
"use strict";
exports.__esModule = true;


//// [/src/project/d/da/daa/fileWithImports.d.ts]
export {};


//// [/src/project/d/da/fileWithImports.js]
"use strict";
exports.__esModule = true;


//// [/src/project/d/da/fileWithImports.d.ts]
export {};


//// [/src/project/e/ea/fileWithImports.js]
"use strict";
exports.__esModule = true;


//// [/src/project/e/ea/fileWithImports.d.ts]
export {};


//// [/src/project/e/ea/eaa/fileWithImports.js]
"use strict";
exports.__esModule = true;


//// [/src/project/e/ea/eaa/fileWithImports.d.ts]
export {};


//// [/src/project/e/ea/eaa/eaaa/fileWithImports.js]
"use strict";
exports.__esModule = true;


//// [/src/project/e/ea/eaa/eaaa/fileWithImports.d.ts]
export {};


//// [/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
exports.x = 10;


//// [/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts]
export declare const x = 10;


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../a/lib/lib.d.ts","./node_modules/pkg0/index.d.ts","./filewithimports.ts","./randomfileforimport.ts","./a/filewithimports.ts","./b/ba/filewithimports.ts","./b/randomfileforimport.ts","./c/ca/filewithimports.ts","./c/ca/caa/randomfileforimport.ts","./c/ca/caa/caaa/filewithimports.ts","./c/cb/filewithimports.ts","./d/da/daa/daaa/x/y/z/randomfileforimport.ts","./d/da/daa/daaa/filewithimports.ts","./d/da/daa/filewithimports.ts","./d/da/filewithimports.ts","./e/ea/filewithimports.ts","./e/ea/eaa/filewithimports.ts","./e/ea/eaa/eaaa/filewithimports.ts","./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts","./a","./b/ba","./c/ca/caa/caaa","./c/cb","./d/da/daa/daaa","./e/ea/eaa/eaaa"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"769951468-export interface ImportInterface0 {}",{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"}],"options":{"cacheResolutions":true,"composite":true},"fileIdsList":[[2]],"referencedMap":[[5,1],[6,1],[10,1],[8,1],[11,1],[13,1],[14,1],[15,1],[18,1],[17,1],[16,1],[3,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,3,2,4],"latestChangedDtsFile":"./e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true}}],"names":["pkg0"],"resolutionEntries":[[1,1]],"modules":[[20,[1]],[21,[1]],[22,[1]],[23,[1]],[24,[1]],[25,[1]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../a/lib/lib.d.ts",
      "./node_modules/pkg0/index.d.ts",
      "./filewithimports.ts",
      "./randomfileforimport.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./a",
      "./b/ba",
      "./c/ca/caa/caaa",
      "./c/cb",
      "./d/da/daa/daaa",
      "./e/ea/eaa/eaaa"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./node_modules/pkg0/index.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}"
      },
      "./filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./a/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./b/ba/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./b/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./c/ca/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./c/ca/caa/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./c/ca/caa/caaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./c/cb/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./d/da/daa/daaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/daa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/eaaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {
      "./a/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./b/ba/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/caa/caaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/cb/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/daaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/eaaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../a/lib/lib.d.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./filewithimports.ts",
      "./node_modules/pkg0/index.d.ts",
      "./randomfileforimport.ts"
    ],
    "latestChangedDtsFile": "./e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg0"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./a",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./b/ba",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./c/ca/caa/caaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./c/cb",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./d/da/daa/daaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./e/ea/eaa/eaaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 3658
}


PolledWatches::

FsWatches::

FsWatchesRecursive::

Info 2    [00:02:57.000] Search path: /src/project
Info 3    [00:02:58.000] For info: /src/project/randomFileForImport.ts :: Config file name: /src/project/tsconfig.json
Info 4    [00:02:59.000] Creating configuration project /src/project/tsconfig.json
Info 5    [00:03:00.000] FileWatcher:: Added:: WatchInfo: /src/project/tsconfig.json 2000 undefined Project: /src/project/tsconfig.json WatchType: Config file
Info 6    [00:03:01.000] Config: /src/project/tsconfig.json : {
 "rootNames": [
  "/src/project/fileWithImports.ts",
  "/src/project/randomFileForImport.ts",
  "/src/project/a/fileWithImports.ts",
  "/src/project/b/ba/fileWithImports.ts",
  "/src/project/b/randomFileForImport.ts",
  "/src/project/c/ca/fileWithImports.ts",
  "/src/project/c/ca/caa/randomFileForImport.ts",
  "/src/project/c/ca/caa/caaa/fileWithImports.ts",
  "/src/project/c/cb/fileWithImports.ts",
  "/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts",
  "/src/project/d/da/daa/daaa/fileWithImports.ts",
  "/src/project/d/da/daa/fileWithImports.ts",
  "/src/project/d/da/fileWithImports.ts",
  "/src/project/e/ea/fileWithImports.ts",
  "/src/project/e/ea/eaa/fileWithImports.ts",
  "/src/project/e/ea/eaa/eaaa/fileWithImports.ts",
  "/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts"
 ],
 "options": {
  "composite": true,
  "cacheResolutions": true,
  "traceResolution": true,
  "configFilePath": "/src/project/tsconfig.json"
 }
}
Info 7    [00:03:02.000] FileWatcher:: Added:: WatchInfo: /src/project/fileWithImports.ts 500 undefined WatchType: Closed Script info
Info 8    [00:03:03.000] FileWatcher:: Added:: WatchInfo: /src/project/a/fileWithImports.ts 500 undefined WatchType: Closed Script info
Info 9    [00:03:04.000] FileWatcher:: Added:: WatchInfo: /src/project/b/ba/fileWithImports.ts 500 undefined WatchType: Closed Script info
Info 10   [00:03:05.000] FileWatcher:: Added:: WatchInfo: /src/project/b/randomFileForImport.ts 500 undefined WatchType: Closed Script info
Info 11   [00:03:06.000] FileWatcher:: Added:: WatchInfo: /src/project/c/ca/fileWithImports.ts 500 undefined WatchType: Closed Script info
Info 12   [00:03:07.000] FileWatcher:: Added:: WatchInfo: /src/project/c/ca/caa/randomFileForImport.ts 500 undefined WatchType: Closed Script info
Info 13   [00:03:08.000] FileWatcher:: Added:: WatchInfo: /src/project/c/ca/caa/caaa/fileWithImports.ts 500 undefined WatchType: Closed Script info
Info 14   [00:03:09.000] FileWatcher:: Added:: WatchInfo: /src/project/c/cb/fileWithImports.ts 500 undefined WatchType: Closed Script info
Info 15   [00:03:10.000] FileWatcher:: Added:: WatchInfo: /src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts 500 undefined WatchType: Closed Script info
Info 16   [00:03:11.000] FileWatcher:: Added:: WatchInfo: /src/project/d/da/daa/daaa/fileWithImports.ts 500 undefined WatchType: Closed Script info
Info 17   [00:03:12.000] FileWatcher:: Added:: WatchInfo: /src/project/d/da/daa/fileWithImports.ts 500 undefined WatchType: Closed Script info
Info 18   [00:03:13.000] FileWatcher:: Added:: WatchInfo: /src/project/d/da/fileWithImports.ts 500 undefined WatchType: Closed Script info
Info 19   [00:03:14.000] FileWatcher:: Added:: WatchInfo: /src/project/e/ea/fileWithImports.ts 500 undefined WatchType: Closed Script info
Info 20   [00:03:15.000] FileWatcher:: Added:: WatchInfo: /src/project/e/ea/eaa/fileWithImports.ts 500 undefined WatchType: Closed Script info
Info 21   [00:03:16.000] FileWatcher:: Added:: WatchInfo: /src/project/e/ea/eaa/eaaa/fileWithImports.ts 500 undefined WatchType: Closed Script info
Info 22   [00:03:17.000] FileWatcher:: Added:: WatchInfo: /src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts 500 undefined WatchType: Closed Script info
Info 23   [00:03:18.000] Starting updateGraphWorker: Project: /src/project/tsconfig.json
Info 24   [00:03:19.000] Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Info 25   [00:03:20.000] DirectoryWatcher:: Added:: WatchInfo: /src/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info 26   [00:03:21.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /src/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info 27   [00:03:22.000] Reusing resolution of module 'pkg0' from '/src/project/a/fileWithImports.ts' found in cache from location '/src/project/a', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Info 28   [00:03:23.000] Reusing resolution of module 'pkg0' from '/src/project/b/ba/fileWithImports.ts' found in cache from location '/src/project/b/ba', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Info 29   [00:03:24.000] Reusing resolution of module 'pkg0' from '/src/project/c/ca/fileWithImports.ts' found in cache from location '/src/project/c/ca', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Info 30   [00:03:25.000] Reusing resolution of module 'pkg0' from '/src/project/c/ca/caa/caaa/fileWithImports.ts' found in cache from location '/src/project/c/ca/caa/caaa', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Info 31   [00:03:26.000] Reusing resolution of module 'pkg0' from '/src/project/c/cb/fileWithImports.ts' found in cache from location '/src/project/c/cb', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Info 32   [00:03:27.000] ======== Resolving module 'pkg0' from '/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts'. ========
Info 33   [00:03:28.000] Module resolution kind is not specified, using 'NodeJs'.
Info 34   [00:03:29.000] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info 35   [00:03:30.000] Directory '/src/project/d/da/daa/daaa/x/y/z/node_modules' does not exist, skipping all lookups in it.
Info 36   [00:03:31.000] Directory '/src/project/d/da/daa/daaa/x/y/node_modules' does not exist, skipping all lookups in it.
Info 37   [00:03:32.000] Directory '/src/project/d/da/daa/daaa/x/node_modules' does not exist, skipping all lookups in it.
Info 38   [00:03:33.000] Resolution for module 'pkg0' was found in cache from location '/src/project/d/da/daa/daaa'.
Info 39   [00:03:34.000] ======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Info 40   [00:03:35.000] Reusing resolution of module 'pkg0' from '/src/project/d/da/daa/daaa/fileWithImports.ts' found in cache from location '/src/project/d/da/daa/daaa', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Info 41   [00:03:36.000] Reusing resolution of module 'pkg0' from '/src/project/d/da/daa/fileWithImports.ts' found in cache from location '/src/project/d/da/daa', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Info 42   [00:03:37.000] Reusing resolution of module 'pkg0' from '/src/project/d/da/fileWithImports.ts' found in cache from location '/src/project/d/da', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Info 43   [00:03:38.000] Reusing resolution of module 'pkg0' from '/src/project/e/ea/fileWithImports.ts' found in cache from location '/src/project/e/ea', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Info 44   [00:03:39.000] Reusing resolution of module 'pkg0' from '/src/project/e/ea/eaa/fileWithImports.ts' found in cache from location '/src/project/e/ea/eaa', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Info 45   [00:03:40.000] Reusing resolution of module 'pkg0' from '/src/project/e/ea/eaa/eaaa/fileWithImports.ts' found in cache from location '/src/project/e/ea/eaa/eaaa', it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Info 46   [00:03:41.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 47   [00:03:42.000] DirectoryWatcher:: Added:: WatchInfo: /src/project/node_modules/@types 1 undefined Project: /src/project/tsconfig.json WatchType: Type roots
Info 48   [00:03:43.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /src/project/node_modules/@types 1 undefined Project: /src/project/tsconfig.json WatchType: Type roots
Info 49   [00:03:44.000] Finishing updateGraphWorker: Project: /src/project/tsconfig.json Version: 1 structureChanged: true structureIsReused:: SafeModuleCache Elapsed:: *ms
Info 50   [00:03:45.000] Project '/src/project/tsconfig.json' (Configured)
Info 51   [00:03:46.000] 	Files (19)
	/a/lib/lib.d.ts
	/src/project/node_modules/pkg0/index.d.ts
	/src/project/fileWithImports.ts
	/src/project/randomFileForImport.ts
	/src/project/a/fileWithImports.ts
	/src/project/b/ba/fileWithImports.ts
	/src/project/b/randomFileForImport.ts
	/src/project/c/ca/fileWithImports.ts
	/src/project/c/ca/caa/randomFileForImport.ts
	/src/project/c/ca/caa/caaa/fileWithImports.ts
	/src/project/c/cb/fileWithImports.ts
	/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts
	/src/project/d/da/daa/daaa/fileWithImports.ts
	/src/project/d/da/daa/fileWithImports.ts
	/src/project/d/da/fileWithImports.ts
	/src/project/e/ea/fileWithImports.ts
	/src/project/e/ea/eaa/fileWithImports.ts
	/src/project/e/ea/eaa/eaaa/fileWithImports.ts
	/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts


	../../a/lib/lib.d.ts
	  Default library for target 'es3'
	node_modules/pkg0/index.d.ts
	  Imported via "pkg0" from file 'fileWithImports.ts'
	  Imported via "pkg0" from file 'a/fileWithImports.ts'
	  Imported via "pkg0" from file 'b/ba/fileWithImports.ts'
	  Imported via "pkg0" from file 'c/ca/fileWithImports.ts'
	  Imported via "pkg0" from file 'c/ca/caa/caaa/fileWithImports.ts'
	  Imported via "pkg0" from file 'c/cb/fileWithImports.ts'
	  Imported via "pkg0" from file 'd/da/daa/daaa/x/y/z/randomFileForImport.ts'
	  Imported via "pkg0" from file 'd/da/daa/daaa/fileWithImports.ts'
	  Imported via "pkg0" from file 'd/da/daa/fileWithImports.ts'
	  Imported via "pkg0" from file 'd/da/fileWithImports.ts'
	  Imported via "pkg0" from file 'e/ea/fileWithImports.ts'
	  Imported via "pkg0" from file 'e/ea/eaa/fileWithImports.ts'
	  Imported via "pkg0" from file 'e/ea/eaa/eaaa/fileWithImports.ts'
	fileWithImports.ts
	  Part of 'files' list in tsconfig.json
	randomFileForImport.ts
	  Part of 'files' list in tsconfig.json
	a/fileWithImports.ts
	  Part of 'files' list in tsconfig.json
	b/ba/fileWithImports.ts
	  Part of 'files' list in tsconfig.json
	b/randomFileForImport.ts
	  Part of 'files' list in tsconfig.json
	c/ca/fileWithImports.ts
	  Part of 'files' list in tsconfig.json
	c/ca/caa/randomFileForImport.ts
	  Part of 'files' list in tsconfig.json
	c/ca/caa/caaa/fileWithImports.ts
	  Part of 'files' list in tsconfig.json
	c/cb/fileWithImports.ts
	  Part of 'files' list in tsconfig.json
	d/da/daa/daaa/x/y/z/randomFileForImport.ts
	  Part of 'files' list in tsconfig.json
	d/da/daa/daaa/fileWithImports.ts
	  Part of 'files' list in tsconfig.json
	d/da/daa/fileWithImports.ts
	  Part of 'files' list in tsconfig.json
	d/da/fileWithImports.ts
	  Part of 'files' list in tsconfig.json
	e/ea/fileWithImports.ts
	  Part of 'files' list in tsconfig.json
	e/ea/eaa/fileWithImports.ts
	  Part of 'files' list in tsconfig.json
	e/ea/eaa/eaaa/fileWithImports.ts
	  Part of 'files' list in tsconfig.json
	e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts
	  Part of 'files' list in tsconfig.json

Info 52   [00:03:47.000] -----------------------------------------------
Info 53   [00:03:48.000] Search path: /src/project
Info 54   [00:03:49.000] For info: /src/project/tsconfig.json :: No config files found.
Info 55   [00:03:50.000] Project '/src/project/tsconfig.json' (Configured)
Info 55   [00:03:51.000] 	Files (19)

Info 55   [00:03:52.000] -----------------------------------------------
Info 55   [00:03:53.000] Open files: 
Info 55   [00:03:54.000] 	FileName: /src/project/randomFileForImport.ts ProjectRootPath: undefined
Info 55   [00:03:55.000] 		Projects: /src/project/tsconfig.json
After request

PolledWatches::
/src/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/src/project/tsconfig.json:
  {}
/src/project/filewithimports.ts:
  {}
/src/project/a/filewithimports.ts:
  {}
/src/project/b/ba/filewithimports.ts:
  {}
/src/project/b/randomfileforimport.ts:
  {}
/src/project/c/ca/filewithimports.ts:
  {}
/src/project/c/ca/caa/randomfileforimport.ts:
  {}
/src/project/c/ca/caa/caaa/filewithimports.ts:
  {}
/src/project/c/cb/filewithimports.ts:
  {}
/src/project/d/da/daa/daaa/x/y/z/randomfileforimport.ts:
  {}
/src/project/d/da/daa/daaa/filewithimports.ts:
  {}
/src/project/d/da/daa/filewithimports.ts:
  {}
/src/project/d/da/filewithimports.ts:
  {}
/src/project/e/ea/filewithimports.ts:
  {}
/src/project/e/ea/eaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/src/project/node_modules:
  {}

Info 55   [00:03:56.000] response:
    {
      "responseRequired": false
    }