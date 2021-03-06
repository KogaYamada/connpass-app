// ----------[ATOMS]--------------
import Title from '../../src/components-ad/atoms/title/title.stories';
import Input from '../../src/components-ad/atoms/input/input.stories';
import Divider from '../../src/components-ad/atoms/divider/divider.stories';
import FloatButton from '../../src/components-ad/atoms/float-button/float-button.stories';
import Button from '../../src/components-ad/atoms/button/button.stories';
import Label from '../../src/components-ad/atoms/label/label.stories';
import EventDate from '../../src/components-ad/atoms/event-date/event-date.stories';
import RadioButton from '../../src/components-ad/atoms/radio-button/radio-button.stories';
import Capacity from '../../src/components-ad/atoms/opacity/capacity.stories';
import Checkbox from '../../src/components-ad/atoms/checkbox/checkbox.stories'

// ----------[MOLECULES]--------------
import FormInput from '../../src/components-ad/molecules/form-input/form-input.stories';
// ----------[ORGANISMS]--------------
import LoginForm from '../../src/components-ad/organisms/login-form/login-form.stories';
import SignupForm from '../../src/components-ad/organisms/signup-form/signup-form.stories';
import SocialLogin from '../../src/components-ad/organisms/social-login/social-login.stories';
// ----------[SCREENS]--------------
import Signin from '../../src/components-ad/screens/signin/signin.stories';
import Signup from '../../src/components-ad/screens/signup/signup.stories';
import SingupDone from '../../src/components-ad/screens/signup-done/singup-done.stories';
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
