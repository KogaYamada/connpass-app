import { useState } from 'react';

export default () => {
  const [errorMessage, setErrorMessage] = useState('');
  return {
    errorMessage,
    addErrorMessage: (errorMessage) => {
      setErrorMessage(errorMessage);
    },
    borderColor: function () {
      return this.errorMessage ? 'red' : '#707070';
    },
    textColor: function () {
      return this.errorMessage ? 'red' : 'black';
    },
  };
};
