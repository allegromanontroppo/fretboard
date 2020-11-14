import { useState, useEffect } from "react";

function useFrets(): [number[], (value: number) => void, (value: number) => void] {
  const [[low, high], setFrets] = useState(() => {
    const defaultValue = (localStorage.getItem('frets') || '').split(',').filter(Boolean).map((value) => parseInt(value));

    return defaultValue.length ? defaultValue : [0, 9];
  });

  useEffect(function () {
    localStorage.setItem('frets', [low, high].join(','));
  }, [low, high]);

  function setLow(value: number) {
    setFrets([value, high]);
  }

  function setHigh(value: number) {
    setFrets([low, value]);
  }

  const frets = [];
  for (let i = low; i <= high; i++) {
    frets.push(i);
  }

  return [frets, setLow, setHigh];
}

export default useFrets;
