import * as React from 'react';
import { PlaceDetails } from './utils/places';

interface IPlaceSearchResultListProps {
  results: PlaceDetails[];
  inProgress: boolean;
  term: string;
  searchCallback?: (s: string) => void
}

export const PlaceSearchResultList: React.SFC<IPlaceSearchResultListProps> = (props) => {
  
  return (
    <div>
      <input type="text" onKeyUp={() => {
        console.log('hello');
      } }/>
      <button onClick={() => {
        alert('clicked!');
      }  }>Search</button>
    </div>
  )
}
