# PFC Documentation

Documentation for the **PowerBuilder Foundation Class Library (PFC)**.

PFC was originally developed by Sybase, Inc. and shipped with PowerBuilder. It is now maintained as an open source project by the [OpenSourcePFCLibraries](https://github.com/OpenSourcePFCLibraries) community. These manuals were converted from the original Sybase PDF manuals (PowerBuilder 9 edition) into Markdown so that they can be read on GitHub and updated through pull requests.

## Manuals

| Manual | Contents |
| --- | --- |
| [User's Guide](user-guide/README.md) | PFC concepts, class library design, programming with PFC services, visual controls, windows and menus, utilities, deployment, and a step-by-step tutorial |
| [Object Reference](object-reference/README.md) | Every PFC object, with its instance variables, events, and functions (volumes 1 and 2 of the printed reference, combined) |
| [Running the PFC Unit Tests](unit-tests.md) | Getting the PBUnit test framework, running the tests from the command line or the IDE, and the tests that need a database. New; not part of the original manuals |

## About this conversion

- Each User's Guide chapter is a single Markdown file. In the Object Reference, each chapter is a folder with one Markdown file per object.
- Figures and diagrams were taken from the PDFs. They are stored in an `images` folder next to the pages that use them.
- Page-number cross-references were removed, because pages no longer exist. In the Object Reference, references to other objects are links.
- Sybase copyright, trademark, support, and ordering information was removed, along with references to the Sybase Technical Library and web site. They were replaced with information about the open source project.
- The Object Reference has been brought up to date with the current PFC source code. Objects, events, functions, and instance variables added since the PowerBuilder 9 edition were documented from the comments in the source, and objects and events that no longer exist were removed. Pages for objects the original edition did not cover are marked as generated from the source.
- The content otherwise matches the original PowerBuilder 9 edition. Some version numbers, file names, screenshots, and tool names may be out of date for current PowerBuilder releases. Corrections are welcome.

The original PDF manuals (`pfcug.pdf`, `pfcoref1.pdf`, `pfcoref2.pdf`) are kept in this repository for reference.

## Contributing

To fix or improve the documentation, edit the Markdown files and open a pull request. Report problems by opening an issue.
