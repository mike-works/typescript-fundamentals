import * as React from 'react';
import { PlaceSearchContainer } from '../src/place-search-container';
import * as renderer from 'react-test-renderer';
import { PlaceDetails } from '../src/utils/places';

let hasStudentSolution: boolean = true;

hasStudentSolution =
  JSON.stringify(renderer.create(<PlaceSearchContainer />).toJSON()) !==
  JSON.stringify({ type: 'p', props: {}, children: ['Replace this with a PlaceSearchResultList'] });

if (hasStudentSolution) {
  it('PlaceSearchContainer renders correctly', () => {
    const tree = renderer.create(<PlaceSearchContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
} else {
  describe('Instructions', () => {
    test('Please implement the "autocomplete-3/src/place-search-container.tsx" component', () => {
      expect(true).toBeTruthy();
    });
  });
}
