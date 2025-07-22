import React, { useEffect, useRef } from 'react';
import { useAutoSave } from './useAutoSave';

function AutoSaveInput({ storageKey, initialValue = '', onSave = () => {}, ...props }) {
  const inputRef = useRef(null);
  const [value, setValue] = useAutoSave(storageKey, initialValue);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSave(newValue);
  };

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
}

export default AutoSaveInput;
