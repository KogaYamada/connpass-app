import { useState } from 'react';

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState('');
  return {
    value,
    setValue,
    onChangeText: (newValue) => {
      setValue(newValue);
    },
    errorMessage,
    addErrorMessage: (errorMessage) => {
      setErrorMessage(errorMessage);
    },
  };
};
