enum Scale {
  Major = 'Major',
  Minor = 'Minor',
  Seventh = 'Seventh',
  Maj7 = 'Maj7',
  m7 = 'm7',
};

enum Tone {
  Root = 'R',
  FlatThird = '♭3',
  Third = '3',
  Fifth = '5',
  FlatSeventh = '♭7',
  Seventh = '7',
};

const semiTonesFromRootNote: { [key: number]: Tone } = {
  0: Tone.Root,
  3: Tone.FlatThird,
  4: Tone.Third,
  7: Tone.Fifth,
  10: Tone.FlatSeventh,
  11: Tone.Seventh,
};

const scaleTones = {
  [Scale.Major]: {
    chordTones: [0, 4, 7],
  },
  [Scale.Minor]: {
    chordTones: [0, 3, 7],
  },
  [Scale.Seventh]: {
    chordTones: [0, 4, 7, 10],
  },
  [Scale.Maj7]: {
    chordTones: [0, 4, 7, 11],
  },
  [Scale.m7]: {
    chordTones: [0, 3, 7, 10],
  },
};

export default Scale;
export { Tone, semiTonesFromRootNote, scaleTones };
