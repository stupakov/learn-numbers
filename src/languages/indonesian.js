import T2W from "numbers2words";

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
  _getTranslator: () => (new T2W("ID_ID")),
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

const _findGroupWithLabel = (label) => {
  const k = Object.keys(groups).filter(key => (
    groups[key].label === label
  ));
  return groups[k[0]];
};

const generateTranslateFor = (language) => (number) => {
  const matchingGroup = _findGroupWithLabel(number);

  if(matchingGroup !== undefined) {
    return matchingGroup.translation;
  };

  try {
    const translator = language._getTranslator();
    return translator.toWords(parseInt(number, 10));
  } catch(e) {
    return '';
  }
};

const generateGetExamplesFor = (language) => (label) => {
  const matchingGroup = _findGroupWithLabel(label);

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
