import ErrorRepository from '../errorrepository';

test.each([
  [100, 'Error 100'],
  [200, 'Error 200'],
  [300, 'Unknown error'],
])('test for code %s: %s', (code, result) => {
  expect(ErrorRepository.translate(code)).toBe(result);
});
