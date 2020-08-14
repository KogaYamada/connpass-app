```javascript
import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
// 作成したコンポーネントをインポート
import <component> from './<component>.component';

// propsのオブジェクトを作成。無くてもOK
export const <props> = {
  // bold: true,
  // sideBarColor: 'red',
  // size: 'middle',
  // onPress: () => console.log('hello'),
};

// まだよくわからん
export const actions = {
  // onPress: () => alert('hello'),
};


export default storiesOf('<コンポーネントの名前>', module)
  .addDecorator((story) => <View style={{ margin: 10 }}>{story()}</View>)
  .add('default', () => <Title {...actions}>タイトル</Title>)// 初期状態など(あれば)
  // 以下にストーリーを作成していく
  .add('small', () => (
    <Title size="small" {...actions}>
      タイトル
    </Title>
  ))
  .add('middle', () => (
    <Title size="middle" {...actions}>
      タイトル
    </Title>
  ))
  .add('large', () => (
    <Title size="large" {...actions}>
      タイトル
    </Title>
  ))
  .add('red', () => (
    <Title sideBarColor="red" {...actions}>
      タイトル
    </Title>
  ));
```
