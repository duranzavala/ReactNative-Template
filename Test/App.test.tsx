import React from 'react';

import renderer from 'react-test-renderer';

import App from '../src/Screens/ExampleScreen/App';

test('App Tests', () => {
  const tree = renderer.create(<App name={'klever'} />);
  expect(tree).toMatchSnapshot();
});
