
import Note, { notesArray } from "./note";
import Scale, { semiTones, chordTones } from "./scale";

class ToneCalculator {
  private semiToneOfChord: number;

  constructor(
    private note: string,
    private chord: Note,
    private scale: Scale) {

    const noteSemiTonesFromA = notesArray.indexOf(note.toUpperCase());
    const chordSemiTonesFromA = notesArray.indexOf(chord.toUpperCase());

    this.semiToneOfChord = (12 + (noteSemiTonesFromA - chordSemiTonesFromA)) % 12
  }

  get chordTone() {
    // return this.semiToneOfChord;
    return this.chordTones.includes(this.semiToneOfChord)
      ? chordTones[this.semiToneOfChord]
      : null;
  }

  get semiTone() {
    return this.semiToneOfChord;
    // const index = (this.semiTonesFromA + this.chord) % 12;

    // return index
  }

  get chordTones() {
    return semiTones[this.scale].chordTones;
  }
}

export default ToneCalculator;
