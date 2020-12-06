import React from 'react';

import NoteCalculator from '../logic/note-calculator';

import Fret from './fret';

interface StringProps {
  string: string;
  frets: number[];
}

function String({ string, frets }: StringProps) {
  const noteCalculator = new NoteCalculator(string);

  return (
    <div className="string">
      <div>{string}</div>
      {frets.map((fret) => (
        <Fret note={noteCalculator.noteAt(fret)} key={fret} />
      ))}
    </div>
  );
}

export default String;
