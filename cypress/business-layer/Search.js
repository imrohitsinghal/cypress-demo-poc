import SearchResultsPage from '../pages/SearchResultsPage'

const searchResultsPage = new SearchResultsPage()

class Search {
  checkResults(args) {
    let { itemCount, expectedItem, itemNotExpected } = { ...args }
    let results = searchResultsPage.getSearchResultList()
    searchResultsPage
      .getItemCount()
      .then((length) => {
        assert.equal(length, itemCount)
      })
      .then(() => {
        assert.isTrue(
          this.validateArray(results, itemNotExpected),
          `Search results: ${results}`
        )
      })
  }

  //TO-DO extract this to utils
  validateArray(items, input) {
    return items.some(
      (item) => !item.toLowerCase().includes(input.toLowerCase())
    )
  }
}

export default Search
