import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

it('Matches snapshot', () => {
  const tree = renderer
    .create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
