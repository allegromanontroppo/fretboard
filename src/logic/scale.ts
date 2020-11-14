enum Scale {
  Major = 'Major',
  Minor = 'Minor',
  Seventh = 'Seventh',
  Maj7 = 'Maj7',
  m7 = 'm7',
};

const semiTones = {
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

const chordTones: { [key: number]: string } = {
  0: 'root',
  3: 'flat third',
  4: 'third',
  7: 'fifth',
  10: 'flat seventh',
  11: 'seventh',
};

export default Scale;
export { semiTones, chordTones };
