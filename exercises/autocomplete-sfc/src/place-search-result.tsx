import * as React from 'react';
import { PlaceDetails } from '../../autocomplete-2/src/utils/places';

export const PlaceSearchResult: React.SFC<PlaceDetails> = data => {
  return <li>
      <img src={data.icon} alt="" />
      {data.name}
    </li>;
};