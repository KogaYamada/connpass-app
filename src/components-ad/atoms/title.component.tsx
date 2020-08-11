import React, { FC } from 'react';
import { View, Text } from 'native-base';
import { StyleSheet } from 'react-native';

interface TitleProps {
  title: string;
  bold: boolean;
  border: boolean;
  titleFontSize: 'small' | 'middle' | 'large';
}

const smallStyle = {
  fontSize: 140,
};

const middleStyle = {
  fontSize: 20,
};

const largeStyle = {
  fontSize: 46,
};

const Title: FC<TitleProps> = ({
  title = 'title',
  bold = true,
  border,
  titleFontSize = 'small',
}) => {
  //propsによってstyleを変える方法がわからない。
  const fontSizeStyle = () => {
    if (titleFontSize === 'small') {
      return smallStyle;
    } else if (titleFontSize === 'middle') {
      return middleStyle;
    } else {
      return largeStyle;
    }
  };

  const fontBoldStyle = () => {
    if (bold) {
      return {fontWeight: 'bold'};
    } else {
      return {fontWeight: 'normal'}
    }
  };

  console.log(fontBoldStyle());
  return (
    <View>
      <Text style={[fontSizeStyle(), fontBoldStyle()]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  fontBod: {
    fontWeight: 'bold',
  },
  fontNormal: {
    fontWeight: 'normal',
  },
  fontSize: {
    fontSize: 20
  }
});

export default Title;
