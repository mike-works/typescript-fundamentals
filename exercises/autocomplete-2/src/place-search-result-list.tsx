import * as React from 'react';
import { IAppState, App } from './app';
import { PlaceSearchResult } from './place-search-result';

interface IResultListProps extends IAppState {
  handleSearch?: (term: string) => void
}

const NO_OP = () => {};

export const PlaceSearchResultList: React.SFC<IResultListProps> = (p) => {
  let handler = p.handleSearch || NO_OP;
  let resultSet: JSX.Element[] = [];
  
  if (p.term === '') {
    resultSet.push((
      <li key="nothing" className="blue" >
        Please enter a search term above
      </li>
    ));
  } else if (p.inProgress) {
    resultSet.push((
      <li key="inprogress" className="blue" >
        Searching for {p.term} ...
      </li>
    ));
  } else if (p.results.length > 0) {
    resultSet = p.results.map(r => (
      <PlaceSearchResult key={r.id} {...r} />
    ));
  }

  return (
    <div>
    <h2>Search for a place </h2>
    <input onChange={e => handler(e.target.value)} placeholder="Search" type="search" />
    <ul className="results" >
      {resultSet}
    </ul>
  </div>
  )
}
