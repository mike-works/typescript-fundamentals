import * as React from 'react';
import { PlaceDetails } from './utils/places';
import { shortUrl } from './utils/string';

export const PlaceSearchResult: React.SFC<PlaceDetails> = (placeInfo) => {
  let url = placeInfo.website ? <a href={placeInfo.website} target="_blank">{shortUrl(placeInfo.website, 20)}</a> : '';
  return (
    <li key={placeInfo.url} className="search-result">
      <img className="icon" src={placeInfo.icon} />
      <h3>{placeInfo.name}</h3>
      <p>
        <a href={placeInfo.url} target="_blank">{placeInfo.vicinity}</a>
        {' '}
        -
        {' '}
        {url}
      </p>
    </li>
  );
}