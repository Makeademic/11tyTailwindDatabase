function compare(a, b) {
    if (a > b) {
        return +1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

module.exports = (coll) => {
  const posts = [...coll.getFilteredByGlob('src/posts/database/*.md')];

  // Case-insensitive sort by database name/title
  return posts.sort((a, b) => compare(a.data.title.toLowerCase(), b.data.title.toLowerCase()));
};
