
import Note, { notesArray } from "./note";
import Scale, { semiTonesFromRootNote, scaleTones, Tone } from "./scale";

class ToneCalculator {
  private semiTonesFromRootNote: number;

  constructor(
    note: string,
    chord: Note,
    private scale: Scale) {

    const noteSemiTonesFromA = notesArray.indexOf(note.toUpperCase());
    const chordRootSemiTonesFromA = notesArray.indexOf(chord.toUpperCase());

    this.semiTonesFromRootNote = (12 + (noteSemiTonesFromA - chordRootSemiTonesFromA)) % 12;
  }

  get chordTone() {
    return this.hasChordTone
      ? semiTonesFromRootNote[this.semiTonesFromRootNote]
      : null;
  }

  get isRootNote() {
    return this.chordTone === Tone.Root;
  }

  private get hasChordTone() {
    return scaleTones[this.scale].chordTones.includes(this.semiTonesFromRootNote);
  }
}

export default ToneCalculator;
