import T2W from "numbers2words";

const oneThroughNine = [1,2,3,4,5,6,7,8,9];

const examples = {
  ones: [0].concat(oneThroughNine),
  teens: oneThroughNine.map(n => n+10),
  tens: oneThroughNine.map(n => n*10),
  hundreds: oneThroughNine.map(n => n*100),
  thousands: oneThroughNine.map(n => n*1000),
  millions: oneThroughNine.map(n => n*1000000),
}

const groups = {
  ones: {
    label: "0, 1, 2, ...",
    translation: undefined,
    examples: examples.ones,
  },
  teens: {
    label: "11, 12, ...",
    translation: "belas",
    examples: examples.teens,
  },
  tens: {
    label: "10, 20, ...",
    translation: "puluh",
    examples: examples.tens,
  },
  hundreds: {
    label: "100, 200, ...",
    translation: "ratus",
    examples: examples.hundreds,
  },
  thousands: {
    label: "1k, 2k, ...",
    translation: "ribu",
    examples: examples.thousands,
  },
  millions: {
    label: "1M, 2M, ...",
    translation: "juta",
    examples: examples.millions,
  },
};

const Indonesian = (() => {
  const warnMissingSoundFiles = (lang) => {
    lang.vocabulary.forEach(word => {
      if(lang.sounds[word] === undefined) {
        console.warn(`Language ${lang.name} missing sound file for word ${word}`);
      };
    });
  };

  const vocabulary = [
    'nol',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh',
    'sebelas',
    'seratus',
    'seribu',
    'puluh',
    'belas',
    'ratus',
    'ribu',
    'juta',
  ];

  const sounds = {
    'satu' : require('./sounds/indonesian/satu.wav'),
    'dua' : require('./sounds/indonesian/dua.wav'),
    'belas' : require('./sounds/indonesian/belas.wav'),
  };

  const indonesian = {
    name: 'indonesian',
    _getTranslator: () => (new T2W("ID_ID")),
    learnLayout: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [9, 10, 11],
      [12, 13, 14],
      [15, 16, 17],
      [18, 19, 20],
      [100, 200],
      [1000, 2000],
      [1000000, 2000000],
    ],
    referenceSlides: [
      groups.ones,
      groups.teens,
      groups.tens,
      groups.hundreds,
      groups.thousands,
      groups.millions,
    ],
    vocabulary: vocabulary,
    sounds: sounds,
  };

  warnMissingSoundFiles(indonesian);

  return indonesian;
})();


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

const generateGetSoundFilesFor = (language) => (label) => {
  const words = label.split(' ');
  const files = words.map(word => language.sounds[word]);
  return files.filter(file => file !== undefined);
};

const wrapLanguageDefinition = (language) => (
  Object.assign(language, {
    translate: generateTranslateFor(language),
    getExamples: generateGetExamplesFor(language),
    getSoundFiles: generateGetSoundFilesFor(language),
  })
);

export default wrapLanguageDefinition(Indonesian);
