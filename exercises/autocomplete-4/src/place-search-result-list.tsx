import * as React from 'react';
import { autocomplete } from './autocomplete';
import { shortUrl } from './utils/string';
import { PlaceDetails } from './utils/places';
import { PlaceSearchResult } from './place-search-result';

interface IPlaceSearchResultListProps {
  results: PlaceDetails[];
  inProgress: boolean;
  term: string;
  onSearchTermChanged?: (term: string) => void
}

export const PlaceSearchResultList: React.SFC<IPlaceSearchResultListProps> =
  ({ onSearchTermChanged, term, inProgress, results }) => {

    /**
     * There are a bunch of different things that we could end up
     * displaying as feedback to the user. Below we handle each of
     * four cases independently, taking care to always have searchResults
     * be an array.
     */
    let searchResults = null;
    if (term.length === 0) {
      // No search yet
      searchResults = [
        <li key='goahead'>Type something in above to search</li>
      ];
    } else if (inProgress) {
      // Search in progress
      searchResults = [
        <li key='searching' className="blue">Searching for {term}...</li>
      ];
    } else if (results.length === 0) {
      // No results found
      searchResults = [
        <li key='noresults' className="red">Sorry! No results for {term}.</li>
      ];
    } else {
      // Search complete
      let i = 0;
      searchResults = results.map(r => (
        <PlaceSearchResult key={r.url} {...r} />
      ));
    }
    return (
      <div>
        <h2>Search for a place</h2>
        <input type="search" placeholder="Search" onChange={e => onSearchTermChanged ? onSearchTermChanged(e.target.value) : () => {}} />
        <ul className="results">
          {searchResults}
        </ul>
      </div>
    );
  }
