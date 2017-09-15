import * as React from 'react';
import { PlaceDetails } from './utils/places';
import { shortUrl } from './utils/string';

export const PlaceSearchResult: React.SFC<PlaceDetails> = (pd) => {
  return (
    <li className="search-result">
      <img className="icon"
        src={pd.icon} />
      <h3> {pd.name} </h3>
      <p>
        <a href={pd.url}
          target="_blank">
          {pd.vicinity}</a>&nbsp;
        -
        &nbsp;
      <a href={pd.website} target="_blank" >
          {shortUrl(pd.website, 20)}
      </a>
      </p>
    </li>
  );
};