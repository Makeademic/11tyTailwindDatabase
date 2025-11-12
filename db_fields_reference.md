## author (string)

The name of the database's author.

Prefer the GitHub username when many aliases are possibles.

### Possible Values

- dustypomerleau
- "alvaro-prieto"
- Makeademic

## bindingType (array[categorical])

An array of all the binding types.

Boards, Limp binding, Indeterminate, Chemise, Other, Girdle, Greek style, Part Cover, Tacketed/ longstitch, Treasure.

### Possible Values

- ["Other", "Indeterminate"]
- [Boards]
- ["Limp binding"]

## documentFormat (array[categorical])

Document Format

### Possible Values

- [Codex/Book]
- [Scroll/Roll]
- [Single-Sheet-Document]
- [Tablet]
- [Hornbook]
- [Other]

## hasHomeRowMods (bool)

Indicates whether the database uses home row mods.

Among [alternatives to home row mods](https://Makeademic.github.io/home-row-mods#alternatives), only [alternative layouts](https://Makeademic.github.io/home-row-mods#alternative-home-row-mods-layout) also pass this filter. All the rest (callum-style mods, upper row mods, ...) would result in `hasHomeRowMods` = false.

If there are at least four mod-taps on the home row, `hasHomeRowMods` should be set to true.

### Possible Values

- true
- false

## hasInscriptionOnBinding (bool)

Indicates whether the binding has inscriptions

### Possible Values

- true
- false

## hasUncutForeEdges (bool)

Indicates whether it has uncut fore-edges

### Possible Values

- true
- false

## isAutoShiftEnabled (bool)

Indicates whether auto shift is enabled and used in the database.

Check this even if you're using auto shift only on symbols; the slightest use of auto shift counts, this is not limited to auto shift on alphas.

### Possible Values

- true
- false

## hasRuling (bool)

Indicates whether or not it has ruling

### Possible Values

- true
- false

## endbandPresent (bool)

Indicates whether or not an endband is present.

### Possible Values

- true
- false

## hasRubrication (bool)

Indicates whether or not it has rubrication

### Possible Values

- true
- false

## keybindings (array[categorical])

Special keybindings schemes for which this database is optimized for.

Users of evil-based Emacs distros such as Spacemacs or Doom Emacs must tick "Vim" and not "Emacs", since this is about keybindings philosophy, not the actual program that the database author uses.

TWM stands for Tiling Windows Manager.

### Possible Values

- [Vim]
- [Emacs]
- [Kakoune]
- [Graphics/CAD]
- [TWM]
- [Spreadsheets]
- [Gaming]
- [] (None of the special keybindings above apply)

## textTechnology (categorical)

Is the internal document a manuscript, printed, or unclear?

### Possible Values

- Printed with manuscript additions
- Manuscript
- Unclear/Indistinct

## yearCount (integer)

The date in YYYY years

### Possible Values

- 1 (min)
- 36
- 102
- 1780

## databaseImage (string)

Link to a visual representation of the database in question.

In most cases, this should be an externally hosted image but hosting the database image directly in the repo at `src/assets/img/database/` may be considered.

For best results, make sure to use a big font size for legends and high contrast. When displaying a split database, minimise the horizontal distance between the two halves. Good examples include [Pnohty](https://db.com/database/rayduck/), [datagrok's layout for the Mitosis](https://db.com/database/datagrok/), [alterecco's Ahokore](https://db.com/database/alterecco-zmk/), and [Seniply](https://db.com/database/stevep99/). In particular, avoid screenshots of ASCII art. They aren't very pretty and are unreadable from the home page.

Make sure to use a _direct_ link to the image. If opening the link in a new tab shows a user interface around the image, it is not a direct link.

Examples:
| Indirect ❌ | Direct ✅ |
|---------------------------------------------------------------|-------------------------------------------------------------------------|
| https://imgur.com/a/zNAoIWO | https://i.imgur.com/6bA40no.jpeg |
| https://github.com/Lysquid/qmk_database/blob/lysquid/database.svg | https://raw.githubusercontent.com/Lysquid/qmk_database/lysquid/database.svg |

### Possible Values

- "https://i.ibb.co/RQZx2dY/default-kyria2.jpg"
- Makeademic.jpg

## databaseUrl (string)

The link to the database _folder_ files.

### Possible Values

- "https://github.com/qmk/qmk_firmware/tree/master/keyboards/minidox/database/dustypomerleau"
- "https://github.com/alvaro-prieto/corne"
- https://github.com/Makeademic/dactyl-manuform-database/

## subjects (array[categorical])

General Subjects

### Possible Values

- ["religion and mythology", "history and legend"]
- [Portrait, allegory]
- ["still life", "kings, queens, rulers", "landscape", "Architecture"]

## documentCount (integer)

Number of documents

### Possible Values

- 1 (min)
- 8
- 16
- 65 (max)

## OS (array[categorical])

The operating system(s) used by the database author, sorted in descending order of usage.

### Possible Values

- ["Windows"]
- ["MacOS", "Windows"]
- ["Linux"]
- ["Windows", "Android"]

## textblockBindingRelationship (categorical)

The relationship of the textblock to the binding

### Possible Values

- Squares
- Indeterminate
- Flush

## summary (string or array[string])

Short summary (max. 60 words) of the database to show in the card, below the picture.

This is not a mandatory field. You can leave it empty with `summary: ""`.

It is also possible to use [YAML arrays](https://www.w3schools.io/file/yaml-arrays/) for a summary consisting of bullet points. However, those take up a considerable amount of vertical space, so use it in moderation and prefer normal strings when possible.

### Possible Values

- "database for Corne Keyboard specially designed for software developers using macOS and Windows and writing in Spanish and English."
- "OS independent shortcuts, custom modifier keys, RGB themes, key sequences, and much more."
- "A combo-based layout for Ergonomic Keyboards, implemented in QMK"
- ""

## title (string)

The name of the database itself.

Most database don't have an actual name like "Seniply", "Miryoku" or "T-34" so if you're feeling uninspired, just go for "&lt;author&gt;'s database for the &lt;keyboard&gt;".

### Possible Values

- Miryoku
- Makeademic's database for the Dactyl Manuform 5x6
- rafaelromao's keyboard layout

## writeup (string)

URL to the detailed write-up of the database which explains the rationale behind the design choices.

It can be a README or a blog post.

This is not a mandatory field. If you haven't written a (detailed) write-up for your database, just set `writeup: ""`.

### Possible Values

- "https://github.com/skychil/kombol/blob/main/README.md"
- "http://thedarnedestthing.com/thumb%20h"
- ""

---

# Notes

The actual underlying data type of "categorical" is "string". The difference between "string" and "categorical" in the reference above is that "string" have little to no limitation in the range of values it can take, while "categorical" pick from a predefined list of accepted values. This list of accepted values may be extended if sufficiently convincing arguments are defended.

While the database entries have a `.md` extension denoting markdown files, they only contain [front matter data](https://www.11ty.dev/docs/data-frontmatter/), which uses [YAML syntax](https://learnxinyminutes.com/docs/yaml/), so don't try to use Markdown syntax like \*italic\* or \~\~crossed-out\~\~.
(This syntax-extension mismatch might be solved by modifying the website file structure but abusing 11ty's native markdown posts support is simply easier.)

Notably, this means that quotes are optional around strings, which is why some of the possible values given as examples are sometimes enclosed in quotes and sometimes not. Additionally, boolean values are case-insensitive; it doesn't matter whether you write `true` or `True` (don't use `1` for true and `0` for false though).
