<h1>11ty + Tailwind CSS Database</h1>

This online and open-source database template is based on Makeademic's database Database https://db.com.

## How Is It Organized?

.github folder has the workflows folder including build.yml (and broken-links-crawler)
dist folder (grayed out)
lib folder has collections, filters, and transforms
node_modules (grayed out)
src folder has
_data has
db_fields.json has all of the database fields
maintainer.json (can we delete this?)
menu.json has About and GitHub links for menu
process.js has module.export
site.js has title, description, keywords, paginate, and link to logo

_includes has

icons folder has 3 svgs
layouts folder has 
default.njk  has default HTML
db_entry.njk creates HTML for each database entry

macros folder has
boolean_to_yes_no.njk
show_categorical_array.njk
yes_no_switch_field.njk

partials folder has
disqus.njk
footer.njk copyleft note
header.njk has logo, nav menu, search, menu toggle at small size
database_metadata.json.njk has database metadata
paginator.njk has previous and next buttons
post_grid.njk has postcard content and styling
sidebar.njk has all of the data fieldsets 

assets has
css has
extras.css
main.css
mouislider.css

img has
database has
most of the database images (.png)

apple-touch-icon.png
cover.png
favicon.svg
no-image.svg

js has
card.js has card styling
dual_sliders_conf.js (can we delete?)
filter_database.js ( do we need to edit or delete? )
main.js has hide header on scroll down and toggle menu hamburger on small screen

svg has
logo has
light.svg
OS has
Linux.svg
MacOS.svg
Windows.svg

misc has
bundle_extras.js.njk
bundle.js.njk
filter_database.js.njk
database_metadata.json.njk
misc.11tydata.js
robots.txt.njk
sitemap.xml.njk

posts has
database has 
all the markdown files have database fields : values

404.njk has page not found message
about.njk has about page HTML
index.njk has home page HTML

.eleventy.js adds Tailwind plugin, addPassthroughCopy, config.addCollection, dir: {input: 'src', output: 'dist'},
.gitignore has all of the file types to ignore
CNAME would have URL
db_fields_reference.md has all the data fields
package-lock.json has name, version, devDependencies, node_modules, etc.
package.json has scripts and dependencies
tailwind.config.js has theme sizes, colors, styles, etc.


