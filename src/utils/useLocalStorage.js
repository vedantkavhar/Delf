import { useState } from 'react';

export function useLocalStorage() {
  const getValue = (key) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error retrieving localStorage item:', error);
      return null;
    }
  };

  const setValue = (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting localStorage item:', error);
    }
  };

  return { getValue, setValue };
}
