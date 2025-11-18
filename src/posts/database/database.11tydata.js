function oxfordJoin(coll) {
    return coll.length < 2 ? coll.join(", ") : coll.slice(0, -1).join(", ") + ", and " + coll[coll.length-1];
}

module.exports = {
  layout: "layouts/db_entry.njk",
  eleventyComputed: {
    permalink: (data) => `database/${data.page.fileSlug}/index.html`,
    documentImage: (data) => {
      if (data.documentImage) {
        if (data.documentImage.search(/^https?:\/\//) !== -1) {
          return data.documentImage.replace("http:", "https:");
        }
        return `/assets/img/documents/${data.documentImage}`;
      } else {
        return false;
      }
    },
    description: (data) => `Get inspired by ${data.creatorName}'s ${data.yearCount} ${data.subjects.length > 1 ? "multilingual " : ""}${data.textTechnology} keymap and browse other ${oxfordJoin(data.documentFormat)} keymaps like this.`,
    ogImage: (data) => data.documentImage,
    imageAlt: (data) => data.imageAlt
  }
};