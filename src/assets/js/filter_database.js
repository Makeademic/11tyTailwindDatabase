async function getdatabaseJSON() {
    return fetch("{{ '/database_metadata.json' | url }}").then(res => res.json());
}

function isdatabaseConforming(query, databaseData) {
  for (const [queryKey, value] of query) {
    if (queryKey.endsWith("Count")) {
      let lowerbound, upperbound;
      [lowerbound, upperbound] = value.split("-").map(Number);
      if (upperbound === undefined && !isNaN(lowerbound)) {
        // `value` does not contain a "-" and is thus a
        // single number as opposed to a range.
        upperbound = lowerbound;
      }
      const countValue = Number(databaseData[queryKey]);
      if (!(lowerbound <= countValue && countValue <= upperbound)) {
        return false;
      }
    } else if (databaseData[queryKey] instanceof Array) {
        const selectedValues = value.split(",");
        if (!selectedValues.some(x => new Set(databaseData[queryKey]).has(x))) {
            return false;
        }

    } else if (queryKey === "search") {
        // databaseData["summary"] might be null so that's why we use
        // AND's short-circuit evaluation to check for null before accessing
        // the toLowerCase property. It might also be an array of strings instead.
        let isConformingToTypedSearch = (word) => ["title", "author", "summary"]
            .map(fieldN => databaseData[fieldN] && String(databaseData[fieldN]).toLowerCase().indexOf(word.toLowerCase()) !== -1)
            .some(Boolean);
        if (!value.split(" ").every(isConformingToTypedSearch)) {
            return false;
        }
    // In case the database data value is a boolean, `value` must be deserialized into a boolean, as done after the &&
    } else if (databaseData[queryKey] !== value && databaseData[queryKey] !== (value === "true")) {
      return false;
    }
  }
  return true;
}

async function getFiltereddatabase() {
    const searchParams = new URLSearchParams(location.search);
    return getdatabaseJSON().then(databaseJSON => databaseJSON.filter(database => isdatabaseConforming(searchParams, database)));
}

async function populatePostGrid(filtereddatabase) {
    const postGrid = $("post-grid");
    postGrid.innerHTML = "";
    const postsPerPage = {{ site.paginate }};
    const pageNo = Number((location.pathname.match(/page\/([0-9]+)/) || ["page/1", "1"])[1]);
    const offset = (pageNo - 1) * postsPerPage;
    const sliceddatabase = filtereddatabase.slice(offset, offset+postsPerPage);
    // Warning: The function syncPaginationButtons relies on the innerText of the "showing-n-results" doc element.
    // If you change the value of innerText, make sure to reflect that "API" change in syncPaginationButtons too!
    if (filtereddatabase.length === 0) {
        $("showing-n-results").innerText = "No results found.";
    } else if (offset < filtereddatabase.length) {
      $("showing-n-results").innerText = `Showing ${offset + 1} to ${Math.min(offset + postsPerPage, filtereddatabase.length)} of ${filtereddatabase.length} results found.`;
    } else {
      $("showing-n-results").innerText = `Showing 0 to 0 of ${filtereddatabase.length} results found.`;
      const amountOfPages = Math.ceil(filtereddatabase.length/postsPerPage);
      if (amountOfPages === 1) {
          $("showing-n-results").innerText += ` There is only 1 page for this search, not ${pageNo}.`;
      } else {
          $("showing-n-results").innerText += ` There are only ${amountOfPages} pages for this search, not ${pageNo}.`;
      }
    }
    syncPaginationButtons();
    for (const post of sliceddatabase) {
      postGrid.innerHTML += card(post, post.url);
    }
}

const pageRegExp = new RegExp("{{ '/page/' | url }}[0-9]+");
if (location.pathname === "{{'/' | url }}" || pageRegExp.test(location.pathname)) {
    getFiltereddatabase().then(filtereddatabase => populatePostGrid(filtereddatabase));
}
