import React from 'react';
import Divider from './divider.component';
import { shallow, configure, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('divider snapshot tests', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    wrapper = shallow(<Divider />);
  });

  it('<Divider />: propsなし', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('<Divider height="large"/>: サイズlarge', () => {
    wrapper.setProps({ height: 'large' })
    expect(wrapper).toMatchSnapshot();
  });

  it('<Divider height="middle"/>: サイズmiddle', () => {
    wrapper.setProps({ height: 'middle' })
    expect(wrapper).toMatchSnapshot();
  });

  it('<Divider height="small"/>: サイズsmall', () => {
    wrapper.setProps({ height: 'small' })
    expect(wrapper).toMatchSnapshot();
  });
});
