const groups = {
  teens: {
    label: "10 + __",
    number: "10 + __",
    translation: "belas",
  },
  tens: {
    label: "x10",
    number: 10,
    translation: "puluh",
  },
  hundreds: {
    label: "x100",
    number: 100,
    translation: "ratus",
  },
  thousands: {
    label: "x1,000",
    number: 1000,
    translation: "ribu",
  },
  millions: {
    label: "x1,000,000",
    number: 1000000,
    translation: "juta",
  },
};

const layout = {
  ones: [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
  ],
  teens: [
    [10],
    [11,12,13],
    [14,15,16],
    [17,18,19]
  ],
  multipliers: [
    [groups.teens.label],
    [groups.tens.label],
    [groups.hundreds.label],
    [groups.thousands.label],
    [groups.millions.label],
  ]
};

const Indonesian = {
  translations: {
    1: 'satu',
    2: 'dua',
    3: 'tiga',
    4: 'empat',
    5: 'lima',
    6: 'enam',
    7: 'tujuh',
    8: 'delapan',
    9: 'sembilan',
    10: 'sepuluh',
    11: 'sebelas',
    12: 'dua belas',
    13: 'tiga belas',
    14: 'empat belas',
    15: 'lima belas',
    16: 'enam belas',
    17: 'tujuh belas',
    18: 'delapan belas',
    19: 'sembilan belas',
  },
  learnSlides: [
    {
      label: '0-9',
      layout: layout.ones,
    },
    {
      label: '10-19',
      layout: layout.teens,
    },
    {
      label: '10, 100, 1k, 1M',
      layout: layout.multipliers,
    },
  ]
}

const generateTranslateFor = (language) => (number) => {
  return language.translations[number];
};

const wrapLanguageDefinition = (language) => (
  Object.assign(language, {
    translate: generateTranslateFor(language)
  })
);

export default wrapLanguageDefinition(Indonesian);
