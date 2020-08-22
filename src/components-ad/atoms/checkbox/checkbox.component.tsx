import React, { Dispatch, SetStateAction, FC } from 'react';
import { CheckBox } from 'react-native-elements';

interface CheckboxProps {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

const Checkbox: FC<CheckboxProps> = ({ checked, setChecked }) => {
  const handlePress = () => {
    //うまくいかなかったら、setChecked(!checked);
    setChecked(prev=> !prev);
  };

  return <CheckBox checked={checked} onPress={handlePress} />;
};

export default Checkbox;
