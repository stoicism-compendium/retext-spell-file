# retext-spell-file

<!-- Badges -->

![tests][tests-badge]

<!-- Brief description -->

_**`retext-spell` with `.respell` personal dictionary file support.**_

This package provides the exact same interface and functionality as
[`retext-spell`][retext-spell] with one small modification.

1. **`retext-spell`** takes a **`personal`** option, which is a string of lines,
   in which each line is an entry in an [Hunspell][hunspell] **personal
   dictionary** (a.k.a. word list).

2. **`retext-spell-file`** also takes a `personal` option. But if that
   `personal` option is falsy, it will search up the directory hierarchy for a
   file named **`.respell`** (UTF-8) and read its contents into the value passed
   to `personal`.

<!-- Sections -->

## Installation and Usage

1. See [`retext-spell`][retext-spell] for general installation and usage
   instructions.
2. Replace `retext-spell` with `retext-spell-file`.
3. Leave `options.personal` undefined.
4. Add a file named `.respell` to the top level of your project.
5. Add one correctly spelled word per line to `.respell`.

For more information:

* See [hunspell(5)][hunspell-man] for the **personal dictionary format**.
* See [`.respell`](./.respell) for an example.

## License

[Blue Oak Model License 1.0.0][license] © [Sean Leather][author]

<!-- Definitions, sorted alphabetically -->

[author]: https://github.com/spl
[hunspell-man]: https://www.manpagez.com/man/5/hunspell/
[hunspell]: https://hunspell.github.io/
[license]: ./license.md
[retext-spell]: https://github.com/retextjs/retext-spell
[tests-badge]: https://github.com/stoicism-compendium/retext-spell-file/workflows/tests/badge.svg
