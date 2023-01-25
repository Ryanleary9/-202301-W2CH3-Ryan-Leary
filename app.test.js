import { lista } from './app.js';

describe('Given index function', () => {
  describe('When the inset the number they are looking for', () => {
    test('When insert 3 it should show 3', () => {
      const a = 3;
      const expected = 3;
      const r = lista(a);
      expect(r).toBe(expected);
    });
  });
});
