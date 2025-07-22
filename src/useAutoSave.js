import { useState, useEffect } from 'react';

export function useAutoSave(storageKey, initialValue = '') {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved !== null ? saved : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, value);
  }, [storageKey, value]);

  return [value, setValue];
}
