import { notesArray } from './note';

class NoteCalculator {
  private semiTonesFromA: number;

  constructor(string: string) {
    this.semiTonesFromA = notesArray.indexOf(string.toUpperCase());
  }

  noteAt(fret: number) {
    const index = (this.semiTonesFromA + fret) % 12;

    return notesArray[index];
  }
}

export default NoteCalculator;
