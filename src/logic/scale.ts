enum Scale {
  Major = 'Major',
  Minor = 'Minor',
  Dominant = 'Dominant',
  Maj7 = 'Maj7',
  m7 = 'm7',
};

enum Tone {
  Root = 'R',
  FlatSecond = '♭2',
  Second = '2',
  FlatThird = '♭3',
  Third = '3',
  Fourth = '4',
  Fifth = '5',
  FlatSixth = '♭6',
  Sixth = '6',
  FlatSeventh = '♭7',
  Seventh = '7',
};

const semiTonesFromRootNote: { [key: number]: Tone } = {
  0: Tone.Root,
  1: Tone.FlatSecond,
  2: Tone.Second,
  3: Tone.FlatThird,
  4: Tone.Third,
  5: Tone.Fourth,
  7: Tone.Fifth,
  8: Tone.FlatSixth,
  9: Tone.Sixth,
  10: Tone.FlatSeventh,
  11: Tone.Seventh,
};

export interface IToneType {
  allTones: number[];
  chordTones: number[];
}

const scaleTones = {
  [Scale.Major]: {
    allTones: [0, 2, 4, 5, 7, 9, 11],
    chordTones: [0, 4, 7],
  },
  [Scale.Minor]: {
    allTones: [0, 2, 3, 5, 7, 8, 10],
    chordTones: [0, 3, 7],
  },
  [Scale.Dominant]: {
    allTones: [0, 2, 4, 5, 7, 9, 10],
    chordTones: [0, 4, 7, 10],
  },
  [Scale.Maj7]: {
    allTones: [0, 2, 4, 5, 7, 9, 11],
    chordTones: [0, 4, 7, 11],
  },
  [Scale.m7]: {
    allTones: [0, 2, 3, 5, 7, 8, 10],
    chordTones: [0, 3, 7, 10],
  },
};

export default Scale;
export { Tone, semiTonesFromRootNote, scaleTones };
