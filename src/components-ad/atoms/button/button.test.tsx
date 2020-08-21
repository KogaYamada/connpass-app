import React from 'react';
import Button from './button.component';
import { shallow,configure, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('button snapshot tests', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    wrapper=shallow(<Button title={'ボタン'} />);
  })

  it('<Button title={"ボタン"}/>: title以外のpropsなし', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('<Button title={"ボタン"} size="large"/>: サイズlarge', () => {
    wrapper.setProps({size: 'large'})
    expect(wrapper).toMatchSnapshot();
  });

  it('<Button title={"ボタン"} size="middle"/>: サイズmiddle', () => {
    wrapper.setProps({size: 'middle'})
    expect(wrapper).toMatchSnapshot();
  });

  it('<Button title={"ボタン"} size="small"/>: サイズsmall', () => {
    wrapper.setProps({size: 'small'})
    expect(wrapper).toMatchSnapshot();
  });
});
