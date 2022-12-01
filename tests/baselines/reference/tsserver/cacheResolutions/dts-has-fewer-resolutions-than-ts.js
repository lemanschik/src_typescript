Info 0    [00:01:14.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Info 1    [00:01:15.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/sample1/tests/index.ts"
      },
      "seq": 1,
      "type": "request"
    }
Before request
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

//// [/user/username/projects/sample1/core/tsconfig.json]
{"compilerOptions":{"composite":true,"cacheResolutions":true,"traceResolution":true}}

//// [/user/username/projects/sample1/core/index.ts]
export function bar() { return 10; }

//// [/user/username/projects/sample1/core/myClass.ts]
export class myClass { }

//// [/user/username/projects/sample1/core/anotherClass.ts]
export class anotherClass { }

//// [/user/username/projects/sample1/logic/tsconfig.json]
{"compilerOptions":{"composite":true,"cacheResolutions":true,"traceResolution":true},"references":[{"path":"../core"}]}

//// [/user/username/projects/sample1/logic/index.ts]
import { myClass } from "../core/myClass";
import { bar } from "../core";
import { anotherClass } from "../core/anotherClass";
export function returnMyClass() {
    bar();
    return new myClass();
}
export function returnAnotherClass() {
    return new anotherClass();
}


//// [/user/username/projects/sample1/tests/tsconfig.json]
{"compilerOptions":{"composite":true,"cacheResolutions":true,"traceResolution":true},"references":[{"path":"../logic"}]}

//// [/user/username/projects/sample1/tests/index.ts]
import { returnMyClass } from "../logic";
returnMyClass();


//// [/user/username/projects/sample1/core/anotherClass.js]
"use strict";
exports.__esModule = true;
exports.anotherClass = void 0;
var anotherClass = /** @class */ (function () {
    function anotherClass() {
    }
    return anotherClass;
}());
exports.anotherClass = anotherClass;


//// [/user/username/projects/sample1/core/anotherClass.d.ts]
export declare class anotherClass {
}


//// [/user/username/projects/sample1/core/index.js]
"use strict";
exports.__esModule = true;
exports.bar = void 0;
function bar() { return 10; }
exports.bar = bar;


//// [/user/username/projects/sample1/core/index.d.ts]
export declare function bar(): number;


//// [/user/username/projects/sample1/core/myClass.js]
"use strict";
exports.__esModule = true;
exports.myClass = void 0;
var myClass = /** @class */ (function () {
    function myClass() {
    }
    return myClass;
}());
exports.myClass = myClass;


//// [/user/username/projects/sample1/core/myClass.d.ts]
export declare class myClass {
}


//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./anotherclass.ts","./index.ts","./myclass.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-6664885476-export class anotherClass { }","signature":"-6928009824-export declare class anotherClass {\n}\n"},{"version":"4120767815-export function bar() { return 10; }","signature":"-4193260373-export declare function bar(): number;\n"},{"version":"-11785903855-export class myClass { }","signature":"-7432826827-export declare class myClass {\n}\n"}],"options":{"cacheResolutions":true,"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3,4],"latestChangedDtsFile":"./myClass.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./anotherclass.ts",
      "./index.ts",
      "./myclass.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./anotherclass.ts": {
        "original": {
          "version": "-6664885476-export class anotherClass { }",
          "signature": "-6928009824-export declare class anotherClass {\n}\n"
        },
        "version": "-6664885476-export class anotherClass { }",
        "signature": "-6928009824-export declare class anotherClass {\n}\n"
      },
      "./index.ts": {
        "original": {
          "version": "4120767815-export function bar() { return 10; }",
          "signature": "-4193260373-export declare function bar(): number;\n"
        },
        "version": "4120767815-export function bar() { return 10; }",
        "signature": "-4193260373-export declare function bar(): number;\n"
      },
      "./myclass.ts": {
        "original": {
          "version": "-11785903855-export class myClass { }",
          "signature": "-7432826827-export declare class myClass {\n}\n"
        },
        "version": "-11785903855-export class myClass { }",
        "signature": "-7432826827-export declare class myClass {\n}\n"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./anotherclass.ts",
      "./index.ts",
      "./myclass.ts"
    ],
    "latestChangedDtsFile": "./myClass.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1087
}

//// [/user/username/projects/sample1/logic/index.js]
"use strict";
exports.__esModule = true;
exports.returnAnotherClass = exports.returnMyClass = void 0;
var myClass_1 = require("../core/myClass");
var core_1 = require("../core");
var anotherClass_1 = require("../core/anotherClass");
function returnMyClass() {
    (0, core_1.bar)();
    return new myClass_1.myClass();
}
exports.returnMyClass = returnMyClass;
function returnAnotherClass() {
    return new anotherClass_1.anotherClass();
}
exports.returnAnotherClass = returnAnotherClass;


