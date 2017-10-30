import * as React from 'react';
import { PlaceDetails } from './utils/places';

export const PlaceSearchResult: React.SFC<PlaceDetails> = (details) => {
  let websiteWidget: JSX.Element | null = null;
  if (details.website) {
    websiteWidget = (
      <span>
        -
        <a
          href={details.website}
          target="_blank"
        >
          {details.website}
        </a>
      </span>
    )
  }
  return (
    <li
    className="search-result"
    >
    <img
      className="icon"
      src={details.icon}
    />
    <h3>
      {details.name}
    </h3>
    <p>
      <a
        href={details.url}
        target="_blank"
      >
        {details.vicinity}
      </a>
      {websiteWidget}
    </p>
    </li>
  );
};
