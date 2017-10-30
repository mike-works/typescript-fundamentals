import * as React from 'react';
import { PlaceSearchResultList } from './place-search-result-list';
import { PlaceDetails, PlaceSummary, fetchPlaceSummaries, fetchPlaceDetails } from './utils/places';
import Clock from './clock';

interface IAppState {
  results: PlaceDetails[];
  inProgress: boolean;
  term: string; 
}

export class App extends React.Component<{}, IAppState> {
  constructor() {
    super();
    this.state = {
      results: [],
      term: '',
      inProgress: false
    };
    this.trySearch = this.trySearch.bind(this);
  }
  async trySearch(evt: React.ChangeEvent<HTMLInputElement>) {
    let search = evt.target.value;
    this.setState({ inProgress: true, term: search });
    // fetchPlaceSummaries(search).then(placeSummaries => {
    //   return fetchPlaceDetails(placeSummaries.map(p => p.place_id));
    // })
    // .then(results => {
    //   this.setState({ results, inProgress: false });
    // })
    let placeSummaries: PlaceSummary[] = await fetchPlaceSummaries(search);
    let placeIds = placeSummaries.map(p => p.place_id);
    let results: PlaceDetails[] = await fetchPlaceDetails(placeIds);
    this.setState({ results, inProgress: false });
  }
  render() {
    console.log(this.state.results);

    // if (this.state.results.length > 0) 
    return (
      <div>
        <input onChange={this.trySearch} />
        <PlaceSearchResultList {...this.state}/>
      </div>
    );
  }
};