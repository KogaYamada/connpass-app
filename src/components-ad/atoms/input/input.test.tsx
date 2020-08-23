import React from 'react';

import { shallow, configure, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './input.component';
import { TextInput } from 'react-native-gesture-handler';

configure({ adapter: new Adapter() });

describe('input snapshot tests', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    wrapper = shallow(<Input />);
  });
  it('<Input />: propsなし', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('<Input secureTextEntry />: secureTextEntry->true', () => {
    expect(wrapper.setProps({ secureTextEntry: true })).toMatchSnapshot();
  });
  it('<Input placeholder={"インプット"} />: placeholder->インプット', () => {
    expect(wrapper.setProps({ placeholder: 'インプット' })).toMatchSnapshot();
  });
  it('<Input value={"インプット"} />: value->インプット', () => {
    expect(wrapper.setProps({ value: 'インプット' })).toMatchSnapshot();
  });
  it('<Input error />: error->true', () => {
    expect(wrapper.setProps({ error: true })).toMatchSnapshot();
  });
});

it('input onChangeText', () => {
  const onChangeText = jest.fn();
  const wrapper = shallow(<Input onChangeText={onChangeText} />);
  wrapper.find(TextInput).simulate('changeText', 'インプット');
  expect(onChangeText).toBeCalledWith('インプット');
});
