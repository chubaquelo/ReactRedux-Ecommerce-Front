import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

describe('renders correctly', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
