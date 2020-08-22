import { useState, Dispatch, SetStateAction } from 'react';

export interface InputState {
  value: string;
  errorMessage?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  onChangeText?: (newValue: string) => void;
  addErrorMessage: (errorMessage: string) => void;
}

export default (initialValue: string): InputState => {
  const [value, setValue] = useState<string>(initialValue);
  const [errorMessage, setErrorMessage] = useState<string>('');
  return {
    value,
    errorMessage,
    setValue,
    onChangeText: (newValue) => {
      setValue(newValue);
    },
    addErrorMessage: (errorMessage) => {
      setErrorMessage(errorMessage);
    },
  };
};
