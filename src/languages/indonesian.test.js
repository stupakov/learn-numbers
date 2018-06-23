import ind from './indonesian';

describe('translate', () => {
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

