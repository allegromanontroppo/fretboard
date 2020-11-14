import React from "react";

import NoteCalculator from "../logic/note-calculator";

import Fret from "./fret";

interface Props {
  string: string;
  frets: number[];
}

function String({ string, frets }: Props) {
  const noteCalculator = new NoteCalculator(string);

  return (
    <>
      <th>{string}</th>
      {frets.map((fret) => (
        <td key={fret}>
          <Fret note={noteCalculator.noteAt(fret)} />
        </td>
      ))}
    </>
  );
}

export default String;