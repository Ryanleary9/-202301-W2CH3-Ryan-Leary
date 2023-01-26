import { findIndex } from './asd';

// eslint-disable-next-line no-undef
describe('Given findIndex function', () => {
  // eslint-disable-next-line no-undef
  describe('When the inset the number they are looking for', () => {
    // eslint-disable-next-line no-undef
    test('When insert 3 it should show 3', () => {
      const a = 3;
      const b = [1, 2, 3, 4];
      const c = 0;
      const index = 2;
      const expected = 2;
      const r = findIndex(a, b, c, index);
      // eslint-disable-next-line no-undef
      expect(r).toBe(expected);
    });
  });
});