//// [/user/username/projects/sample1/logic/index.d.ts]
import { myClass } from "../core/myClass";
import { anotherClass } from "../core/anotherClass";
export declare function returnMyClass(): myClass;
export declare function returnAnotherClass(): anotherClass;


//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../core/myclass.d.ts","../core/index.d.ts","../core/anotherclass.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-7432826827-export declare class myClass {\n}\n","-4193260373-export declare function bar(): number;\n","-6928009824-export declare class anotherClass {\n}\n",{"version":"-9720705499-import { myClass } from \"../core/myClass\";\nimport { bar } from \"../core\";\nimport { anotherClass } from \"../core/anotherClass\";\nexport function returnMyClass() {\n    bar();\n    return new myClass();\n}\nexport function returnAnotherClass() {\n    return new anotherClass();\n}\n","signature":"-26318514585-import { myClass } from \"../core/myClass\";\nimport { anotherClass } from \"../core/anotherClass\";\nexport declare function returnMyClass(): myClass;\nexport declare function returnAnotherClass(): anotherClass;\n"}],"options":{"cacheResolutions":true,"composite":true},"fileIdsList":[[2,3,4],[2,4]],"referencedMap":[[5,1]],"exportedModulesMap":[[5,2]],"semanticDiagnosticsPerFile":[1,4,3,2,5],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/myclass.d.ts",
      "../core/index.d.ts",
      "../core/anotherclass.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/myclass.d.ts",
        "../core/index.d.ts",
        "../core/anotherclass.d.ts"
      ],
      [
        "../core/myclass.d.ts",
        "../core/anotherclass.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../core/myclass.d.ts": {
        "version": "-7432826827-export declare class myClass {\n}\n",
        "signature": "-7432826827-export declare class myClass {\n}\n"
      },
      "../core/index.d.ts": {
        "version": "-4193260373-export declare function bar(): number;\n",
        "signature": "-4193260373-export declare function bar(): number;\n"
      },
      "../core/anotherclass.d.ts": {
        "version": "-6928009824-export declare class anotherClass {\n}\n",
        "signature": "-6928009824-export declare class anotherClass {\n}\n"
      },
      "./index.ts": {
        "original": {
          "version": "-9720705499-import { myClass } from \"../core/myClass\";\nimport { bar } from \"../core\";\nimport { anotherClass } from \"../core/anotherClass\";\nexport function returnMyClass() {\n    bar();\n    return new myClass();\n}\nexport function returnAnotherClass() {\n    return new anotherClass();\n}\n",
          "signature": "-26318514585-import { myClass } from \"../core/myClass\";\nimport { anotherClass } from \"../core/anotherClass\";\nexport declare function returnMyClass(): myClass;\nexport declare function returnAnotherClass(): anotherClass;\n"
        },
        "version": "-9720705499-import { myClass } from \"../core/myClass\";\nimport { bar } from \"../core\";\nimport { anotherClass } from \"../core/anotherClass\";\nexport function returnMyClass() {\n    bar();\n    return new myClass();\n}\nexport function returnAnotherClass() {\n    return new anotherClass();\n}\n",
        "signature": "-26318514585-import { myClass } from \"../core/myClass\";\nimport { anotherClass } from \"../core/anotherClass\";\nexport declare function returnMyClass(): myClass;\nexport declare function returnAnotherClass(): anotherClass;\n"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {
      "./index.ts": [
        "../core/myclass.d.ts",
        "../core/index.d.ts",
        "../core/anotherclass.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./index.ts": [
        "../core/myclass.d.ts",
        "../core/anotherclass.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../core/anotherclass.d.ts",
      "../core/index.d.ts",
      "../core/myclass.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1515
}

//// [/user/username/projects/sample1/tests/index.js]
"use strict";
exports.__esModule = true;
var logic_1 = require("../logic");
(0, logic_1.returnMyClass)();


//// [/user/username/projects/sample1/tests/index.d.ts]
export {};


//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","../core/myclass.d.ts","../core/anotherclass.d.ts","../logic/index.d.ts","./index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-7432826827-export declare class myClass {\n}\n","-6928009824-export declare class anotherClass {\n}\n","-26318514585-import { myClass } from \"../core/myClass\";\nimport { anotherClass } from \"../core/anotherClass\";\nexport declare function returnMyClass(): myClass;\nexport declare function returnAnotherClass(): anotherClass;\n",{"version":"-1418876836-import { returnMyClass } from \"../logic\";\nreturnMyClass();\n","signature":"-3531856636-export {};\n"}],"options":{"cacheResolutions":true,"composite":true},"fileIdsList":[[2,3],[4]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[[4,1]],"semanticDiagnosticsPerFile":[1,3,2,4,5],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/myclass.d.ts",
      "../core/anotherclass.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "fileNamesList": [
      [
        "../core/myclass.d.ts",
        "../core/anotherclass.d.ts"
      ],
      [
        "../logic/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../core/myclass.d.ts": {
        "version": "-7432826827-export declare class myClass {\n}\n",
        "signature": "-7432826827-export declare class myClass {\n}\n"
      },
      "../core/anotherclass.d.ts": {
        "version": "-6928009824-export declare class anotherClass {\n}\n",
        "signature": "-6928009824-export declare class anotherClass {\n}\n"
      },
      "../logic/index.d.ts": {
        "version": "-26318514585-import { myClass } from \"../core/myClass\";\nimport { anotherClass } from \"../core/anotherClass\";\nexport declare function returnMyClass(): myClass;\nexport declare function returnAnotherClass(): anotherClass;\n",
        "signature": "-26318514585-import { myClass } from \"../core/myClass\";\nimport { anotherClass } from \"../core/anotherClass\";\nexport declare function returnMyClass(): myClass;\nexport declare function returnAnotherClass(): anotherClass;\n"
      },
      "./index.ts": {
        "original": {
          "version": "-1418876836-import { returnMyClass } from \"../logic\";\nreturnMyClass();\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "-1418876836-import { returnMyClass } from \"../logic\";\nreturnMyClass();\n",
        "signature": "-3531856636-export {};\n"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {
      "../logic/index.d.ts": [
        "../core/myclass.d.ts",
        "../core/anotherclass.d.ts"
      ],
      "./index.ts": [
        "../logic/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "../logic/index.d.ts": [
        "../core/myclass.d.ts",
        "../core/anotherclass.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "../core/anotherclass.d.ts",
      "../core/myclass.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1265
}


PolledWatches::

FsWatches::

FsWatchesRecursive::

Info 2    [00:01:16.000] Search path: /user/username/projects/sample1/tests
Info 3    [00:01:17.000] For info: /user/username/projects/sample1/tests/index.ts :: Config file name: /user/username/projects/sample1/tests/tsconfig.json
Info 4    [00:01:18.000] Creating configuration project /user/username/projects/sample1/tests/tsconfig.json
Info 5    [00:01:19.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/sample1/tests/tsconfig.json 2000 undefined Project: /user/username/projects/sample1/tests/tsconfig.json WatchType: Config file
Info 6    [00:01:20.000] Config: /user/username/projects/sample1/tests/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/sample1/tests/index.ts"
 ],
 "options": {
  "composite": true,
  "cacheResolutions": true,
  "traceResolution": true,
  "configFilePath": "/user/username/projects/sample1/tests/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/sample1/logic",
   "originalPath": "../logic"
  }
 ]
}
Info 7    [00:01:21.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1/tests 1 undefined Config: /user/username/projects/sample1/tests/tsconfig.json WatchType: Wild card directory
Info 8    [00:01:22.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1/tests 1 undefined Config: /user/username/projects/sample1/tests/tsconfig.json WatchType: Wild card directory
Info 9    [00:01:23.000] Starting updateGraphWorker: Project: /user/username/projects/sample1/tests/tsconfig.json
Info 10   [00:01:24.000] Config: /user/username/projects/sample1/logic/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/sample1/logic/index.ts"
 ],
 "options": {
  "composite": true,
  "cacheResolutions": true,
  "traceResolution": true,
  "configFilePath": "/user/username/projects/sample1/logic/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/sample1/core",
   "originalPath": "../core"
  }
 ]
}
Info 11   [00:01:25.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/sample1/logic/tsconfig.json 2000 undefined Project: /user/username/projects/sample1/tests/tsconfig.json WatchType: Config file
Info 12   [00:01:26.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1/logic 1 undefined Config: /user/username/projects/sample1/logic/tsconfig.json WatchType: Wild card directory
Info 13   [00:01:27.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1/logic 1 undefined Config: /user/username/projects/sample1/logic/tsconfig.json WatchType: Wild card directory
Info 14   [00:01:28.000] Config: /user/username/projects/sample1/core/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/sample1/core/anotherClass.ts",
  "/user/username/projects/sample1/core/index.ts",
  "/user/username/projects/sample1/core/myClass.ts"
 ],
 "options": {
  "composite": true,
  "cacheResolutions": true,
  "traceResolution": true,
  "configFilePath": "/user/username/projects/sample1/core/tsconfig.json"
 }
}
Info 15   [00:01:29.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/sample1/core/tsconfig.json 2000 undefined Project: /user/username/projects/sample1/tests/tsconfig.json WatchType: Config file
Info 16   [00:01:30.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1/core 1 undefined Config: /user/username/projects/sample1/core/tsconfig.json WatchType: Wild card directory
Info 17   [00:01:31.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1/core 1 undefined Config: /user/username/projects/sample1/core/tsconfig.json WatchType: Wild card directory
Info 18   [00:01:32.000] ======== Resolving module '../logic' from '/user/username/projects/sample1/tests/index.ts'. ========
Info 19   [00:01:33.000] Module resolution kind is not specified, using 'NodeJs'.
Info 20   [00:01:34.000] Loading module as file / folder, candidate module location '/user/username/projects/sample1/logic', target file types: TypeScript, Declaration.
Info 21   [00:01:35.000] File '/user/username/projects/sample1/logic.ts' does not exist.
Info 22   [00:01:36.000] File '/user/username/projects/sample1/logic.tsx' does not exist.
Info 23   [00:01:37.000] File '/user/username/projects/sample1/logic.d.ts' does not exist.
Info 24   [00:01:38.000] File '/user/username/projects/sample1/logic/package.json' does not exist.
Info 25   [00:01:39.000] File '/user/username/projects/sample1/logic/index.ts' exist - use it as a name resolution result.
Info 26   [00:01:40.000] ======== Module name '../logic' was successfully resolved to '/user/username/projects/sample1/logic/index.ts'. ========
Info 27   [00:01:41.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1 0 undefined Project: /user/username/projects/sample1/tests/tsconfig.json WatchType: Failed Lookup Locations
Info 28   [00:01:42.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1 0 undefined Project: /user/username/projects/sample1/tests/tsconfig.json WatchType: Failed Lookup Locations
Info 29   [00:01:43.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1/logic 1 undefined Project: /user/username/projects/sample1/tests/tsconfig.json WatchType: Failed Lookup Locations
Info 30   [00:01:44.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1/logic 1 undefined Project: /user/username/projects/sample1/tests/tsconfig.json WatchType: Failed Lookup Locations
Info 31   [00:01:45.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/sample1/logic/index.ts 500 undefined WatchType: Closed Script info
Info 32   [00:01:46.000] ======== Resolving module '../core/myClass' from '/user/username/projects/sample1/logic/index.ts'. ========
Info 33   [00:01:47.000] Using compiler options of project reference redirect '/user/username/projects/sample1/logic/tsconfig.json'.
Info 34   [00:01:48.000] Module resolution kind is not specified, using 'NodeJs'.
Info 35   [00:01:49.000] Loading module as file / folder, candidate module location '/user/username/projects/sample1/core/myClass', target file types: TypeScript, Declaration.
Info 36   [00:01:50.000] File '/user/username/projects/sample1/core/myClass.ts' exist - use it as a name resolution result.
Info 37   [00:01:51.000] ======== Module name '../core/myClass' was successfully resolved to '/user/username/projects/sample1/core/myClass.ts'. ========
Info 38   [00:01:52.000] ======== Resolving module '../core' from '/user/username/projects/sample1/logic/index.ts'. ========
Info 39   [00:01:53.000] Using compiler options of project reference redirect '/user/username/projects/sample1/logic/tsconfig.json'.
Info 40   [00:01:54.000] Module resolution kind is not specified, using 'NodeJs'.
Info 41   [00:01:55.000] Loading module as file / folder, candidate module location '/user/username/projects/sample1/core', target file types: TypeScript, Declaration.
Info 42   [00:01:56.000] File '/user/username/projects/sample1/core.ts' does not exist.
Info 43   [00:01:57.000] File '/user/username/projects/sample1/core.tsx' does not exist.
Info 44   [00:01:58.000] File '/user/username/projects/sample1/core.d.ts' does not exist.
Info 45   [00:01:59.000] File '/user/username/projects/sample1/core/package.json' does not exist.
Info 46   [00:02:00.000] File '/user/username/projects/sample1/core/index.ts' exist - use it as a name resolution result.
Info 47   [00:02:01.000] ======== Module name '../core' was successfully resolved to '/user/username/projects/sample1/core/index.ts'. ========
Info 48   [00:02:02.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1/core 1 undefined Project: /user/username/projects/sample1/tests/tsconfig.json WatchType: Failed Lookup Locations
Info 49   [00:02:03.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1/core 1 undefined Project: /user/username/projects/sample1/tests/tsconfig.json WatchType: Failed Lookup Locations
Info 50   [00:02:04.000] ======== Resolving module '../core/anotherClass' from '/user/username/projects/sample1/logic/index.ts'. ========
Info 51   [00:02:05.000] Using compiler options of project reference redirect '/user/username/projects/sample1/logic/tsconfig.json'.
Info 52   [00:02:06.000] Module resolution kind is not specified, using 'NodeJs'.
Info 53   [00:02:07.000] Loading module as file / folder, candidate module location '/user/username/projects/sample1/core/anotherClass', target file types: TypeScript, Declaration.
Info 54   [00:02:08.000] File '/user/username/projects/sample1/core/anotherClass.ts' exist - use it as a name resolution result.
Info 55   [00:02:09.000] ======== Module name '../core/anotherClass' was successfully resolved to '/user/username/projects/sample1/core/anotherClass.ts'. ========
Info 56   [00:02:10.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/sample1/core/myClass.ts 500 undefined WatchType: Closed Script info
Info 57   [00:02:11.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/sample1/core/index.ts 500 undefined WatchType: Closed Script info
Info 58   [00:02:12.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/sample1/core/anotherClass.ts 500 undefined WatchType: Closed Script info
Info 59   [00:02:13.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 60   [00:02:14.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1/tests/node_modules/@types 1 undefined Project: /user/username/projects/sample1/tests/tsconfig.json WatchType: Type roots
Info 61   [00:02:15.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1/tests/node_modules/@types 1 undefined Project: /user/username/projects/sample1/tests/tsconfig.json WatchType: Type roots
Info 62   [00:02:16.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1/node_modules/@types 1 undefined Project: /user/username/projects/sample1/tests/tsconfig.json WatchType: Type roots
Info 63   [00:02:17.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/sample1/node_modules/@types 1 undefined Project: /user/username/projects/sample1/tests/tsconfig.json WatchType: Type roots
Info 64   [00:02:18.000] Finishing updateGraphWorker: Project: /user/username/projects/sample1/tests/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 65   [00:02:19.000] Project '/user/username/projects/sample1/tests/tsconfig.json' (Configured)
Info 66   [00:02:20.000] 	Files (6)
	/a/lib/lib.d.ts
	/user/username/projects/sample1/core/myClass.ts
	/user/username/projects/sample1/core/index.ts
	/user/username/projects/sample1/core/anotherClass.ts
	/user/username/projects/sample1/logic/index.ts
	/user/username/projects/sample1/tests/index.ts


	../../../../../a/lib/lib.d.ts
	  Default library for target 'es3'
	../core/myClass.ts
	  Imported via "../core/myClass" from file '../logic/index.ts'
	../core/index.ts
	  Imported via "../core" from file '../logic/index.ts'
	../core/anotherClass.ts
	  Imported via "../core/anotherClass" from file '../logic/index.ts'
	../logic/index.ts
	  Imported via "../logic" from file 'index.ts'
	index.ts
	  Matched by default include pattern '**/*'

Info 67   [00:02:21.000] -----------------------------------------------
Info 68   [00:02:22.000] Search path: /user/username/projects/sample1/tests
Info 69   [00:02:23.000] For info: /user/username/projects/sample1/tests/tsconfig.json :: No config files found.
Info 70   [00:02:24.000] Project '/user/username/projects/sample1/tests/tsconfig.json' (Configured)
Info 70   [00:02:25.000] 	Files (6)

Info 70   [00:02:26.000] -----------------------------------------------
Info 70   [00:02:27.000] Open files: 
Info 70   [00:02:28.000] 	FileName: /user/username/projects/sample1/tests/index.ts ProjectRootPath: undefined
Info 70   [00:02:29.000] 		Projects: /user/username/projects/sample1/tests/tsconfig.json
After request

PolledWatches::
/user/username/projects/sample1/tests/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/sample1/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/sample1/tests/tsconfig.json:
  {}
/user/username/projects/sample1/logic/tsconfig.json:
  {}
/user/username/projects/sample1/core/tsconfig.json:
  {}
/user/username/projects/sample1:
  {}
/user/username/projects/sample1/logic/index.ts:
  {}
/user/username/projects/sample1/core/myclass.ts:
  {}
/user/username/projects/sample1/core/index.ts:
  {}
/user/username/projects/sample1/core/anotherclass.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/projects/sample1/tests:
  {}
/user/username/projects/sample1/logic:
  {}
/user/username/projects/sample1/core:
  {}

Info 70   [00:02:30.000] response:
    {
      "responseRequired": false
    }