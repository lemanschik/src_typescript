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
Info 24   [00:03:19.000] ======== Resolving module 'pkg0' from '/src/project/fileWithImports.ts'. ========
Info 25   [00:03:20.000] Module resolution kind is not specified, using 'NodeJs'.
Info 26   [00:03:21.000] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info 27   [00:03:22.000] File '/src/project/node_modules/pkg0/package.json' does not exist.
Info 28   [00:03:23.000] File '/src/project/node_modules/pkg0.ts' does not exist.
Info 29   [00:03:24.000] File '/src/project/node_modules/pkg0.tsx' does not exist.
Info 30   [00:03:25.000] File '/src/project/node_modules/pkg0.d.ts' does not exist.
Info 31   [00:03:26.000] File '/src/project/node_modules/pkg0/index.ts' does not exist.
Info 32   [00:03:27.000] File '/src/project/node_modules/pkg0/index.tsx' does not exist.
Info 33   [00:03:28.000] File '/src/project/node_modules/pkg0/index.d.ts' exist - use it as a name resolution result.
Info 34   [00:03:29.000] Resolving real path for '/src/project/node_modules/pkg0/index.d.ts', result '/src/project/node_modules/pkg0/index.d.ts'.
Info 35   [00:03:30.000] ======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Info 36   [00:03:31.000] DirectoryWatcher:: Added:: WatchInfo: /src/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info 37   [00:03:32.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /src/project/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info 38   [00:03:33.000] ======== Resolving module 'pkg0' from '/src/project/a/fileWithImports.ts'. ========
Info 39   [00:03:34.000] Module resolution kind is not specified, using 'NodeJs'.
Info 40   [00:03:35.000] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info 41   [00:03:36.000] Directory '/src/project/a/node_modules' does not exist, skipping all lookups in it.
Info 42   [00:03:37.000] Resolution for module 'pkg0' was found in cache from location '/src/project'.
Info 43   [00:03:38.000] ======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Info 44   [00:03:39.000] ======== Resolving module 'pkg0' from '/src/project/b/ba/fileWithImports.ts'. ========
Info 45   [00:03:40.000] Module resolution kind is not specified, using 'NodeJs'.
Info 46   [00:03:41.000] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info 47   [00:03:42.000] Directory '/src/project/b/ba/node_modules' does not exist, skipping all lookups in it.
Info 48   [00:03:43.000] Directory '/src/project/b/node_modules' does not exist, skipping all lookups in it.
Info 49   [00:03:44.000] Resolution for module 'pkg0' was found in cache from location '/src/project'.
Info 50   [00:03:45.000] ======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Info 51   [00:03:46.000] ======== Resolving module 'pkg0' from '/src/project/c/ca/fileWithImports.ts'. ========
Info 52   [00:03:47.000] Module resolution kind is not specified, using 'NodeJs'.
Info 53   [00:03:48.000] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info 54   [00:03:49.000] Directory '/src/project/c/ca/node_modules' does not exist, skipping all lookups in it.
Info 55   [00:03:50.000] Directory '/src/project/c/node_modules' does not exist, skipping all lookups in it.
Info 56   [00:03:51.000] Resolution for module 'pkg0' was found in cache from location '/src/project'.
Info 57   [00:03:52.000] ======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Info 58   [00:03:53.000] ======== Resolving module 'pkg0' from '/src/project/c/ca/caa/caaa/fileWithImports.ts'. ========
Info 59   [00:03:54.000] Module resolution kind is not specified, using 'NodeJs'.
Info 60   [00:03:55.000] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info 61   [00:03:56.000] Directory '/src/project/c/ca/caa/caaa/node_modules' does not exist, skipping all lookups in it.
Info 62   [00:03:57.000] Directory '/src/project/c/ca/caa/node_modules' does not exist, skipping all lookups in it.
Info 63   [00:03:58.000] Resolution for module 'pkg0' was found in cache from location '/src/project/c/ca'.
Info 64   [00:03:59.000] ======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Info 65   [00:04:00.000] ======== Resolving module 'pkg0' from '/src/project/c/cb/fileWithImports.ts'. ========
Info 66   [00:04:01.000] Module resolution kind is not specified, using 'NodeJs'.
Info 67   [00:04:02.000] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info 68   [00:04:03.000] Directory '/src/project/c/cb/node_modules' does not exist, skipping all lookups in it.
Info 69   [00:04:04.000] Resolution for module 'pkg0' was found in cache from location '/src/project/c'.
Info 70   [00:04:05.000] ======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Info 71   [00:04:06.000] ======== Resolving module 'pkg0' from '/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts'. ========
Info 72   [00:04:07.000] Module resolution kind is not specified, using 'NodeJs'.
Info 73   [00:04:08.000] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info 74   [00:04:09.000] Directory '/src/project/d/da/daa/daaa/x/y/z/node_modules' does not exist, skipping all lookups in it.
Info 75   [00:04:10.000] Directory '/src/project/d/da/daa/daaa/x/y/node_modules' does not exist, skipping all lookups in it.
Info 76   [00:04:11.000] Directory '/src/project/d/da/daa/daaa/x/node_modules' does not exist, skipping all lookups in it.
Info 77   [00:04:12.000] Directory '/src/project/d/da/daa/daaa/node_modules' does not exist, skipping all lookups in it.
Info 78   [00:04:13.000] Directory '/src/project/d/da/daa/node_modules' does not exist, skipping all lookups in it.
Info 79   [00:04:14.000] Directory '/src/project/d/da/node_modules' does not exist, skipping all lookups in it.
Info 80   [00:04:15.000] Directory '/src/project/d/node_modules' does not exist, skipping all lookups in it.
Info 81   [00:04:16.000] Resolution for module 'pkg0' was found in cache from location '/src/project'.
Info 82   [00:04:17.000] ======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Info 83   [00:04:18.000] ======== Resolving module 'pkg0' from '/src/project/d/da/daa/daaa/fileWithImports.ts'. ========
Info 84   [00:04:19.000] Module resolution kind is not specified, using 'NodeJs'.
Info 85   [00:04:20.000] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info 86   [00:04:21.000] Resolution for module 'pkg0' was found in cache from location '/src/project/d/da/daa/daaa'.
Info 87   [00:04:22.000] ======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Info 88   [00:04:23.000] ======== Resolving module 'pkg0' from '/src/project/d/da/daa/fileWithImports.ts'. ========
Info 89   [00:04:24.000] Module resolution kind is not specified, using 'NodeJs'.
Info 90   [00:04:25.000] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info 91   [00:04:26.000] Resolution for module 'pkg0' was found in cache from location '/src/project/d/da/daa'.
Info 92   [00:04:27.000] ======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Info 93   [00:04:28.000] ======== Resolving module 'pkg0' from '/src/project/d/da/fileWithImports.ts'. ========
Info 94   [00:04:29.000] Module resolution kind is not specified, using 'NodeJs'.
Info 95   [00:04:30.000] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info 96   [00:04:31.000] Resolution for module 'pkg0' was found in cache from location '/src/project/d/da'.
Info 97   [00:04:32.000] ======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Info 98   [00:04:33.000] ======== Resolving module 'pkg0' from '/src/project/e/ea/fileWithImports.ts'. ========
Info 99   [00:04:34.000] Module resolution kind is not specified, using 'NodeJs'.
Info 100  [00:04:35.000] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info 101  [00:04:36.000] Directory '/src/project/e/ea/node_modules' does not exist, skipping all lookups in it.
Info 102  [00:04:37.000] Directory '/src/project/e/node_modules' does not exist, skipping all lookups in it.
Info 103  [00:04:38.000] Resolution for module 'pkg0' was found in cache from location '/src/project'.
Info 104  [00:04:39.000] ======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Info 105  [00:04:40.000] ======== Resolving module 'pkg0' from '/src/project/e/ea/eaa/fileWithImports.ts'. ========
Info 106  [00:04:41.000] Module resolution kind is not specified, using 'NodeJs'.
Info 107  [00:04:42.000] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info 108  [00:04:43.000] Directory '/src/project/e/ea/eaa/node_modules' does not exist, skipping all lookups in it.
Info 109  [00:04:44.000] Resolution for module 'pkg0' was found in cache from location '/src/project/e/ea'.
Info 110  [00:04:45.000] ======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Info 111  [00:04:46.000] ======== Resolving module 'pkg0' from '/src/project/e/ea/eaa/eaaa/fileWithImports.ts'. ========
Info 112  [00:04:47.000] Module resolution kind is not specified, using 'NodeJs'.
Info 113  [00:04:48.000] Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Info 114  [00:04:49.000] Directory '/src/project/e/ea/eaa/eaaa/node_modules' does not exist, skipping all lookups in it.
Info 115  [00:04:50.000] Resolution for module 'pkg0' was found in cache from location '/src/project/e/ea/eaa'.
Info 116  [00:04:51.000] ======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Info 117  [00:04:52.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 118  [00:04:53.000] DirectoryWatcher:: Added:: WatchInfo: /src/project/node_modules/@types 1 undefined Project: /src/project/tsconfig.json WatchType: Type roots
Info 119  [00:04:54.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /src/project/node_modules/@types 1 undefined Project: /src/project/tsconfig.json WatchType: Type roots
Info 120  [00:04:55.000] Finishing updateGraphWorker: Project: /src/project/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 121  [00:04:56.000] Project '/src/project/tsconfig.json' (Configured)
Info 122  [00:04:57.000] 	Files (19)
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

Info 123  [00:04:58.000] -----------------------------------------------
Info 124  [00:04:59.000] Search path: /src/project
Info 125  [00:05:00.000] For info: /src/project/tsconfig.json :: No config files found.
Info 126  [00:05:01.000] Project '/src/project/tsconfig.json' (Configured)
Info 126  [00:05:02.000] 	Files (19)

Info 126  [00:05:03.000] -----------------------------------------------
Info 126  [00:05:04.000] Open files: 
Info 126  [00:05:05.000] 	FileName: /src/project/randomFileForImport.ts ProjectRootPath: undefined
Info 126  [00:05:06.000] 		Projects: /src/project/tsconfig.json
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

Info 126  [00:05:07.000] response:
    {
      "responseRequired": false
    }