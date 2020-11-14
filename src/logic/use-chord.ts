import { useState, useEffect } from 'react';

import Note from './note';

function useChord(): [Note, React.Dispatch<React.SetStateAction<Note>>] {
  const [chord, setChord] = useState(() => localStorage.getItem('chord') as Note || Note.A);

  useEffect(function () {
    localStorage.setItem('chord', chord);
  }, [chord]);

  return [chord, setChord];
}

export default useChord;
