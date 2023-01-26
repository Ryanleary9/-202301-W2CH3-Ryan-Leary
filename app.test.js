import { lengths, findIndex } from './asd';

// eslint-disable-next-line no-undef
describe('Given findIndex function', () => {
  // eslint-disable-next-line no-undef
  test('When insert 3 it should show 3', () => {
    const a = 2;
    const b = 'hola';
    const expected = 'o';
    const r = findIndex(a, b);
    // eslint-disable-next-line no-undef
    expect(r).toBe(expected);
  });
});
