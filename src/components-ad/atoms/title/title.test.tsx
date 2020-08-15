import React from 'react';
import Title from './title.component';

import renderer from 'react-test-renderer';

describe('title snapshot tests', () => {
  test('<Title>タイトル</Title> :propsなしのタイトル', () => {
    const tree = renderer.create(<Title>タイトル</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<Title bold>タイトル</Title> :タイトルが太字', () => {
    const tree = renderer.create(<Title bold>タイトル</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<Title sideBarColor="red">タイトル</Title> :タイトル横に赤いバー表示', () => {
    const tree = renderer
      .create(<Title sideBarColor="red">タイトル</Title>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<Title size="large">タイトル</Title> :サイズlarge', () => {
    const tree = renderer.create(<Title size="large">タイトル</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<Title size="middle">タイトル</Title> :サイズmiddle', () => {
    const tree = renderer
      .create(<Title size="middle">タイトル</Title>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('<Title size="small">タイトル</Title> :サイズsmall', () => {
    const tree = renderer.create(<Title size="small">タイトル</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
