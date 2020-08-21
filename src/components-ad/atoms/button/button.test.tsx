import React from 'react';
import Button from './button.component';

import renderer from 'react-test-renderer';

describe('button snapshot tests', () => {
  test('<Button title={"タイトル"}/>: title以外のpropsなし', () => {
    const tree = renderer.create(<Button title={'タイトル'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<Button title={"タイトル"} size="large"/>: サイズlarge', () => {
    const tree = renderer
      .create(<Button title={'タイトル'} size="large" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<Button title={"タイトル"} size="middle"/>: サイズmiddle', () => {
    const tree = renderer
      .create(<Button title={'タイトル'} size="middle" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<Button title={"タイトル"} size="small"/>: サイズsmall', () => {
    const tree = renderer
      .create(<Button title={'タイトル'} size="small" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
