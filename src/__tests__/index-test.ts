import * as SyntelaBuzz from '../index';

test('exports', () => {
  expect(SyntelaBuzz.Dashboard).toBeDefined();
  expect(SyntelaBuzz.Meeting).toBeDefined();
  expect(SyntelaBuzz.Livestream).toBeDefined();
});
