import * as React from 'react';
import { PlaceSearchResult } from '../src/place-search-result';
import * as renderer from 'react-test-renderer';
import { PlaceDetails } from '../src/utils/places';
import { ReactElement } from 'react';

let hasStudentSolution: boolean = true;

hasStudentSolution =
  JSON.stringify(renderer.create(<PlaceSearchResult />).toJSON()) !==
  JSON.stringify({
    nodeType: 'component',
    props: {},
    instance: null,
    rendered: { nodeType: 'host', type: 'div', props: {}, instance: null, rendered: null }
  });

if (hasStudentSolution) {
  it('renders correctly if place is missing a website', () => {
    let pd: PlaceDetails = {
      id: 'e3290ca5b95282e14c0b14f98666ff7886efa359',
      name: 'Donut Hut',
      rating: 1.1,
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
      vicinity: '31 Little Canada Road East, Little Canada',
      url: 'https://maps.google.com/?cid=12061977042674382991'
    };
    const tree = renderer.create(<PlaceSearchResult {...pd} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if place has a website', () => {
    let pd: PlaceDetails = {
      id: 'e3290ca5b95282e14c0b14f98666ff7886efa359',
      name: 'Donut Hut',
      rating: 1.1,
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
      vicinity: '31 Little Canada Road East, Little Canada',
      url: 'https://maps.google.com/?cid=12061977042674382991',
      website: 'http://example.com'
    };
    const tree = renderer.create(<PlaceSearchResult {...pd} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
} else {
  describe('Instructions', () => {
    test('Please implement the "autocomplete-sfc/src/place-search-result.tsx" component', () => {
      expect(true).toBeTruthy();
    });
  });
}
