import React from 'react';
import Title from './title.component';
import { shallow,configure, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('title snapshot tests', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    wrapper=shallow(<Title>タイトル</Title>);
  })

  it('<Title>タイトル</Title> :propsなしのタイトル', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('<Title bold>タイトル</Title> :タイトルが太字', () => {
    wrapper.setProps({ bold: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('<Title sideBarColor="red">タイトル</Title> :タイトル横に赤いバー表示', () => {
    wrapper.setProps({ sideBarColor: 'red' });
    expect(wrapper).toMatchSnapshot();
  });

  it('<Title size="large">タイトル</Title> :サイズlarge', () => {
    wrapper.setProps({ size: 'large' });
    expect(wrapper).toMatchSnapshot();
  });

  it('<Title size="middle">タイトル</Title> :サイズmiddle', () => {
    wrapper.setProps({ size: 'middle' });
    expect(wrapper).toMatchSnapshot();
  });

  it('<Title size="small">タイトル</Title> :サイズsmall', () => {
    wrapper.setProps({ size: 'small' });
    expect(wrapper).toMatchSnapshot();
  });
});

it('title onPress',()=>{
  const onPress = jest.fn();
  const wrapper=shallow(<Title onPress={onPress}>タイトル</Title>);
  wrapper.dive().find('Text').simulate('press');
  expect(onPress).toHaveBeenCalled();
})
