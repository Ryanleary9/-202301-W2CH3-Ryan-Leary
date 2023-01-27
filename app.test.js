import { lengths } from './asd';

// eslint-disable-next-line no-undef
describe('Given findIndex function', () => {
  // eslint-disable-next-line no-undef
  test('When insert 3 it should show 3', () => {
    const arr = 3;
    const x = [1, 2, 3, 4];
    const expected = 4;
    const r = lengths(x, arr);
    // eslint-disable-next-line no-undef
    expect(r).toBe(expected);
  });
});
