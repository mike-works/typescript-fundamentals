import * as React from 'react';
import { App } from '../src/app';
import * as renderer from 'react-test-renderer';
import { PlaceDetails } from '../src/utils/places';

it('PlaceSearchContainer renders correctly', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
