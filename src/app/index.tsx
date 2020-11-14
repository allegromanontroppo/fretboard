import React, { Fragment } from "react";

import Note from "../logic/note";
import Scale from "../logic/scale";

import useFrets from "../logic/use-frets";
import useChord from "../logic/use-chord";
import useScale from "../logic/use-scale";

import ChordContext from "./chord-context";
import ScaleContext from "./scale-context";

import Range from "./range";
import Selector from "./selector";
import String from "./string";
import Dots from "./dots";

import "../styles/index.scss";

const strings = ["e", "b", "g", "d", "a", "E"];

function Index() {
  const [frets, setLow, setHigh] = useFrets();
  const [chord, setChord] = useChord();
  const [scale, setScale] = useScale();

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
            <div className="col s12 offset-m2 m6">
              <Range frets={frets} setLow={setLow} setHigh={setHigh} />
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <table>
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
                {strings.map((string) => (
                  <tr key={string}>
                    <String string={string} frets={frets} />
                  </tr>
                ))}
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
