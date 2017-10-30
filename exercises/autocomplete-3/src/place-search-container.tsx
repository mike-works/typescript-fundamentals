import * as React from 'react';
import { autocomplete } from './autocomplete';
import { shortUrl } from './utils/string';
import { PlaceDetails } from './utils/places';
import { PlaceSearchResult } from './place-search-result';
import { PlaceSearchResultList } from './place-search-result-list';

interface ContainerState {
  results: PlaceDetails[]
  term: string
  inProgress: boolean
}

export class PlaceSearchContainer extends React.Component<{}, ContainerState> {
  constructor() {
    super();
    this.state = {
      term: '',
      inProgress: false,
      results: [] as PlaceDetails[]
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
  async beginSearch(term: string) {
    this.setState({term, inProgress: true})
    
    let placeDetails: PlaceDetails[] = await autocomplete(term);
    
    this.setState({
      results: placeDetails,
      inProgress: false
    });
    // Initiate a search using the ./autocomplete.ts module
    // When the promise it returns resolves, update your state accordingly
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
        {...this.state}
        onSearchTermChanged={this.beginSearch} />
    );
  }
}
