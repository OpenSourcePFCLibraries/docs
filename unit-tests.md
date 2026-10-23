# Running the PFC Unit Tests

**About this page**

The PFC source includes unit tests that check PFC services against known problems, such as regressions fixed in earlier releases. This page explains how to get the test framework, how to run the tests, and what the tests that use a database need.

The tests are in the [2025-Solution](https://github.com/OpenSourcePFCLibraries/2025-Solution) repository (the PowerBuilder solution format). The workspace version does not include them.

## What the tests use

The tests are in the `pfc_tests` project (`pfc_tests.pbproj`). The test cases are in `tests\pfctests.pbl`, and the project also includes the PFC libraries they test.

They use the [PBUnit2025](https://github.com/bruce-armstrong/PBUnit2025) framework, which is included as a git submodule in `tests\framework`. A submodule is a separate repository that PFC refers to at a particular version; its files are downloaded with the rest of the source only if you ask git for them.

## Getting the test framework

PowerBuilder's **Connect to Workspace/Solution** does not download submodules, so if you want to run the tests, get the source another way.

**Recommended: clone with GitHub Desktop, then open the solution**

1. In GitHub Desktop, use **File > Clone repository** to clone your fork. GitHub Desktop downloads the submodule along with the rest of the source.
2. In PowerBuilder, use **File > Open** to open `PFC.pbsln` from the cloned folder, instead of Connect to Workspace/Solution.
3. Do a full rebuild.

If you use git from the command line, `git clone --recurse-submodules` does the same as step 1.

**If you already used Connect to Workspace/Solution**

It creates empty `pbunit.pbl`, `pbunitfunc.pbl` and `pbunitrunner.pbl` folders in `tests\framework`, and `pfc_tests` will not compile. To get the framework:

1. Delete the empty folders in `tests\framework`. Git will not download the submodule into a folder that has anything in it.
2. Run the following in the folder you connected to. In GitHub Desktop, after **File > Add local repository**, **Repository > Open in Command Prompt** opens a command prompt there.

   ```
   git submodule update --init
   ```

3. Do a full rebuild of `pfc_tests` in PowerBuilder.

**A note on the framework libraries in PowerBuilder**

Until PowerBuilder supports git submodules, it shows `pbunitrunner.pbl`, `pbunit.pbl` and `pbunitfunc.pbl` as new, uncommitted objects. That is expected: the framework's files belong to the PBUnit2025 repository, and PFC records only which version of it to use. Do not add or commit these libraries from PowerBuilder. Changes to the framework go to the [PBUnit2025](https://github.com/bruce-armstrong/PBUnit2025) repository.

## Running the tests

To build and run the tests from the command line (requires PowerShell 7 and PowerBuilder 2025), run this in the folder that contains `PFC.pbsln`:

```
pwsh -File tests\run_tests.ps1
```

To run some of the tests, pass `-Filter` with a comma-separated list of test classes or `class.test` names. A trailing `*` matches a prefix:

```
pwsh -File tests\run_tests.ps1 -Filter "n_cst_dwsrv_linkage_tests.test_null*"
```

The script builds `pfc_tests`, runs it, and prints the results. It also writes `build\pfc_tests\results.xml` in JUnit format, which most build servers can display.

**32-bit and 64-bit** PowerBuilder can build 32-bit and 64-bit executables, and PFC calls Windows functions whose pointer and handle sizes differ between them, such as Windows Sockets in n_cst_redirectlistener. The script builds a 32-bit test exe by default. To run the tests as a 64-bit exe too, pass `-Platform 64`; the results go to `build\pfc_tests-x64`:

```
pwsh -File tests\run_tests.ps1 -Platform 64
```

Run both when you change code that calls Windows functions. The script checks that the exe it built is the platform you asked for.

| Exit code | Meaning |
| --- | --- |
| 0 | All tests passed |
| 1 | At least one test failed or had an error |
| 2 | Nothing ran or the run could not complete: build failure, no tests found, or a timeout |

To run the tests from the PowerBuilder IDE instead, run the script once first. It generates `n_pbunit_registry`, the list of test classes the test application runs. See the framework's [README](https://github.com/bruce-armstrong/PBUnit2025#running-tests) for the arguments the test application accepts.

**Smart App Control**

Windows Smart App Control blocks unsigned executables it has not seen before, which includes each newly built test exe. Sign the exe as part of the build, or run the tests on a machine where Smart App Control is off.

## Tests that need a database

The security service tests (`n_cst_security_groups_tests`) run against a PFC security database: the `security_apps`, `security_users`, `security_groupings`, `security_template` and `security_info` tables used by the PFC security service.

To run them, set the environment variable `PFC_SECURITY_INI` to an INI file that has the database connection in a `[Security]` section, with the same keys that `n_tr.of_Init` reads (`DBMS`, `ServerName`, `Database`, `LogID`, `LogPassword`, `DBParm`, and so on). To use a different section, also set `PFC_SECURITY_SECTION`. The PEAT demo's `demoapp\peat_security.ini` (see `peat_security.ini.example`) has this section, so you can point the tests at it. For example:

```
$env:PFC_SECURITY_INI = "C:\pfc\demoapp\peat_security.ini"
pwsh -File tests\run_tests.ps1
```

Notes:

- If `PFC_SECURITY_INI` is not set, these tests fail with a "Not configured" message, so that missing coverage is not reported as a pass.
- Each test inserts its own rows (names starting with `pfct_`) in a transaction and rolls them back when it finishes, so the database is left unchanged.
- The rows are inserted with SQL that quotes the `window` column as `[window]`, which is SQL Server syntax. The tests currently run against SQL Server only.

## Writing tests

To add tests, see [Writing tests](https://github.com/bruce-armstrong/PBUnit2025#writing-tests) in the framework's README. In short, a test case is a class that inherits from `testcase` and whose name ends in `tests`, and each test is an event whose name starts with `test`. Put new test cases in `tests\pfctests.pbl`; the script finds them automatically.
