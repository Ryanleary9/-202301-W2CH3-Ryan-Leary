import { findIndex } from './asd';

describe('Given findIndex function', () => {
  describe('When the inset the number they are looking for', () => {
    test('When insert 3 it should show 3', () => {
      const a = 3;
      const b = [1, 2, 3, 4];
      const c = 0;
      const index = 2;
      const expected = 2;
      const r = findIndex(a, b, c, index);
      expect(r).toBe(expected);
    });
  });
});
