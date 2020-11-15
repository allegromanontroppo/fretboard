import React, { useContext } from "react";
import classNames from "classnames";

import ToneCalculator from "../logic/tone-calculator";

import ChordContext from "./chord-context";
import ScaleContext from "./scale-context";

interface Props {
  note: string;
}

function Fret({ note }: Props) {
  const toneCalculator = new ToneCalculator(note, useContext(ChordContext), useContext(ScaleContext));

  const $dot = (() => {
    const chordTone = toneCalculator.chordTone;
    if (chordTone) {
      return <span className={classNames("tone", { root: toneCalculator.isRootNote })}>{chordTone}</span>;
    }
  })();

  return <>{$dot}</>;
}

export default Fret;
