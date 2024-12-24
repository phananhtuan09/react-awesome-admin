import { useCallback } from 'react';

const useLocalStorage = () => {
  const setItem = useCallback(<T = unknown>(key: string, value: T) => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error setting localStorage item:', error);
    }
  }, []);

  const getItem = useCallback(<T = string>(key: string): T | null => {
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
      console.error('Error getting localStorage item:', error);
      return null;
    }
  }, []);

  const clear = useCallback(() => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }, []);

  return { setItem, getItem, clear };
};

export default useLocalStorage;
