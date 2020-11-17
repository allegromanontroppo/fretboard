import React, { useState } from "react";
import qs from "querystringify";

import Note from "../logic/note";
import Scale from "../logic/scale";

import useFrets from "../logic/use-frets";
import useHistory from "../logic/use-history";

import ChordContext from "./chord-context";
import ScaleContext from "./scale-context";
import AllTonesContext from "./all-tones-context";

import Range from "./range";
import Selector from "./selector";
import String from "./string";
import Dots from "./dots";

import "../styles/index.scss";

const strings = ["e", "b", "g", "d", "a", "E"];

interface DefaultValues {
  frets: [number, number];
  chord?: Note;
  scale?: Scale;
}

const defaultValues = (() => {
  const values = qs.parse(window.location.hash) as { [key: string]: string };

  return {
    ...values,
    frets: (values["frets"] || "")
      .split("-")
      .map((v) => parseInt(v))
      .filter(isFinite),
  } as DefaultValues;
})();

function Index() {
  const [frets, setLow, setHigh] = useFrets(defaultValues.frets);
  const [chord, setChord] = useState(defaultValues.chord || Note.A);
  const [scale, setScale] = useState(defaultValues.scale || Scale.Major);
  const [allTones, setAllTones] = useState(false);

  useHistory({ frets, chord, scale });

  return (
    <>
      <header className="page-header">
        <div className="container">
          <div className="row">
            <div className="col s6 m2">
              <Selector title="Chord" value={chord} object={Note} onChange={(value) => setChord(value as Note)} />
            </div>
            <div className="col s6 m2">
              <Selector title="Scale" value={scale} object={Scale} onChange={(value) => setScale(value as Scale)} />
            </div>
            <div className="col s6 m2">
              <form>
                <p>&nbsp;</p>
                <label>
                  <input type="checkbox" className="filled-in" onChange={(e) => setAllTones(e.target.checked)} />
                  <span>All tones</span>
                </label>
              </form>
            </div>
            <div className="col s12  m6">
              <Range frets={frets} setLow={setLow} setHigh={setHigh} />
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <table className="centered responsive-table">
          <thead>
            <tr>
              <th></th>
              {frets.map((fret) => (
                <th key={fret}>{fret}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <ChordContext.Provider value={chord}>
              <ScaleContext.Provider value={scale}>
                <AllTonesContext.Provider value={allTones}>
                  {strings.map((string) => (
                    <tr key={string}>
                      <String string={string} frets={frets} />
                    </tr>
                  ))}
                </AllTonesContext.Provider>
              </ScaleContext.Provider>
            </ChordContext.Provider>
            <tr>
              <Dots frets={frets} />
            </tr>
          </tbody>
        </table>
      </main>

      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              Fretboard by <a href="https://github.com/allegromanontroppo">Mark Holland</a>
            </div>
            <div className="col m6 s12">
              <a href="https://github.com/allegromanontroppo/fretboard" className="hide-on-med-and-up">
                Source Code
              </a>
              <a href="https://github.com/allegromanontroppo/fretboard" className="right hide-on-small-only">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Index;
