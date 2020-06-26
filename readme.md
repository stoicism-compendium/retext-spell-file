# retext-spell-file

<!-- Badges -->

[![test][test-badge]][test]

<!-- Brief description -->

_**`retext-spell` with `.respell` personal dictionary file support.**_

This package provides the exact same interface and functionality as
[`retext-spell`][retext-spell] with one small but useful modification.

1. **`retext-spell`** takes a **`personal`** option, which is a string of lines,
   in which each line is an entry in an [Hunspell][hunspell] **personal
   dictionary** (a.k.a. word list).

2. **`retext-spell-file`** also takes a `personal` option. But if that
   `personal` option is falsy, it will search up the directory hierarchy for a
   file named **`.respell`** and read its (UTF-8) contents into a value that is
   passed to `retext-spell` in the `personal` option.

<!-- Sections -->

## Installation

Follow the [`retext-spell`][retext-spell] installation instructions but replace
`retext-spell` with `retext-spell-file`.

## Usage

1. Refer to the [`retext-spell`][retext-spell] usage instructions but replace
   `retext-spell` with `retext-spell-file`.
2. Leave `options.personal` undefined.
3. Add a file named `.respell` to the top level of your project.
4. Add one correctly spelled word per line to `.respell`.

For more information:

* See [hunspell(5)][hunspell-man] for the **personal dictionary format**.
* See our [`.respell`](./.respell) for an example.

## License

[Blue Oak Model License 1.0.0][license] © [Sean Leather][author]

<!-- Definitions, sorted alphabetically -->

[author]: https://github.com/spl
[hunspell-man]: https://www.manpagez.com/man/5/hunspell/
[hunspell]: https://hunspell.github.io/
[license]: ./license.md
[retext-spell]: https://github.com/retextjs/retext-spell
[test-badge]: https://github.com/stoicism-compendium/retext-spell-file/workflows/test/badge.svg
[test]: https://github.com/stoicism-compendium/retext-spell-file/actions?query=workflow%3Atest
