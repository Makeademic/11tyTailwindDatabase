function oxfordJoin(coll) {
    return coll.length < 2 ? coll.join(", ") : coll.slice(0, -1).join(", ") + ", and " + coll[coll.length-1];
}

module.exports = {
  layout: "layouts/db_entry.njk",
  eleventyComputed: {
    permalink: (data) => `database/${data.page.fileSlug}/index.html`,
    databaseImage: (data) => {
      if (data.databaseImage) {
        if (data.databaseImage.search(/^https?:\/\//) !== -1) {
          return data.databaseImage.replace("http:", "https:");
        }
        return `/assets/img/database/${data.databaseImage}`;
      } else {
        return false;
      }
    },
    description: (data) => `Get inspired by ${data.author}'s ${data.keyCount}-key ${data.languages.length > 1 ? "multilingual " : ""}${data.keyboard} keymap and browse other ${oxfordJoin(data.documentFormat)} keymaps like this.`,
    ogImage: (data) => data.databaseImage,
    imageAlt: (data) => `${data.isSplit ? "Split" : "Non-split"} ${data.textblockBindingRelationship}-staggered ${data.keyboard} with ${oxfordJoin(data.bindingType)} legends.`
  }
};