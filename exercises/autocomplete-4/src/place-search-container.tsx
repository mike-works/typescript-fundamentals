import * as React from 'react';
import { autocomplete } from './autocomplete';
import { shortUrl } from './utils/string';
import { PlaceDetails } from './utils/places';
import { PlaceSearchResult } from './place-search-result';
import { PlaceSearchResultList } from './place-search-result-list';

interface IPlaceSearchContainerState {
  results: PlaceDetails[];
  term: string,
  existingSearch?: Promise<PlaceDetails[]>;
}

export class PlaceSearchContainer extends React.Component<{}, IPlaceSearchContainerState> {
  constructor() {
    super();
    this.state = {
      term: '',
      results: [], // List of search results
      existingSearch: undefined // Most recent search (a promise that resolves to an array)
    };
    // Event handler for changes to search term
    this.beginSearch = this.beginSearch.bind(this);
  }
  /**
   * Event handler for changes to the serch term
   *
   * @param {InputEvent} evt from the search field
   *
   * @memberof PlaceSearch
   * @return {undefined}
   */
  beginSearch(term: string) {
    
    // Kick off the new search, with the new search term
    let p = autocomplete(term);
    // Update the existingSearch state, so our component re-renders
    //   (probably to update the "Searching for <term>..." message)
    this.setState({ term, existingSearch: p, results: [] });
    // Attach a promise handler to the search.
    //  THIS WILL ONLY BE INVOKED IF THE SEARCH RUNS TO COMPLETION
    p.then((results) => {
      // When the search completes, update the "results" state, triggering a re-render
      this.setState({ results, existingSearch: undefined });
    });
  }

  /**
   * Render the html for this component
   *
   * @param {JSX.Element} elem element
   * @param {Object} container component state
   * @returns {undefined}
   *
   * @memberof PlaceSearch
   */
  render() {
    return (
      <PlaceSearchResultList
        results={this.state.results}
        inProgress={!!this.state.existingSearch && this.state.results.length === 0}
        term={this.state.term}
        onSearchTermChanged={s => this.beginSearch(s)} />
    );
  }
}
