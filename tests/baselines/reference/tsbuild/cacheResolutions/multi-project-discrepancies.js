3:: Project build on B
During incremental build, build succeeds because everything was built
Clean build does not have project build from a so it errors and has extra errors and incorrect buildinfo
TsBuild info text without affectedFilesPendingEmit:: /src/project/tsconfig.b.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./node_modules/pkg0/index.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}"
      },
      "./brandomfileforimport.ts": {
        "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
      },
      "./bfilewithimports.ts": {
        "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
      },
      "./brandomfileforimport2.ts": {
        "version": "-10726455937-export const x = 10;"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {
      "./bfilewithimports.ts": [
        "./node_modules/pkg0/index.d.ts",
        "./brandomfileforimport.ts"
      ],
      "./brandomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./bfilewithimports.ts",
        [
          {
            "file": "./bfilewithimports.ts",
            "start": 18,
            "length": 20,
            "messageText": "Output file '/src/project/aFileWithImports.d.ts' has not been built from source file '/src/project/aFileWithImports.ts'.",
            "category": 1,
            "code": 6305
          }
        ]
      ],
      "./brandomfileforimport.ts",
      "./brandomfileforimport2.ts",
      "./node_modules/pkg0/index.d.ts"
    ],
    "latestChangedDtsFile": "FakeFileName",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              7,
              8,
              9,
              10,
              11,
              12
            ]
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/pkg0/package.json",
            "./node_modules/pkg0.ts",
            "./node_modules/pkg0.tsx",
            "./node_modules/pkg0.d.ts",
            "./node_modules/pkg0/index.ts",
            "./node_modules/pkg0/index.tsx"
          ]
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 13
            }
          },
          "resolutionId": 2,
          "resolvedModule": {
            "resolvedFileName": "./aFileWithImports.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 14
            }
          },
          "resolutionId": 3,
          "resolvedModule": {
            "resolvedFileName": "./bRandomFileForImport.ts"
          }
        }
      ],
      "names": [
        "pkg0",
        "./aFileWithImports",
        "./bRandomFileForImport"
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
            },
            "failedLookupLocations": [
              "./node_modules/pkg0/package.json",
              "./node_modules/pkg0.ts",
              "./node_modules/pkg0.tsx",
              "./node_modules/pkg0.d.ts",
              "./node_modules/pkg0/index.ts",
              "./node_modules/pkg0/index.tsx"
            ]
          }
        },
        {
          "original": [
            2,
            2
          ],
          "resolutionEntryId": 2,
          "name": "./aFileWithImports",
          "resolution": {
            "resolutionId": 2,
            "resolvedModule": {
              "resolvedFileName": "./aFileWithImports.ts"
            }
          }
        },
        {
          "original": [
            3,
            3
          ],
          "resolutionEntryId": 3,
          "name": "./bRandomFileForImport",
          "resolution": {
            "resolutionId": 3,
            "resolvedModule": {
              "resolvedFileName": "./bRandomFileForImport.ts"
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/pkg0/package.json",
                  "./node_modules/pkg0.ts",
                  "./node_modules/pkg0.tsx",
                  "./node_modules/pkg0.d.ts",
                  "./node_modules/pkg0/index.ts",
                  "./node_modules/pkg0/index.tsx"
                ]
              }
            },
            {
              "resolutionEntryId": 2,
              "name": "./aFileWithImports",
              "resolution": {
                "resolutionId": 2,
                "resolvedModule": {
                  "resolvedFileName": "./aFileWithImports.ts"
                }
              }
            },
            {
              "resolutionEntryId": 3,
              "name": "./bRandomFileForImport",
              "resolution": {
                "resolutionId": 3,
                "resolvedModule": {
                  "resolvedFileName": "./bRandomFileForImport.ts"
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}
IncrementalBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./node_modules/pkg0/index.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}"
      },
      "./arandomfileforimport.d.ts": {
        "version": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
      },
      "./arandomfileforimport2.d.ts": {
        "version": "-6057683066-export declare const x = 10;\r\n"
      },
      "./afilewithimports.d.ts": {
        "version": "-8692926703-export { x } from \"./aRandomFileForImport\";\r\nexport { x as x2 } from \"./aRandomFileForImport2\";\r\nexport declare const y = 10;\r\n"
      },
      "./brandomfileforimport.ts": {
        "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
      },
      "./bfilewithimports.ts": {
        "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
      },
      "./brandomfileforimport2.ts": {
        "version": "-10726455937-export const x = 10;"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {
      "./afilewithimports.d.ts": [
        "./arandomfileforimport.d.ts",
        "./arandomfileforimport2.d.ts"
      ],
      "./arandomfileforimport.d.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./bfilewithimports.ts": [
        "./node_modules/pkg0/index.d.ts",
        "./afilewithimports.d.ts",
        "./brandomfileforimport.ts"
      ],
      "./brandomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./afilewithimports.d.ts",
      "./arandomfileforimport.d.ts",
      "./arandomfileforimport2.d.ts",
      "./bfilewithimports.ts",
      "./brandomfileforimport.ts",
      "./brandomfileforimport2.ts",
      "./node_modules/pkg0/index.d.ts"
    ],
    "latestChangedDtsFile": "FakeFileName",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              10,
              11,
              12,
              13,
              14,
              15
            ]
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/pkg0/package.json",
            "./node_modules/pkg0.ts",
            "./node_modules/pkg0.tsx",
            "./node_modules/pkg0.d.ts",
            "./node_modules/pkg0/index.ts",
            "./node_modules/pkg0/index.tsx"
          ]
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 16
            }
          },
          "resolutionId": 2,
          "resolvedModule": {
            "resolvedFileName": "./aRandomFileForImport.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 17
            }
          },
          "resolutionId": 3,
          "resolvedModule": {
            "resolvedFileName": "./aRandomFileForImport2.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 18
            }
          },
          "resolutionId": 4,
          "resolvedModule": {
            "resolvedFileName": "./aFileWithImports.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 19
            }
          },
          "resolutionId": 5,
          "resolvedModule": {
            "resolvedFileName": "./bRandomFileForImport.ts"
          }
        }
      ],
      "names": [
        "pkg0",
        "./aRandomFileForImport",
        "./aRandomFileForImport2",
        "./aFileWithImports",
        "./bRandomFileForImport"
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
            },
            "failedLookupLocations": [
              "./node_modules/pkg0/package.json",
              "./node_modules/pkg0.ts",
              "./node_modules/pkg0.tsx",
              "./node_modules/pkg0.d.ts",
              "./node_modules/pkg0/index.ts",
              "./node_modules/pkg0/index.tsx"
            ]
          }
        },
        {
          "original": [
            2,
            2
          ],
          "resolutionEntryId": 2,
          "name": "./aRandomFileForImport",
          "resolution": {
            "resolutionId": 2,
            "resolvedModule": {
              "resolvedFileName": "./aRandomFileForImport.ts"
            }
          }
        },
        {
          "original": [
            3,
            3
          ],
          "resolutionEntryId": 3,
          "name": "./aRandomFileForImport2",
          "resolution": {
            "resolutionId": 3,
            "resolvedModule": {
              "resolvedFileName": "./aRandomFileForImport2.ts"
            }
          }
        },
        {
          "original": [
            4,
            4
          ],
          "resolutionEntryId": 4,
          "name": "./aFileWithImports",
          "resolution": {
            "resolutionId": 4,
            "resolvedModule": {
              "resolvedFileName": "./aFileWithImports.ts"
            }
          }
        },
        {
          "original": [
            5,
            5
          ],
          "resolutionEntryId": 5,
          "name": "./bRandomFileForImport",
          "resolution": {
            "resolutionId": 5,
            "resolvedModule": {
              "resolvedFileName": "./bRandomFileForImport.ts"
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/pkg0/package.json",
                  "./node_modules/pkg0.ts",
                  "./node_modules/pkg0.tsx",
                  "./node_modules/pkg0.d.ts",
                  "./node_modules/pkg0/index.ts",
                  "./node_modules/pkg0/index.tsx"
                ]
              }
            },
            {
              "resolutionEntryId": 2,
              "name": "./aRandomFileForImport",
              "resolution": {
                "resolutionId": 2,
                "resolvedModule": {
                  "resolvedFileName": "./aRandomFileForImport.ts"
                }
              }
            },
            {
              "resolutionEntryId": 3,
              "name": "./aRandomFileForImport2",
              "resolution": {
                "resolutionId": 3,
                "resolvedModule": {
                  "resolvedFileName": "./aRandomFileForImport2.ts"
                }
              }
            },
            {
              "resolutionEntryId": 4,
              "name": "./aFileWithImports",
              "resolution": {
                "resolutionId": 4,
                "resolvedModule": {
                  "resolvedFileName": "./aFileWithImports.ts"
                }
              }
            },
            {
              "resolutionEntryId": 5,
              "name": "./bRandomFileForImport",
              "resolution": {
                "resolutionId": 5,
                "resolvedModule": {
                  "resolvedFileName": "./bRandomFileForImport.ts"
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}
Incremental and clean size of maps do not match:: FileInfos:: File:: /src/project/tsconfig.b.tsbuildinfo.readable.baseline.txt
Incremental: {
  "../../lib/lib.d.ts": {
    "original": {
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "affectsGlobalScope": true
  },
  "./node_modules/pkg0/index.d.ts": {
    "version": "769951468-export interface ImportInterface0 {}",
    "signature": "769951468-export interface ImportInterface0 {}"
  },
  "./arandomfileforimport.d.ts": {
    "version": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  },
  "./arandomfileforimport2.d.ts": {
    "version": "-6057683066-export declare const x = 10;\r\n",
    "signature": "-6057683066-export declare const x = 10;\r\n"
  },
  "./afilewithimports.d.ts": {
    "version": "-8692926703-export { x } from \"./aRandomFileForImport\";\r\nexport { x as x2 } from \"./aRandomFileForImport2\";\r\nexport declare const y = 10;\r\n",
    "signature": "-8692926703-export { x } from \"./aRandomFileForImport\";\r\nexport { x as x2 } from \"./aRandomFileForImport2\";\r\nexport declare const y = 10;\r\n"
  },
  "./brandomfileforimport.ts": {
    "original": {
      "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
      "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
    },
    "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  },
  "./bfilewithimports.ts": {
    "original": {
      "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
      "signature": "5371975240-export { y } from \"./aFileWithImports\";\r\nexport { x } from \"./bRandomFileForImport\";\r\n"
    },
    "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
    "signature": "5371975240-export { y } from \"./aFileWithImports\";\r\nexport { x } from \"./bRandomFileForImport\";\r\n"
  },
  "./brandomfileforimport2.ts": {
    "original": {
      "version": "-10726455937-export const x = 10;",
      "signature": "-6057683066-export declare const x = 10;\r\n"
    },
    "version": "-10726455937-export const x = 10;",
    "signature": "-6057683066-export declare const x = 10;\r\n"
  }
}
Clean: {
  "../../lib/lib.d.ts": {
    "original": {
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "affectsGlobalScope": true
  },
  "./node_modules/pkg0/index.d.ts": {
    "version": "769951468-export interface ImportInterface0 {}",
    "signature": "769951468-export interface ImportInterface0 {}"
  },
  "./brandomfileforimport.ts": {
    "original": {
      "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
      "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
    },
    "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  },
  "./bfilewithimports.ts": {
    "original": {
      "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
      "signature": "5371975240-export { y } from \"./aFileWithImports\";\r\nexport { x } from \"./bRandomFileForImport\";\r\n"
    },
    "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
    "signature": "5371975240-export { y } from \"./aFileWithImports\";\r\nexport { x } from \"./bRandomFileForImport\";\r\n"
  },
  "./brandomfileforimport2.ts": {
    "original": {
      "version": "-10726455937-export const x = 10;",
      "signature": "-6057683066-export declare const x = 10;\r\n"
    },
    "version": "-10726455937-export const x = 10;",
    "signature": "-6057683066-export declare const x = 10;\r\n"
  }
}
Incremental and clean size of maps do not match:: exportedModulesMap:: File:: /src/project/tsconfig.b.tsbuildinfo.readable.baseline.txt
Incremental: {
  "./afilewithimports.d.ts": [
    "./arandomfileforimport.d.ts",
    "./arandomfileforimport2.d.ts"
  ],
  "./arandomfileforimport.d.ts": [
    "./node_modules/pkg0/index.d.ts"
  ],
  "./bfilewithimports.ts": [
    "./afilewithimports.d.ts",
    "./brandomfileforimport.ts"
  ],
  "./brandomfileforimport.ts": [
    "./node_modules/pkg0/index.d.ts"
  ]
}
Clean: {
  "./bfilewithimports.ts": [
    "./brandomfileforimport.ts"
  ],
  "./brandomfileforimport.ts": [
    "./node_modules/pkg0/index.d.ts"
  ]
}
4:: modify bRandomFileForImport2 by adding import and project build
During incremental build, build succeeds because everything was built
Clean build does not have project build from a so it errors and has extra errors and incorrect buildinfo
TsBuild info text without affectedFilesPendingEmit:: /src/project/tsconfig.b.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./node_modules/pkg0/index.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}"
      },
      "./brandomfileforimport.ts": {
        "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
      },
      "./bfilewithimports.ts": {
        "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
      },
      "./brandomfileforimport2.ts": {
        "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {
      "./bfilewithimports.ts": [
        "./node_modules/pkg0/index.d.ts",
        "./brandomfileforimport.ts"
      ],
      "./brandomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./brandomfileforimport2.ts": [
        "./node_modules/pkg0/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./bfilewithimports.ts",
        [
          {
            "file": "./bfilewithimports.ts",
            "start": 18,
            "length": 20,
            "messageText": "Output file '/src/project/aFileWithImports.d.ts' has not been built from source file '/src/project/aFileWithImports.ts'.",
            "category": 1,
            "code": 6305
          }
        ]
      ],
      "./brandomfileforimport.ts",
      "./brandomfileforimport2.ts",
      "./node_modules/pkg0/index.d.ts"
    ],
    "latestChangedDtsFile": "FakeFileName",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              7,
              8,
              9,
              10,
              11,
              12
            ]
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/pkg0/package.json",
            "./node_modules/pkg0.ts",
            "./node_modules/pkg0.tsx",
            "./node_modules/pkg0.d.ts",
            "./node_modules/pkg0/index.ts",
            "./node_modules/pkg0/index.tsx"
          ]
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 13
            }
          },
          "resolutionId": 2,
          "resolvedModule": {
            "resolvedFileName": "./aFileWithImports.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 14
            }
          },
          "resolutionId": 3,
          "resolvedModule": {
            "resolvedFileName": "./bRandomFileForImport.ts"
          }
        }
      ],
      "names": [
        "pkg0",
        "./aFileWithImports",
        "./bRandomFileForImport"
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
            },
            "failedLookupLocations": [
              "./node_modules/pkg0/package.json",
              "./node_modules/pkg0.ts",
              "./node_modules/pkg0.tsx",
              "./node_modules/pkg0.d.ts",
              "./node_modules/pkg0/index.ts",
              "./node_modules/pkg0/index.tsx"
            ]
          }
        },
        {
          "original": [
            2,
            2
          ],
          "resolutionEntryId": 2,
          "name": "./aFileWithImports",
          "resolution": {
            "resolutionId": 2,
            "resolvedModule": {
              "resolvedFileName": "./aFileWithImports.ts"
            }
          }
        },
        {
          "original": [
            3,
            3
          ],
          "resolutionEntryId": 3,
          "name": "./bRandomFileForImport",
          "resolution": {
            "resolutionId": 3,
            "resolvedModule": {
              "resolvedFileName": "./bRandomFileForImport.ts"
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/pkg0/package.json",
                  "./node_modules/pkg0.ts",
                  "./node_modules/pkg0.tsx",
                  "./node_modules/pkg0.d.ts",
                  "./node_modules/pkg0/index.ts",
                  "./node_modules/pkg0/index.tsx"
                ]
              }
            },
            {
              "resolutionEntryId": 2,
              "name": "./aFileWithImports",
              "resolution": {
                "resolutionId": 2,
                "resolvedModule": {
                  "resolvedFileName": "./aFileWithImports.ts"
                }
              }
            },
            {
              "resolutionEntryId": 3,
              "name": "./bRandomFileForImport",
              "resolution": {
                "resolutionId": 3,
                "resolvedModule": {
                  "resolvedFileName": "./bRandomFileForImport.ts"
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}
IncrementalBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./node_modules/pkg0/index.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}"
      },
      "./arandomfileforimport.d.ts": {
        "version": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
      },
      "./arandomfileforimport2.d.ts": {
        "version": "-6057683066-export declare const x = 10;\r\n"
      },
      "./afilewithimports.d.ts": {
        "version": "-8692926703-export { x } from \"./aRandomFileForImport\";\r\nexport { x as x2 } from \"./aRandomFileForImport2\";\r\nexport declare const y = 10;\r\n"
      },
      "./brandomfileforimport.ts": {
        "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
      },
      "./bfilewithimports.ts": {
        "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
      },
      "./brandomfileforimport2.ts": {
        "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {
      "./afilewithimports.d.ts": [
        "./arandomfileforimport.d.ts",
        "./arandomfileforimport2.d.ts"
      ],
      "./arandomfileforimport.d.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./bfilewithimports.ts": [
        "./node_modules/pkg0/index.d.ts",
        "./afilewithimports.d.ts",
        "./brandomfileforimport.ts"
      ],
      "./brandomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./brandomfileforimport2.ts": [
        "./node_modules/pkg0/index.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./afilewithimports.d.ts",
      "./arandomfileforimport.d.ts",
      "./arandomfileforimport2.d.ts",
      "./bfilewithimports.ts",
      "./brandomfileforimport.ts",
      "./brandomfileforimport2.ts",
      "./node_modules/pkg0/index.d.ts"
    ],
    "latestChangedDtsFile": "FakeFileName",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              10,
              11,
              12,
              13,
              14,
              15
            ]
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/pkg0/package.json",
            "./node_modules/pkg0.ts",
            "./node_modules/pkg0.tsx",
            "./node_modules/pkg0.d.ts",
            "./node_modules/pkg0/index.ts",
            "./node_modules/pkg0/index.tsx"
          ]
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 16
            }
          },
          "resolutionId": 2,
          "resolvedModule": {
            "resolvedFileName": "./aRandomFileForImport.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 17
            }
          },
          "resolutionId": 3,
          "resolvedModule": {
            "resolvedFileName": "./aRandomFileForImport2.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 18
            }
          },
          "resolutionId": 4,
          "resolvedModule": {
            "resolvedFileName": "./aFileWithImports.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 19
            }
          },
          "resolutionId": 5,
          "resolvedModule": {
            "resolvedFileName": "./bRandomFileForImport.ts"
          }
        }
      ],
      "names": [
        "pkg0",
        "./aRandomFileForImport",
        "./aRandomFileForImport2",
        "./aFileWithImports",
        "./bRandomFileForImport"
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
            },
            "failedLookupLocations": [
              "./node_modules/pkg0/package.json",
              "./node_modules/pkg0.ts",
              "./node_modules/pkg0.tsx",
              "./node_modules/pkg0.d.ts",
              "./node_modules/pkg0/index.ts",
              "./node_modules/pkg0/index.tsx"
            ]
          }
        },
        {
          "original": [
            2,
            2
          ],
          "resolutionEntryId": 2,
          "name": "./aRandomFileForImport",
          "resolution": {
            "resolutionId": 2,
            "resolvedModule": {
              "resolvedFileName": "./aRandomFileForImport.ts"
            }
          }
        },
        {
          "original": [
            3,
            3
          ],
          "resolutionEntryId": 3,
          "name": "./aRandomFileForImport2",
          "resolution": {
            "resolutionId": 3,
            "resolvedModule": {
              "resolvedFileName": "./aRandomFileForImport2.ts"
            }
          }
        },
        {
          "original": [
            4,
            4
          ],
          "resolutionEntryId": 4,
          "name": "./aFileWithImports",
          "resolution": {
            "resolutionId": 4,
            "resolvedModule": {
              "resolvedFileName": "./aFileWithImports.ts"
            }
          }
        },
        {
          "original": [
            5,
            5
          ],
          "resolutionEntryId": 5,
          "name": "./bRandomFileForImport",
          "resolution": {
            "resolutionId": 5,
            "resolvedModule": {
              "resolvedFileName": "./bRandomFileForImport.ts"
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                },
                "failedLookupLocations": [
                  "./node_modules/pkg0/package.json",
                  "./node_modules/pkg0.ts",
                  "./node_modules/pkg0.tsx",
                  "./node_modules/pkg0.d.ts",
                  "./node_modules/pkg0/index.ts",
                  "./node_modules/pkg0/index.tsx"
                ]
              }
            },
            {
              "resolutionEntryId": 2,
              "name": "./aRandomFileForImport",
              "resolution": {
                "resolutionId": 2,
                "resolvedModule": {
                  "resolvedFileName": "./aRandomFileForImport.ts"
                }
              }
            },
            {
              "resolutionEntryId": 3,
              "name": "./aRandomFileForImport2",
              "resolution": {
                "resolutionId": 3,
                "resolvedModule": {
                  "resolvedFileName": "./aRandomFileForImport2.ts"
                }
              }
            },
            {
              "resolutionEntryId": 4,
              "name": "./aFileWithImports",
              "resolution": {
                "resolutionId": 4,
                "resolvedModule": {
                  "resolvedFileName": "./aFileWithImports.ts"
                }
              }
            },
            {
              "resolutionEntryId": 5,
              "name": "./bRandomFileForImport",
              "resolution": {
                "resolutionId": 5,
                "resolvedModule": {
                  "resolvedFileName": "./bRandomFileForImport.ts"
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}
Incremental and clean size of maps do not match:: FileInfos:: File:: /src/project/tsconfig.b.tsbuildinfo.readable.baseline.txt
Incremental: {
  "../../lib/lib.d.ts": {
    "original": {
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "affectsGlobalScope": true
  },
  "./node_modules/pkg0/index.d.ts": {
    "version": "769951468-export interface ImportInterface0 {}",
    "signature": "769951468-export interface ImportInterface0 {}"
  },
  "./arandomfileforimport.d.ts": {
    "version": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  },
  "./arandomfileforimport2.d.ts": {
    "version": "-6057683066-export declare const x = 10;\r\n",
    "signature": "-6057683066-export declare const x = 10;\r\n"
  },
  "./afilewithimports.d.ts": {
    "version": "-8692926703-export { x } from \"./aRandomFileForImport\";\r\nexport { x as x2 } from \"./aRandomFileForImport2\";\r\nexport declare const y = 10;\r\n",
    "signature": "-8692926703-export { x } from \"./aRandomFileForImport\";\r\nexport { x as x2 } from \"./aRandomFileForImport2\";\r\nexport declare const y = 10;\r\n"
  },
  "./brandomfileforimport.ts": {
    "original": {
      "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
      "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
    },
    "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  },
  "./bfilewithimports.ts": {
    "original": {
      "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
      "signature": "5371975240-export { y } from \"./aFileWithImports\";\r\nexport { x } from \"./bRandomFileForImport\";\r\n"
    },
    "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
    "signature": "5371975240-export { y } from \"./aFileWithImports\";\r\nexport { x } from \"./bRandomFileForImport\";\r\n"
  },
  "./brandomfileforimport2.ts": {
    "original": {
      "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
      "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
    },
    "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  }
}
Clean: {
  "../../lib/lib.d.ts": {
    "original": {
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "affectsGlobalScope": true
  },
  "./node_modules/pkg0/index.d.ts": {
    "version": "769951468-export interface ImportInterface0 {}",
    "signature": "769951468-export interface ImportInterface0 {}"
  },
  "./brandomfileforimport.ts": {
    "original": {
      "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
      "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
    },
    "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  },
  "./bfilewithimports.ts": {
    "original": {
      "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
      "signature": "5371975240-export { y } from \"./aFileWithImports\";\r\nexport { x } from \"./bRandomFileForImport\";\r\n"
    },
    "version": "-16966571634-export { y } from \"./aFileWithImports\";\nexport { x } from \"./bRandomFileForImport\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
    "signature": "5371975240-export { y } from \"./aFileWithImports\";\r\nexport { x } from \"./bRandomFileForImport\";\r\n"
  },
  "./brandomfileforimport2.ts": {
    "original": {
      "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
      "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
    },
    "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  }
}
Incremental and clean size of maps do not match:: exportedModulesMap:: File:: /src/project/tsconfig.b.tsbuildinfo.readable.baseline.txt
Incremental: {
  "./afilewithimports.d.ts": [
    "./arandomfileforimport.d.ts",
    "./arandomfileforimport2.d.ts"
  ],
  "./arandomfileforimport.d.ts": [
    "./node_modules/pkg0/index.d.ts"
  ],
  "./bfilewithimports.ts": [
    "./afilewithimports.d.ts",
    "./brandomfileforimport.ts"
  ],
  "./brandomfileforimport.ts": [
    "./node_modules/pkg0/index.d.ts"
  ],
  "./brandomfileforimport2.ts": [
    "./node_modules/pkg0/index.d.ts"
  ]
}
Clean: {
  "./bfilewithimports.ts": [
    "./brandomfileforimport.ts"
  ],
  "./brandomfileforimport.ts": [
    "./node_modules/pkg0/index.d.ts"
  ],
  "./brandomfileforimport2.ts": [
    "./node_modules/pkg0/index.d.ts"
  ]
}
5:: Project build on c
During incremental build, build succeeds because everything was built
Clean build does not have project build from a and b so it errors and has extra errors and incorrect buildinfo
TsBuild info text without affectedFilesPendingEmit:: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./pkg0.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}"
      },
      "./cfilewithimports.ts": {
        "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
      },
      "./crandomfileforimport.ts": {
        "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
      },
      "./crandomfileforimport2.ts": {
        "version": "-10726455937-export const x = 10;"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 2
    },
    "referencedMap": {
      "./cfilewithimports.ts": [
        "./pkg0.d.ts"
      ],
      "./crandomfileforimport.ts": [
        "./pkg0.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./cfilewithimports.ts",
        [
          {
            "file": "./cfilewithimports.ts",
            "start": 18,
            "length": 20,
            "messageText": "Output file '/src/project/bFileWithImports.d.ts' has not been built from source file '/src/project/bFileWithImports.ts'.",
            "category": 1,
            "code": 6305
          }
        ]
      ],
      "./crandomfileforimport.ts",
      "./crandomfileforimport2.ts",
      "./pkg0.d.ts"
    ],
    "latestChangedDtsFile": "FakeFileName",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 7
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./bFileWithImports.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2
            },
            "failedLookupLocations": [
              8,
              9
            ]
          },
          "resolutionId": 2,
          "resolvedModule": {
            "resolvedFileName": "./pkg0.d.ts"
          },
          "failedLookupLocations": [
            "./pkg0.ts",
            "./pkg0.tsx"
          ]
        }
      ],
      "names": [
        "./bFileWithImports",
        "pkg0"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "./bFileWithImports",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./bFileWithImports.ts"
            }
          }
        },
        {
          "original": [
            2,
            2
          ],
          "resolutionEntryId": 2,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 2,
            "resolvedModule": {
              "resolvedFileName": "./pkg0.d.ts"
            },
            "failedLookupLocations": [
              "./pkg0.ts",
              "./pkg0.tsx"
            ]
          }
        }
      ],
      "modules": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "./bFileWithImports",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./bFileWithImports.ts"
                }
              }
            },
            {
              "resolutionEntryId": 2,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 2,
                "resolvedModule": {
                  "resolvedFileName": "./pkg0.d.ts"
                },
                "failedLookupLocations": [
                  "./pkg0.ts",
                  "./pkg0.tsx"
                ]
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}
IncrementalBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./node_modules/pkg0/index.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}"
      },
      "./arandomfileforimport.d.ts": {
        "version": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
      },
      "./arandomfileforimport2.d.ts": {
        "version": "-6057683066-export declare const x = 10;\r\n"
      },
      "./afilewithimports.d.ts": {
        "version": "-8692926703-export { x } from \"./aRandomFileForImport\";\r\nexport { x as x2 } from \"./aRandomFileForImport2\";\r\nexport declare const y = 10;\r\n"
      },
      "./brandomfileforimport.d.ts": {
        "version": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
      },
      "./bfilewithimports.d.ts": {
        "version": "5371975240-export { y } from \"./aFileWithImports\";\r\nexport { x } from \"./bRandomFileForImport\";\r\n"
      },
      "./pkg0.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}"
      },
      "./cfilewithimports.ts": {
        "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
      },
      "./crandomfileforimport.ts": {
        "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
      },
      "./crandomfileforimport2.ts": {
        "version": "-10726455937-export const x = 10;"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 2
    },
    "referencedMap": {
      "./afilewithimports.d.ts": [
        "./arandomfileforimport.d.ts",
        "./arandomfileforimport2.d.ts"
      ],
      "./arandomfileforimport.d.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./bfilewithimports.d.ts": [
        "./afilewithimports.d.ts",
        "./brandomfileforimport.d.ts"
      ],
      "./brandomfileforimport.d.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./cfilewithimports.ts": [
        "./bfilewithimports.d.ts",
        "./pkg0.d.ts"
      ],
      "./crandomfileforimport.ts": [
        "./pkg0.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./afilewithimports.d.ts",
      "./arandomfileforimport.d.ts",
      "./arandomfileforimport2.d.ts",
      "./bfilewithimports.d.ts",
      "./brandomfileforimport.d.ts",
      "./cfilewithimports.ts",
      "./crandomfileforimport.ts",
      "./crandomfileforimport2.ts",
      "./node_modules/pkg0/index.d.ts",
      "./pkg0.d.ts"
    ],
    "latestChangedDtsFile": "FakeFileName",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 13
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./bFileWithImports.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 8
            },
            "failedLookupLocations": [
              14,
              15
            ]
          },
          "resolutionId": 2,
          "resolvedModule": {
            "resolvedFileName": "./pkg0.d.ts"
          },
          "failedLookupLocations": [
            "./pkg0.ts",
            "./pkg0.tsx"
          ]
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              16,
              17,
              18,
              19,
              20,
              21
            ]
          },
          "resolutionId": 3,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/pkg0/package.json",
            "./node_modules/pkg0.ts",
            "./node_modules/pkg0.tsx",
            "./node_modules/pkg0.d.ts",
            "./node_modules/pkg0/index.ts",
            "./node_modules/pkg0/index.tsx"
          ]
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 22
            }
          },
          "resolutionId": 4,
          "resolvedModule": {
            "resolvedFileName": "./aRandomFileForImport.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 23
            }
          },
          "resolutionId": 5,
          "resolvedModule": {
            "resolvedFileName": "./aRandomFileForImport2.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 24
            }
          },
          "resolutionId": 6,
          "resolvedModule": {
            "resolvedFileName": "./aFileWithImports.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 25
            }
          },
          "resolutionId": 7,
          "resolvedModule": {
            "resolvedFileName": "./bRandomFileForImport.ts"
          }
        }
      ],
      "names": [
        "./bFileWithImports",
        "pkg0",
        "./aRandomFileForImport",
        "./aRandomFileForImport2",
        "./aFileWithImports",
        "./bRandomFileForImport"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "./bFileWithImports",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./bFileWithImports.ts"
            }
          }
        },
        {
          "original": [
            2,
            2
          ],
          "resolutionEntryId": 2,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 2,
            "resolvedModule": {
              "resolvedFileName": "./pkg0.d.ts"
            },
            "failedLookupLocations": [
              "./pkg0.ts",
              "./pkg0.tsx"
            ]
          }
        },
        {
          "original": [
            2,
            3
          ],
          "resolutionEntryId": 3,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 3,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/index.d.ts",
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              "./node_modules/pkg0/package.json",
              "./node_modules/pkg0.ts",
              "./node_modules/pkg0.tsx",
              "./node_modules/pkg0.d.ts",
              "./node_modules/pkg0/index.ts",
              "./node_modules/pkg0/index.tsx"
            ]
          }
        },
        {
          "original": [
            3,
            4
          ],
          "resolutionEntryId": 4,
          "name": "./aRandomFileForImport",
          "resolution": {
            "resolutionId": 4,
            "resolvedModule": {
              "resolvedFileName": "./aRandomFileForImport.ts"
            }
          }
        },
        {
          "original": [
            4,
            5
          ],
          "resolutionEntryId": 5,
          "name": "./aRandomFileForImport2",
          "resolution": {
            "resolutionId": 5,
            "resolvedModule": {
              "resolvedFileName": "./aRandomFileForImport2.ts"
            }
          }
        },
        {
          "original": [
            5,
            6
          ],
          "resolutionEntryId": 6,
          "name": "./aFileWithImports",
          "resolution": {
            "resolutionId": 6,
            "resolvedModule": {
              "resolvedFileName": "./aFileWithImports.ts"
            }
          }
        },
        {
          "original": [
            6,
            7
          ],
          "resolutionEntryId": 7,
          "name": "./bRandomFileForImport",
          "resolution": {
            "resolutionId": 7,
            "resolvedModule": {
              "resolvedFileName": "./bRandomFileForImport.ts"
            }
          }
        }
      ],
      "modules": {
        "own": [
          {
            "dir": "./",
            "resolutions": [
              {
                "resolutionEntryId": 1,
                "name": "./bFileWithImports",
                "resolution": {
                  "resolutionId": 1,
                  "resolvedModule": {
                    "resolvedFileName": "./bFileWithImports.ts"
                  }
                }
              },
              {
                "resolutionEntryId": 2,
                "name": "pkg0",
                "resolution": {
                  "resolutionId": 2,
                  "resolvedModule": {
                    "resolvedFileName": "./pkg0.d.ts"
                  },
                  "failedLookupLocations": [
                    "./pkg0.ts",
                    "./pkg0.tsx"
                  ]
                }
              }
            ]
          }
        ],
        "redirects": [
          {
            "options": {
              "cacheResolutions": true
            },
            "cache": [
              {
                "dir": "./",
                "resolutions": [
                  {
                    "resolutionEntryId": 3,
                    "name": "pkg0",
                    "resolution": {
                      "resolutionId": 3,
                      "resolvedModule": {
                        "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                        "isExternalLibraryImport": true
                      },
                      "failedLookupLocations": [
                        "./node_modules/pkg0/package.json",
                        "./node_modules/pkg0.ts",
                        "./node_modules/pkg0.tsx",
                        "./node_modules/pkg0.d.ts",
                        "./node_modules/pkg0/index.ts",
                        "./node_modules/pkg0/index.tsx"
                      ]
                    }
                  },
                  {
                    "resolutionEntryId": 4,
                    "name": "./aRandomFileForImport",
                    "resolution": {
                      "resolutionId": 4,
                      "resolvedModule": {
                        "resolvedFileName": "./aRandomFileForImport.ts"
                      }
                    }
                  },
                  {
                    "resolutionEntryId": 5,
                    "name": "./aRandomFileForImport2",
                    "resolution": {
                      "resolutionId": 5,
                      "resolvedModule": {
                        "resolvedFileName": "./aRandomFileForImport2.ts"
                      }
                    }
                  },
                  {
                    "resolutionEntryId": 6,
                    "name": "./aFileWithImports",
                    "resolution": {
                      "resolutionId": 6,
                      "resolvedModule": {
                        "resolvedFileName": "./aFileWithImports.ts"
                      }
                    }
                  },
                  {
                    "resolutionEntryId": 7,
                    "name": "./bRandomFileForImport",
                    "resolution": {
                      "resolutionId": 7,
                      "resolvedModule": {
                        "resolvedFileName": "./bRandomFileForImport.ts"
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  "version": "FakeTSVersion"
}
Incremental and clean size of maps do not match:: FileInfos:: File:: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt
Incremental: {
  "../../lib/lib.d.ts": {
    "original": {
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "affectsGlobalScope": true
  },
  "./node_modules/pkg0/index.d.ts": {
    "version": "769951468-export interface ImportInterface0 {}",
    "signature": "769951468-export interface ImportInterface0 {}"
  },
  "./arandomfileforimport.d.ts": {
    "version": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  },
  "./arandomfileforimport2.d.ts": {
    "version": "-6057683066-export declare const x = 10;\r\n",
    "signature": "-6057683066-export declare const x = 10;\r\n"
  },
  "./afilewithimports.d.ts": {
    "version": "-8692926703-export { x } from \"./aRandomFileForImport\";\r\nexport { x as x2 } from \"./aRandomFileForImport2\";\r\nexport declare const y = 10;\r\n",
    "signature": "-8692926703-export { x } from \"./aRandomFileForImport\";\r\nexport { x as x2 } from \"./aRandomFileForImport2\";\r\nexport declare const y = 10;\r\n"
  },
  "./brandomfileforimport.d.ts": {
    "version": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  },
  "./bfilewithimports.d.ts": {
    "version": "5371975240-export { y } from \"./aFileWithImports\";\r\nexport { x } from \"./bRandomFileForImport\";\r\n",
    "signature": "5371975240-export { y } from \"./aFileWithImports\";\r\nexport { x } from \"./bRandomFileForImport\";\r\n"
  },
  "./pkg0.d.ts": {
    "version": "769951468-export interface ImportInterface0 {}",
    "signature": "769951468-export interface ImportInterface0 {}"
  },
  "./cfilewithimports.ts": {
    "original": {
      "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
      "signature": "-4882119183-export {};\r\n"
    },
    "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
    "signature": "-4882119183-export {};\r\n"
  },
  "./crandomfileforimport.ts": {
    "original": {
      "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
      "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
    },
    "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  },
  "./crandomfileforimport2.ts": {
    "original": {
      "version": "-10726455937-export const x = 10;",
      "signature": "-6057683066-export declare const x = 10;\r\n"
    },
    "version": "-10726455937-export const x = 10;",
    "signature": "-6057683066-export declare const x = 10;\r\n"
  }
}
Clean: {
  "../../lib/lib.d.ts": {
    "original": {
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "affectsGlobalScope": true
  },
  "./pkg0.d.ts": {
    "version": "769951468-export interface ImportInterface0 {}",
    "signature": "769951468-export interface ImportInterface0 {}"
  },
  "./cfilewithimports.ts": {
    "original": {
      "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
      "signature": "-4882119183-export {};\r\n"
    },
    "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
    "signature": "-4882119183-export {};\r\n"
  },
  "./crandomfileforimport.ts": {
    "original": {
      "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
      "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
    },
    "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  },
  "./crandomfileforimport2.ts": {
    "original": {
      "version": "-10726455937-export const x = 10;",
      "signature": "-6057683066-export declare const x = 10;\r\n"
    },
    "version": "-10726455937-export const x = 10;",
    "signature": "-6057683066-export declare const x = 10;\r\n"
  }
}
Incremental and clean size of maps do not match:: exportedModulesMap:: File:: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt
Incremental: {
  "./afilewithimports.d.ts": [
    "./arandomfileforimport.d.ts",
    "./arandomfileforimport2.d.ts"
  ],
  "./arandomfileforimport.d.ts": [
    "./node_modules/pkg0/index.d.ts"
  ],
  "./bfilewithimports.d.ts": [
    "./afilewithimports.d.ts",
    "./brandomfileforimport.d.ts"
  ],
  "./brandomfileforimport.d.ts": [
    "./node_modules/pkg0/index.d.ts"
  ],
  "./crandomfileforimport.ts": [
    "./pkg0.d.ts"
  ]
}
Clean: {
  "./crandomfileforimport.ts": [
    "./pkg0.d.ts"
  ]
}
6:: modify cRandomFileForImport2 by adding import and project build
During incremental build, build succeeds because everything was built
Clean build does not have project build from a and b so it errors and has extra errors and incorrect buildinfo
TsBuild info text without affectedFilesPendingEmit:: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./pkg0.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}"
      },
      "./cfilewithimports.ts": {
        "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
      },
      "./crandomfileforimport.ts": {
        "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
      },
      "./crandomfileforimport2.ts": {
        "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 2
    },
    "referencedMap": {
      "./cfilewithimports.ts": [
        "./pkg0.d.ts"
      ],
      "./crandomfileforimport.ts": [
        "./pkg0.d.ts"
      ],
      "./crandomfileforimport2.ts": [
        "./pkg0.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./cfilewithimports.ts",
        [
          {
            "file": "./cfilewithimports.ts",
            "start": 18,
            "length": 20,
            "messageText": "Output file '/src/project/bFileWithImports.d.ts' has not been built from source file '/src/project/bFileWithImports.ts'.",
            "category": 1,
            "code": 6305
          }
        ]
      ],
      "./crandomfileforimport.ts",
      "./crandomfileforimport2.ts",
      "./pkg0.d.ts"
    ],
    "latestChangedDtsFile": "FakeFileName",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 7
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./bFileWithImports.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2
            },
            "failedLookupLocations": [
              8,
              9
            ]
          },
          "resolutionId": 2,
          "resolvedModule": {
            "resolvedFileName": "./pkg0.d.ts"
          },
          "failedLookupLocations": [
            "./pkg0.ts",
            "./pkg0.tsx"
          ]
        }
      ],
      "names": [
        "./bFileWithImports",
        "pkg0"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "./bFileWithImports",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./bFileWithImports.ts"
            }
          }
        },
        {
          "original": [
            2,
            2
          ],
          "resolutionEntryId": 2,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 2,
            "resolvedModule": {
              "resolvedFileName": "./pkg0.d.ts"
            },
            "failedLookupLocations": [
              "./pkg0.ts",
              "./pkg0.tsx"
            ]
          }
        }
      ],
      "modules": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "./bFileWithImports",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./bFileWithImports.ts"
                }
              }
            },
            {
              "resolutionEntryId": 2,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 2,
                "resolvedModule": {
                  "resolvedFileName": "./pkg0.d.ts"
                },
                "failedLookupLocations": [
                  "./pkg0.ts",
                  "./pkg0.tsx"
                ]
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}
IncrementalBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./node_modules/pkg0/index.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}"
      },
      "./arandomfileforimport.d.ts": {
        "version": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
      },
      "./arandomfileforimport2.d.ts": {
        "version": "-6057683066-export declare const x = 10;\r\n"
      },
      "./afilewithimports.d.ts": {
        "version": "-8692926703-export { x } from \"./aRandomFileForImport\";\r\nexport { x as x2 } from \"./aRandomFileForImport2\";\r\nexport declare const y = 10;\r\n"
      },
      "./brandomfileforimport.d.ts": {
        "version": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
      },
      "./bfilewithimports.d.ts": {
        "version": "5371975240-export { y } from \"./aFileWithImports\";\r\nexport { x } from \"./bRandomFileForImport\";\r\n"
      },
      "./pkg0.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}"
      },
      "./cfilewithimports.ts": {
        "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n"
      },
      "./crandomfileforimport.ts": {
        "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
      },
      "./crandomfileforimport2.ts": {
        "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "module": 2
    },
    "referencedMap": {
      "./afilewithimports.d.ts": [
        "./arandomfileforimport.d.ts",
        "./arandomfileforimport2.d.ts"
      ],
      "./arandomfileforimport.d.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./bfilewithimports.d.ts": [
        "./afilewithimports.d.ts",
        "./brandomfileforimport.d.ts"
      ],
      "./brandomfileforimport.d.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./cfilewithimports.ts": [
        "./bfilewithimports.d.ts",
        "./pkg0.d.ts"
      ],
      "./crandomfileforimport.ts": [
        "./pkg0.d.ts"
      ],
      "./crandomfileforimport2.ts": [
        "./pkg0.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./afilewithimports.d.ts",
      "./arandomfileforimport.d.ts",
      "./arandomfileforimport2.d.ts",
      "./bfilewithimports.d.ts",
      "./brandomfileforimport.d.ts",
      "./cfilewithimports.ts",
      "./crandomfileforimport.ts",
      "./crandomfileforimport2.ts",
      "./node_modules/pkg0/index.d.ts",
      "./pkg0.d.ts"
    ],
    "latestChangedDtsFile": "FakeFileName",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 13
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./bFileWithImports.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 8
            },
            "failedLookupLocations": [
              14,
              15
            ]
          },
          "resolutionId": 2,
          "resolvedModule": {
            "resolvedFileName": "./pkg0.d.ts"
          },
          "failedLookupLocations": [
            "./pkg0.ts",
            "./pkg0.tsx"
          ]
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              16,
              17,
              18,
              19,
              20,
              21
            ]
          },
          "resolutionId": 3,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          },
          "failedLookupLocations": [
            "./node_modules/pkg0/package.json",
            "./node_modules/pkg0.ts",
            "./node_modules/pkg0.tsx",
            "./node_modules/pkg0.d.ts",
            "./node_modules/pkg0/index.ts",
            "./node_modules/pkg0/index.tsx"
          ]
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 22
            }
          },
          "resolutionId": 4,
          "resolvedModule": {
            "resolvedFileName": "./aRandomFileForImport.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 23
            }
          },
          "resolutionId": 5,
          "resolvedModule": {
            "resolvedFileName": "./aRandomFileForImport2.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 24
            }
          },
          "resolutionId": 6,
          "resolvedModule": {
            "resolvedFileName": "./aFileWithImports.ts"
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 25
            }
          },
          "resolutionId": 7,
          "resolvedModule": {
            "resolvedFileName": "./bRandomFileForImport.ts"
          }
        }
      ],
      "names": [
        "./bFileWithImports",
        "pkg0",
        "./aRandomFileForImport",
        "./aRandomFileForImport2",
        "./aFileWithImports",
        "./bRandomFileForImport"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "./bFileWithImports",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./bFileWithImports.ts"
            }
          }
        },
        {
          "original": [
            2,
            2
          ],
          "resolutionEntryId": 2,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 2,
            "resolvedModule": {
              "resolvedFileName": "./pkg0.d.ts"
            },
            "failedLookupLocations": [
              "./pkg0.ts",
              "./pkg0.tsx"
            ]
          }
        },
        {
          "original": [
            2,
            3
          ],
          "resolutionEntryId": 3,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 3,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/index.d.ts",
              "isExternalLibraryImport": true
            },
            "failedLookupLocations": [
              "./node_modules/pkg0/package.json",
              "./node_modules/pkg0.ts",
              "./node_modules/pkg0.tsx",
              "./node_modules/pkg0.d.ts",
              "./node_modules/pkg0/index.ts",
              "./node_modules/pkg0/index.tsx"
            ]
          }
        },
        {
          "original": [
            3,
            4
          ],
          "resolutionEntryId": 4,
          "name": "./aRandomFileForImport",
          "resolution": {
            "resolutionId": 4,
            "resolvedModule": {
              "resolvedFileName": "./aRandomFileForImport.ts"
            }
          }
        },
        {
          "original": [
            4,
            5
          ],
          "resolutionEntryId": 5,
          "name": "./aRandomFileForImport2",
          "resolution": {
            "resolutionId": 5,
            "resolvedModule": {
              "resolvedFileName": "./aRandomFileForImport2.ts"
            }
          }
        },
        {
          "original": [
            5,
            6
          ],
          "resolutionEntryId": 6,
          "name": "./aFileWithImports",
          "resolution": {
            "resolutionId": 6,
            "resolvedModule": {
              "resolvedFileName": "./aFileWithImports.ts"
            }
          }
        },
        {
          "original": [
            6,
            7
          ],
          "resolutionEntryId": 7,
          "name": "./bRandomFileForImport",
          "resolution": {
            "resolutionId": 7,
            "resolvedModule": {
              "resolvedFileName": "./bRandomFileForImport.ts"
            }
          }
        }
      ],
      "modules": {
        "own": [
          {
            "dir": "./",
            "resolutions": [
              {
                "resolutionEntryId": 1,
                "name": "./bFileWithImports",
                "resolution": {
                  "resolutionId": 1,
                  "resolvedModule": {
                    "resolvedFileName": "./bFileWithImports.ts"
                  }
                }
              },
              {
                "resolutionEntryId": 2,
                "name": "pkg0",
                "resolution": {
                  "resolutionId": 2,
                  "resolvedModule": {
                    "resolvedFileName": "./pkg0.d.ts"
                  },
                  "failedLookupLocations": [
                    "./pkg0.ts",
                    "./pkg0.tsx"
                  ]
                }
              }
            ]
          }
        ],
        "redirects": [
          {
            "options": {
              "cacheResolutions": true
            },
            "cache": [
              {
                "dir": "./",
                "resolutions": [
                  {
                    "resolutionEntryId": 3,
                    "name": "pkg0",
                    "resolution": {
                      "resolutionId": 3,
                      "resolvedModule": {
                        "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                        "isExternalLibraryImport": true
                      },
                      "failedLookupLocations": [
                        "./node_modules/pkg0/package.json",
                        "./node_modules/pkg0.ts",
                        "./node_modules/pkg0.tsx",
                        "./node_modules/pkg0.d.ts",
                        "./node_modules/pkg0/index.ts",
                        "./node_modules/pkg0/index.tsx"
                      ]
                    }
                  },
                  {
                    "resolutionEntryId": 4,
                    "name": "./aRandomFileForImport",
                    "resolution": {
                      "resolutionId": 4,
                      "resolvedModule": {
                        "resolvedFileName": "./aRandomFileForImport.ts"
                      }
                    }
                  },
                  {
                    "resolutionEntryId": 5,
                    "name": "./aRandomFileForImport2",
                    "resolution": {
                      "resolutionId": 5,
                      "resolvedModule": {
                        "resolvedFileName": "./aRandomFileForImport2.ts"
                      }
                    }
                  },
                  {
                    "resolutionEntryId": 6,
                    "name": "./aFileWithImports",
                    "resolution": {
                      "resolutionId": 6,
                      "resolvedModule": {
                        "resolvedFileName": "./aFileWithImports.ts"
                      }
                    }
                  },
                  {
                    "resolutionEntryId": 7,
                    "name": "./bRandomFileForImport",
                    "resolution": {
                      "resolutionId": 7,
                      "resolvedModule": {
                        "resolvedFileName": "./bRandomFileForImport.ts"
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  "version": "FakeTSVersion"
}
Incremental and clean size of maps do not match:: FileInfos:: File:: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt
Incremental: {
  "../../lib/lib.d.ts": {
    "original": {
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "affectsGlobalScope": true
  },
  "./node_modules/pkg0/index.d.ts": {
    "version": "769951468-export interface ImportInterface0 {}",
    "signature": "769951468-export interface ImportInterface0 {}"
  },
  "./arandomfileforimport.d.ts": {
    "version": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  },
  "./arandomfileforimport2.d.ts": {
    "version": "-6057683066-export declare const x = 10;\r\n",
    "signature": "-6057683066-export declare const x = 10;\r\n"
  },
  "./afilewithimports.d.ts": {
    "version": "-8692926703-export { x } from \"./aRandomFileForImport\";\r\nexport { x as x2 } from \"./aRandomFileForImport2\";\r\nexport declare const y = 10;\r\n",
    "signature": "-8692926703-export { x } from \"./aRandomFileForImport\";\r\nexport { x as x2 } from \"./aRandomFileForImport2\";\r\nexport declare const y = 10;\r\n"
  },
  "./brandomfileforimport.d.ts": {
    "version": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  },
  "./bfilewithimports.d.ts": {
    "version": "5371975240-export { y } from \"./aFileWithImports\";\r\nexport { x } from \"./bRandomFileForImport\";\r\n",
    "signature": "5371975240-export { y } from \"./aFileWithImports\";\r\nexport { x } from \"./bRandomFileForImport\";\r\n"
  },
  "./pkg0.d.ts": {
    "version": "769951468-export interface ImportInterface0 {}",
    "signature": "769951468-export interface ImportInterface0 {}"
  },
  "./cfilewithimports.ts": {
    "original": {
      "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
      "signature": "-4882119183-export {};\r\n"
    },
    "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
    "signature": "-4882119183-export {};\r\n"
  },
  "./crandomfileforimport.ts": {
    "original": {
      "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
      "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
    },
    "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  },
  "./crandomfileforimport2.ts": {
    "original": {
      "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
      "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
    },
    "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  }
}
Clean: {
  "../../lib/lib.d.ts": {
    "original": {
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true
    },
    "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "affectsGlobalScope": true
  },
  "./pkg0.d.ts": {
    "version": "769951468-export interface ImportInterface0 {}",
    "signature": "769951468-export interface ImportInterface0 {}"
  },
  "./cfilewithimports.ts": {
    "original": {
      "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
      "signature": "-4882119183-export {};\r\n"
    },
    "version": "-1053334089-import { y } from \"./bFileWithImports\";\nimport type { ImportInterface0 } from \"pkg0\";\n",
    "signature": "-4882119183-export {};\r\n"
  },
  "./crandomfileforimport.ts": {
    "original": {
      "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
      "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
    },
    "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  },
  "./crandomfileforimport2.ts": {
    "original": {
      "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
      "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
    },
    "version": "-26669354010-export type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
    "signature": "-21475588774-export type { ImportInterface0 } from \"pkg0\";\r\nexport declare const x = 10;\r\n"
  }
}
Incremental and clean size of maps do not match:: exportedModulesMap:: File:: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt
Incremental: {
  "./afilewithimports.d.ts": [
    "./arandomfileforimport.d.ts",
    "./arandomfileforimport2.d.ts"
  ],
  "./arandomfileforimport.d.ts": [
    "./node_modules/pkg0/index.d.ts"
  ],
  "./bfilewithimports.d.ts": [
    "./afilewithimports.d.ts",
    "./brandomfileforimport.d.ts"
  ],
  "./brandomfileforimport.d.ts": [
    "./node_modules/pkg0/index.d.ts"
  ],
  "./crandomfileforimport.ts": [
    "./pkg0.d.ts"
  ],
  "./crandomfileforimport2.ts": [
    "./pkg0.d.ts"
  ]
}
Clean: {
  "./crandomfileforimport.ts": [
    "./pkg0.d.ts"
  ],
  "./crandomfileforimport2.ts": [
    "./pkg0.d.ts"
  ]
}