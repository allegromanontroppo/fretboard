import React, { useContext } from "react";

import ToneCalculator from "../logic/tone-calculator";

import ChordContext from "./chord-context";
import ScaleContext from "./scale-context";

interface Props {
  note: string;
}

function Fret({ note }: Props) {
  const toneCalculator = new ToneCalculator(note, useContext(ChordContext), useContext(ScaleContext));

  return <>{toneCalculator.chordTone}</>;
}

export default Fret;
