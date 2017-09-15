import * as React from 'react';
import { PlaceSearchContainer } from '../src/place-search-container';
import * as renderer from 'react-test-renderer';
import { PlaceDetails } from '../src/utils/places';

it('PlaceSearchContainer renders correctly', () => {
  const tree = renderer.create(
    <PlaceSearchContainer />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
