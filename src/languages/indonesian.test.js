import ind from './indonesian';

describe('translate()', () => {
  it('translates individual numbers', () => {
    expect(ind.translate(1)).toEqual('satu');
    expect(ind.translate("1")).toEqual('satu');
    expect(ind.translate(20)).toEqual('dua puluh');
    expect(ind.translate("20")).toEqual('dua puluh');
  });

  it('translates groups', () => {
    expect(ind.translate('100, 200, ...')).toEqual('ratus');
  });

  it('returns empty string for unknown numbers', () => {
    expect(ind.translate('blah')).toEqual('');
  });
});

describe('getExamples()', () => {
  it('returns empty array when the label does not match a known group', () => {
    expect(ind.getExamples('blah')).toEqual([]);
  });

  it('returns empty array when passing in a number', () => {
    expect(ind.getExamples(100)).toEqual([]);
  });

  it('returns the examples for the group with the specified label', () => {
    expect(ind.getExamples('100, 200, ...')).toEqual([
      100, 200, 300, 400, 500, 600, 700, 800, 900
    ]);
  });
});

describe('sounds', () => {
  it('returns the right filename for the given word', () => {
    expect(ind.sounds['satu']).toEqual('satu.wav');
  });

  it('returns undefined for an unknown word', () => {
    expect(ind.sounds['xyz']).toEqual(undefined);
  });
});

describe('getSoundFiles()', () => {
  it('returns an array of filenames of sounds corresponding to the given words', () => {
    expect(ind.getSoundFiles('dua belas')).toEqual(['dua.wav', 'belas.wav']);
  });

  it('returns an empty array when the words are unknown', () => {
    expect(ind.getSoundFiles('abc xyz')).toEqual([]);
  });

  it('returns an empty array for an empty string', () => {
    expect(ind.getSoundFiles('')).toEqual([]);
  });
});

