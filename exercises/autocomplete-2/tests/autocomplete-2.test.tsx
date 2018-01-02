import * as React from 'react';
import { PlaceSearchResultList } from '../src/place-search-result-list';
import * as renderer from 'react-test-renderer';
import { PlaceDetails } from '../src/utils/places';

let hasStudentSolution: boolean = true;

hasStudentSolution =
  JSON.stringify(renderer.create(<PlaceSearchResultList />).toJSON()) !==
  JSON.stringify({ type: 'pre', props: {}, children: ['{"0":{},"1":{}}'] });

if (hasStudentSolution) {
  it('PlaceSearchResultList renders correctly for "in progress" state', () => {
    const tree = renderer
      .create(<PlaceSearchResultList inProgress={true} term={'xylophone'} results={[] as PlaceDetails[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('PlaceSearchResultList renders correctly for "not yet started" state', () => {
    const tree = renderer
      .create(<PlaceSearchResultList inProgress={false} term={''} results={[] as PlaceDetails[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('PlaceSearchResultList renders correctly for populated set of results', () => {
    const genPd = (x: any) => ({
      id: `${x}`,
      name: 'Donut Hut',
      rating: 1.1,
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
      vicinity: '31 Little Canada Road East, Little Canada',
      url: `https://maps.google.com/?cid=12061977042674382991${x}`
    });
    const tree = renderer
      .create(<PlaceSearchResultList inProgress={false} term={'xylophone'} results={[genPd(1), genPd(2), genPd(3)]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
} else {
  describe('Instructions', () => {
    test('Please implement the "autocomplete-2/src/place-search-result-list.tsx" component', () => {
      expect(true).toBeTruthy();
    });
  });
}
