const oneThroughNine = [1,2,3,4,5,6,7,8,9];

const examples = {
  teens: oneThroughNine.map(n => n+10),
  tens: oneThroughNine.map(n => n*10),
  hundreds: oneThroughNine.map(n => n*100),
  thousands: oneThroughNine.map(n => n*1000),
  millions: oneThroughNine.map(n => n*1000000),
}

const groups = {
  teens: {
    label: "10 + __",
    number: "10 + __",
    translation: "belas",
    examples: examples.teens,
  },
  tens: {
    label: "x10",
    number: 10,
    translation: "puluh",
    examples: examples.tens,
  },
  hundreds: {
    label: "x100",
    number: 100,
    translation: "ratus",
    examples: examples.hundreds,
  },
  thousands: {
    label: "x1,000",
    number: 1000,
    translation: "ribu",
    examples: examples.thousands,
  },
  millions: {
    label: "x1,000,000",
    number: 1000000,
    translation: "juta",
    examples: examples.millions,
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
    0: 'nol',
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


// TODO extract common code from generateTranslateFor() and generateGetExamplesFor()
const generateTranslateFor = (language) => (number) => {
  const directTranslation = language.translations[number];
  if(directTranslation !== undefined) {
    return directTranslation;
  }

  const k = Object.keys(groups).filter(key => (
    groups[key].label === number
  ));
  const matchingGroup = groups[k[0]];

  if(matchingGroup !== undefined) {
    return matchingGroup.translation;
  };

  return '';
};

const generateGetExamplesFor = (language) => (label) => {
  const k = Object.keys(groups).filter(key => (
    groups[key].label === label
  ));
  const matchingGroup = groups[k[0]];

  if(matchingGroup !== undefined) {
    return matchingGroup.examples;
  };

  return [];
};

const wrapLanguageDefinition = (language) => (
  Object.assign(language, {
    translate: generateTranslateFor(language),
    getExamples: generateGetExamplesFor(language),
  })
);

export default wrapLanguageDefinition(Indonesian);
