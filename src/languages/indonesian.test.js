import ind from './indonesian';

describe('translate()', () => {
  it('translates individual numbers', () => {
    expect(ind.translate(1)).toEqual('satu');
    expect(ind.translate("1")).toEqual('satu');
  });

  it('translates groups', () => {
    expect(ind.translate('x100')).toEqual('ratus');
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
    expect(ind.getExamples('x100')).toEqual([
      100, 200, 300, 400, 500, 600, 700, 800, 900
    ]);
  });
});

