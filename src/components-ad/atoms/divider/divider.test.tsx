import React from 'react';
import Divider from './divider.component';

import renderer from 'react-test-renderer';

describe('divider snapshot tests', () => {
  test('Divider />: propsなし', () => {
    const tree = renderer.create(<Divider />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Divider height="large"/>: サイズlarge', () => {
    const tree = renderer.create(<Divider height="large" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Divider height="middle"/>: サイズmiddle', () => {
    const tree = renderer.create(<Divider height="middle" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Divider height="small"/>: サイズsmall', () => {
    const tree = renderer.create(<Divider height="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
