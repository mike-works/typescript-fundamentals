import * as React from 'react';
import { PlaceDetails } from './utils/places';
import { PlaceSearchResult } from './place-search-result';

interface PlaceSearchResultList {
  results: PlaceDetails[];
  inProgress: boolean;
  term: string; 
}

export const PlaceSearchResultList: React.SFC<PlaceSearchResultList> = ({ results, inProgress, term}) => {
  let message = <p>Please type a term into the box above</p>;
  if (inProgress) {
    message = <p>Currently searching</p>
  } else if (!inProgress && results.length > 0 && term !== '') {
    message = <p>Here are your {results.length} results</p>
  }
  let resultComponents = results.map(r => <PlaceSearchResult {...r} /> )
  return (
    <ul className='results'>
      {resultComponents}
    </ul>
  )
}
