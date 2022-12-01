import * as ts from "../../_namespaces/ts";
import * as fakes from "../../_namespaces/fakes";
import * as Utils from "../../_namespaces/Utils";
import {
    createServerHost,
    File,
    getTsBuildProjectFile,
    libFile,
    TestServerHost,
} from "../virtualFileSystemWithWatch";
import {
    solutionBuildWithBaseline,
} from "../tscWatch/helpers";
import {
    baselineTsserverLogs,
    createLoggerWithInMemoryLogs,
    createSession,
    openFilesForSession,
} from "./helpers";
import {
    getPkgImportContent,
    getServerHostWithNode16,
    getServerHostWithNode16WithBuild,
    getServerHostWithOut,
    getServerHostWithOutWithBuild,
} from "../tsbuild/cacheResolutionsHelper";

describe("unittests:: tsserver:: cacheResolutions:: tsserverProjectSystem caching module resolutions option", () => {
    describe("multi file project", () => {
        verifyTsserverWithNode16("multi file not built", getServerHostWithNode16);
        verifyTsserverWithNode16("multi file", getServerHostWithNode16WithBuild);
        function verifyTsserverWithNode16(scenario: string, createHost: () => TestServerHost) {
            it(scenario, () => {
                const host = fakes.patchHostForBuildInfoReadWrite(createHost());
                const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                openFilesForSession(["/src/project/randomFileForImport.ts", "/src/project/randomFileForTypeRef.ts"], session);

                session.logger.info("modify randomFileForImport by adding import");
                session.executeCommandSeq<ts.server.protocol.ChangeRequest>({
                    command: ts.server.protocol.CommandTypes.Change,
                    arguments: {
                        file: "/src/project/randomFileForImport.ts",
                        line: 1,
                        offset: 1,
                        endLine: 1,
                        endOffset: 1,
                        insertString: `import type { ImportInterface0 } from "pkg0" assert { "resolution-mode": "import" };\n`,
                    }
                });
                ts.server.updateProjectIfDirty(session.getProjectService().configuredProjects.get("/src/project/tsconfig.json")!);

                session.logger.info("modify randomFileForTypeRef by adding typeRef");
                session.executeCommandSeq<ts.server.protocol.ChangeRequest>({
                    command: ts.server.protocol.CommandTypes.Change,
                    arguments: {
                        file: "/src/project/randomFileForTypeRef.ts",
                        line: 1,
                        offset: 1,
                        endLine: 1,
                        endOffset: 1,
                        insertString: `/// <reference types="pkg2" resolution-mode="import"/>\n`,
                    }
                });
                ts.server.updateProjectIfDirty(session.getProjectService().configuredProjects.get("/src/project/tsconfig.json")!);

                session.logger.info("write file not resolved by import");
                host.writeFile("/src/project/node_modules/pkg1/require.d.ts", getPkgImportContent("Require", 1));
                host.runQueuedTimeoutCallbacks(); // failed lookup
                host.runQueuedTimeoutCallbacks(); // actual update

                session.logger.info("write file not resolved by typeRef");
                host.writeFile("/src/project/node_modules/pkg3/require.d.ts", getPkgImportContent("Require", 3));
                host.runQueuedTimeoutCallbacks(); // failed lookup
                host.runQueuedTimeoutCallbacks(); // actual update

                session.logger.info("delete file with imports");
                host.deleteFile("/src/project/fileWithImports.ts");
                host.runQueuedTimeoutCallbacks();

                session.logger.info("delete file with typeRefs");
                host.deleteFile("/src/project/fileWithTypeRefs.ts");
                host.runQueuedTimeoutCallbacks();

                session.logger.info("delete resolved import file");
                host.deleteFile("/src/project/node_modules/pkg0/import.d.ts");
                host.runQueuedTimeoutCallbacks();

                session.logger.info("delete resolved typeRef file");
                host.deleteFile("/src/project/node_modules/pkg2/import.d.ts");
                host.runQueuedTimeoutCallbacks();

                baselineTsserverLogs("cacheResolutions", scenario, session);
            });
        }
    });

    describe("with bundle emit", () => {
        verifyTsserverWithNode16("bundle emit not built", getServerHostWithOut);
        verifyTsserverWithNode16("bundle emit", getServerHostWithOutWithBuild);
        function verifyTsserverWithNode16(scenario: string, createHost: () => TestServerHost) {
            it(scenario, () => {
                const host = fakes.patchHostForBuildInfoReadWrite(createHost());
                const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                openFilesForSession(["/src/project/randomFileForImport.ts", "/src/project/randomFileForTypeRef.ts"], session);

                session.logger.info("modify randomFileForImport by adding import");
                session.executeCommandSeq<ts.server.protocol.ChangeRequest>({
                    command: ts.server.protocol.CommandTypes.Change,
                    arguments: {
                        file: "/src/project/randomFileForImport.ts",
                        line: 1,
                        offset: 1,
                        endLine: 1,
                        endOffset: 1,
                        insertString: `import type { ImportInterface0 } from "pkg0";\n`,
                    }
                });
                ts.server.updateProjectIfDirty(session.getProjectService().configuredProjects.get("/src/project/tsconfig.json")!);

                session.logger.info("modify randomFileForTypeRef by adding typeRef");
                session.executeCommandSeq<ts.server.protocol.ChangeRequest>({
                    command: ts.server.protocol.CommandTypes.Change,
                    arguments: {
                        file: "/src/project/randomFileForTypeRef.ts",
                        line: 1,
                        offset: 1,
                        endLine: 1,
                        endOffset: 1,
                        insertString: `/// <reference types="pkg2"/>\n`,
                    }
                });
                ts.server.updateProjectIfDirty(session.getProjectService().configuredProjects.get("/src/project/tsconfig.json")!);

                session.logger.info("write file not resolved by import");
                host.writeFile("/src/project/pkg1.d.ts", getPkgImportContent("Require", 1));
                host.runQueuedTimeoutCallbacks(); // failed lookup
                host.runQueuedTimeoutCallbacks(); // actual update

                session.logger.info("write file not resolved by typeRef");
                host.ensureFileOrFolder({
                    path: "/src/project/node_modules/pkg3/index.d.ts",
                    content: getPkgImportContent("Require", 3)
                });
                host.runQueuedTimeoutCallbacks(); // failed lookup
                host.runQueuedTimeoutCallbacks(); // actual update

                session.logger.info("delete file with imports");
                host.deleteFile("/src/project/fileWithImports.ts");
                host.runQueuedTimeoutCallbacks();

                session.logger.info("delete file with typeRefs");
                host.deleteFile("/src/project/fileWithTypeRefs.ts");
                host.runQueuedTimeoutCallbacks();

                session.logger.info("delete resolved import file");
                host.deleteFile("/src/project/pkg0.d.ts");
                host.runQueuedTimeoutCallbacks();

                session.logger.info("delete resolved typeRef file");
                host.deleteFile("/src/project/node_modules/pkg2/index.d.ts");
                host.runQueuedTimeoutCallbacks();

                baselineTsserverLogs("cacheResolutions", scenario, session);
            });
        }
    });

    describe("different projects", () => {
        describe("on sample project", () => {
            function cacheResolutions(file: File) {
                const content = JSON.parse(file.content);
                content.compilerOptions = {
                    ...content.compilerOptions || {},
                    cacheResolutions: true,
                    traceResolution: true,
                };
                file.content = JSON.stringify(content, /*replacer*/ undefined, 4);
                return file;
            }
            function setupHost() {
                const coreConfig = cacheResolutions(getTsBuildProjectFile("sample1", "core/tsconfig.json"));
                const coreIndex = getTsBuildProjectFile("sample1", "core/index.ts");
                const coreAnotherModule = getTsBuildProjectFile("sample1", "core/anotherModule.ts");
                const coreSomeDecl = getTsBuildProjectFile("sample1", "core/some_decl.d.ts");
                const logicConfig = cacheResolutions(getTsBuildProjectFile("sample1", "logic/tsconfig.json"));
                const logicIndex = getTsBuildProjectFile("sample1", "logic/index.ts");
                const testsConfig = cacheResolutions(getTsBuildProjectFile("sample1", "tests/tsconfig.json"));
                const testsIndex = getTsBuildProjectFile("sample1", "tests/index.ts");
                const host = createServerHost([libFile, coreConfig, coreIndex, coreAnotherModule, coreSomeDecl, logicConfig, logicIndex, testsConfig, testsIndex]);
                return { host, testsConfig, testsIndex };
            }
            verifyOnProject("sample project", setupHost);
        });

        describe("project where d.ts file contains fewer modules than original file", () => {
            function setupHost() {
                const coreConfig: File = {
                    path: `/user/username/projects/sample1/core/tsconfig.json`,
                    content: JSON.stringify({ compilerOptions: { composite: true, cacheResolutions: true, traceResolution: true } })
                };
                const coreIndex: File = {
                    path: `/user/username/projects/sample1/core/index.ts`,
                    content: `export function bar() { return 10; }`
                };
                const coreMyClass: File = {
                    path: `/user/username/projects/sample1/core/myClass.ts`,
                    content: `export class myClass { }`
                };
                const coreAnotherClass: File = {
                    path: `/user/username/projects/sample1/core/anotherClass.ts`,
                    content: `export class anotherClass { }`
                };
                const logicConfig: File = {
                    path: `/user/username/projects/sample1/logic/tsconfig.json`,
                    content: JSON.stringify({
                        compilerOptions: { composite: true, cacheResolutions: true, traceResolution: true },
                        references: [{ path: "../core" }]
                    })
                };
                const logicIndex: File = {
                    path: `/user/username/projects/sample1/logic/index.ts`,
                    content: Utils.dedent`
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
                    `
                };
                const testsConfig: File = {
                    path: `/user/username/projects/sample1/tests/tsconfig.json`,
                    content: JSON.stringify({
                        compilerOptions: { composite: true, cacheResolutions: true, traceResolution: true },
                        references: [{ path: "../logic" }]
                    })
                };
                const testsIndex: File = {
                    path: `/user/username/projects/sample1/tests/index.ts`,
                    content: Utils.dedent`
                        import { returnMyClass } from "../logic";
                        returnMyClass();
                    `
                };
                const host = createServerHost([libFile, coreConfig, coreIndex, coreMyClass, coreAnotherClass, logicConfig, logicIndex, testsConfig, testsIndex]);
                return { host, testsConfig, testsIndex };
            }

            verifyOnProject("dts has fewer resolutions than ts", setupHost);
        });

        function verifyOnProject(
            scenario: string,
            setupHost: () => {
                host: TestServerHost;
                testsConfig: File;
                testsIndex: File;
            }) {
            it(scenario, () => {
                const { host, testsConfig, testsIndex } = setupHost();
                solutionBuildWithBaseline(host, [testsConfig.path]);
                fakes.patchHostForBuildInfoReadWrite(host);
                const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                openFilesForSession([testsIndex], session);
                baselineTsserverLogs("cacheResolutions", scenario, session);
            });
            it(`${scenario} not built`, () => {
                const { host, testsIndex } = setupHost();
                fakes.patchHostForBuildInfoReadWrite(host);
                const session = createSession(host, { logger: createLoggerWithInMemoryLogs(host) });
                openFilesForSession([testsIndex], session);
                baselineTsserverLogs("cacheResolutions", `${scenario} not built`, session);
            });
        }
    });
});