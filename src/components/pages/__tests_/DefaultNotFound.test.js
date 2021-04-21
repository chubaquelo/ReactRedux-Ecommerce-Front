import React from 'react';
import renderer from 'react-test-renderer';
import DefaultNotFound from '../DefaultNotFound';

describe('renders correctly', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DefaultNotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
