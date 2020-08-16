import { useState } from 'react';

interface UseInputError {
  errorMessage: string;
  addErrorMessage: (errorMessage: string) => void;
  borderColor: () => string;
  textColor: () => string;
}

export default (): UseInputError => {
  const [errorMessage, setErrorMessage] = useState<string>('');
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
