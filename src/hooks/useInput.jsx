import { useState, useCallback } from 'react';

export const useInput = () => {
  const [text, setText] = useState('');
  const [array, setArray] = useState([1, 2, 3]);
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 10) {
      alert('10文字以内で入力してください');
      return;
    }
    setText(e.target.value.toUpperCase());
  }, []);

  const handleAdd = useCallback(() => {
    setArray(
      (prevArray) => {
        // if (prevArray.includes(text)) {
        if (prevArray.some((item) => item === text)) {
          alert('同じ値は追加できません');
          return prevArray;
        }
        const newArray = [...prevArray, text];
        return newArray;
      },
      [text]
    );
  });

  return { text, array, handleChange, handleAdd };
};
