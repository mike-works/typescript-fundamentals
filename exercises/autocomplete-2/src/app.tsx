import * as React from 'react';
import { PlaceSearchResultList } from './place-search-result-list';
import { PlaceDetails, PlaceSummary, fetchPlaceSummaries, fetchPlaceDetails } from './utils/places';

interface ClockProps {
  name: string;
}
interface ClockState {
  currentTime: Date;
  timer?: any;
}

class Clock extends React.Component<ClockProps, ClockState> {
  constructor() {
    super();
    this.state = { currentTime: new Date() };
  }
  componentDidMount() {
    let timer = setInterval(() => {
      this.setState({
        currentTime: new Date() 
      });
    }, 10);
    this.setState({ timer });
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  render() {
    return ( 
      <div>
        <h6>{this.props.name}</h6>
        <div> { this.state.currentTime.toISOString() }</div>
      </div>
    )
  }
}

/// ----------

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
  async trySearch(search: string) {
    this.setState({ inProgress: true, term: search });
    let placeSummaries: PlaceSummary[] = await fetchPlaceSummaries(search);
    let results: PlaceDetails[] = await fetchPlaceDetails(placeSummaries.map(p => p.place_id));
    this.setState({ results, inProgress: false });
  }
  render() {
    console.log(this.state.results);
    return (
      <div>
        {/* <Clock name="Potatoes" />
        <Clock name="Steak" /> */}
        <PlaceSearchResultList searchCallback={this.trySearch} {...this.state }/>
      </div>
    );
  }
};