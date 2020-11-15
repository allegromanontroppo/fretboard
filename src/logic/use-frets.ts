import { useState } from "react";

function useFrets(defaultValue: [number, number]): [number[], (value: number) => void, (value: number) => void] {
  const [[low, high], setFrets] = useState(defaultValue.length ? defaultValue : [0, 5]);

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
