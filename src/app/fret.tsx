import React, { useContext } from "react";
import classNames from "classnames";

import ToneCalculator from "../logic/tone-calculator";
import { Tone } from "../logic/scale";

import ChordContext from "./chord-context";
import ScaleContext from "./scale-context";
import AllTonesContext from "./all-tones-context";

interface DotProps {
  tone: Tone;
  isRootNote: boolean;
  isChordTone: boolean;
}
interface FretProps {
  note: string;
}

function Dot({ tone, isRootNote, isChordTone }: DotProps) {
  return <span className={classNames("tone", { root: isRootNote, chord: isChordTone })}>{tone}</span>;
}

function Fret({ note }: FretProps) {
  const toneCalculator = new ToneCalculator(note, useContext(ChordContext), useContext(ScaleContext));

  const tone = useContext(AllTonesContext) ? toneCalculator.tone : toneCalculator.chordTone;

  return (
    <div className="fret">
      {tone && <Dot tone={tone} isRootNote={toneCalculator.isRootNote} isChordTone={toneCalculator.isChordTone} />}
    </div>
  );
}

export default Fret;
