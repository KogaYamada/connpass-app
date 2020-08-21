import React, { FC } from 'react';
import { StyleSheet, Text, GestureResponderEvent, View } from 'react-native';

/* サイドバーの色 */
type SideBarColor = '#A82402' | '#000';
/* サイドバーを指定するためのprops */
type SideBarColorProps = 'red' | undefined;

interface TitleProps {
  /* `true`の時、タイトル文字に`bold`を追加 */
  bold?: boolean;
  /* タイトル横のバーの色、指定無しで非表示 */
  sideBarColor?: SideBarColorProps;
  /* 文字のサイズ */
  size?: 'small' | 'middle' | 'large';
  textAlign?: 'left' | 'center' | 'right';
  /* タイトルを押した時の関数 */
  onPress?: (event: GestureResponderEvent) => void;
}

const Title: FC<TitleProps> = ({
  bold,
  sideBarColor,
  size = 'middle',
  textAlign = 'left',
  onPress,
  children,
}) => {
  const _bold = bold ? 'bold' : 'none';
  const _sideBarColor: SideBarColor = ((
    color: SideBarColorProps
  ): SideBarColor => {
    switch (color) {
      case 'red':
        return '#A82402';
      default:
        return '#000';
    }
  })(sideBarColor);
  return (
    <View
      style={
        sideBarColor
          ? { borderLeftWidth: 4, borderLeftColor: _sideBarColor }
          : null
      }>
      <Text
        style={[styles.text, styles[size], styles[_bold], styles[textAlign]]}
        onPress={onPress}
      >
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  /* テキストのベーススタイル */
  text: {
    marginLeft: 8,
  },
  // size
  small: {
    fontSize: 24,
  },
  middle: {
    fontSize: 28,
  },
  large: {
    fontSize: 32,
  },
  // bold
  bold: {
    fontWeight: 'bold',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  // none
  none: {},
});

export default Title;
