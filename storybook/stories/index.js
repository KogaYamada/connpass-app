// ----------[ATOMS]--------------
import Title from '../../src/components-ad/atoms/title/title.stories';
import AuthInput from '../../src/components-ad/atoms/auth-input/auth-input.stories';
import Divider from '../../src/components-ad/atoms/divider/divider.stories';
import FloatButton from '../../src/components-ad/atoms/float-button/float-button.stories';

// ----------[MOLECULES]--------------

// ----------[ORGANISMS]--------------

// ----------[TEMPLATES]--------------

// ----------[SCREENS]--------------

/***************** tutorial *****************
 import { storiesOf } from '@storybook/react-native';
 import { action } from '@storybook/addon-actions';
 import { linkTo } from '@storybook/addon-links';
 
 import Button from './Button';
 import CenterView from './CenterView';
 import Welcome from './Welcome';
storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
*/
