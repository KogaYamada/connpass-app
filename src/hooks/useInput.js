import { useState } from 'react';

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChangeText: (newValue) => {
      setValue(newValue);
    },
  };
};
