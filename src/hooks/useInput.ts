import { useState, Dispatch, SetStateAction } from 'react';

interface UseInput {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChangeText: (newValue: string) => void;
}

export default (initialValue: string): UseInput => {
  const [value, setValue] = useState<string>(initialValue);
  return {
    value,
    setValue,
    onChangeText: (newValue) => {
      setValue(newValue);
    },
  };
};
