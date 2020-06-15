# retext-spell-file

<!-- Badges -->

<!-- Brief description -->

> Simple wrapper for `retext-spell` that uses a personal dictionary file.

## Introduction

This package provides the exact same interface and functionality as
[`retext-spell`][retext-spell] with the addition of one feature.

If you do not pass the **`personal`** attribute in the options to
`retext-spell-file`, it will look (upwards in the directory hierarchy) for a
file called **`.dictionary.txt`** and feed those contents as a string to the
`personal` attribute of `retext-spell`.

* See the [Hunspell dictionaries][hunspell] for a discussion of the **personal
  dictionary format**.
* See [`.dictionary.txt`][dictionary] in this repository for an example.

In all other ways, `retext-spell-file` should look and act like `retext-spell`,
including when the `personal` attribute is passed.

If something about the above description is not true, please [report
it][issues].

## License

[Blue Oak Model License 1.0.0][license] © [Sean Leather][author]

<!-- Definitions, sorted alphabetically -->

[author]: https://github.com/spl
[dictionary]: ./.dictionary.txt
[hunspell]: https://linux.die.net/man/4/hunspell
[license]: ./license.md
[retext-spell]: https://github.com/retextjs/retext-spell
[issues]: https://github.com/spl/retext-spell-file/issues
