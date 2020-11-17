
import Note, { notesArray } from "./note";
import Scale, { semiTonesFromRootNote, scaleTones, Tone, IToneType } from "./scale";

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

  get tone() {
    return this.isScaleTone
      ? semiTonesFromRootNote[this.semiTonesFromRootNote]
      : null;
  }

  get chordTone() {
    return this.isChordTone
      ? semiTonesFromRootNote[this.semiTonesFromRootNote]
      : null;
  }

  get isRootNote() {
    return this.chordTone === Tone.Root;
  }

  get isChordTone() {
    return this.isTone('chordTones');
  }

  private get isScaleTone() {
    return this.isTone('allTones');
  }

  private isTone(toneType: keyof IToneType) {
    return scaleTones[this.scale][toneType].includes(this.semiTonesFromRootNote);
  }
}

export default ToneCalculator;
