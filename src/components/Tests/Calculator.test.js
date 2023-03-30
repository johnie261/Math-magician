import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../calculator';

it('matches snapshots', () => {
  const tree = renderer
    .create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
