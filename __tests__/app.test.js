const { greet, nicolle, messaggiopersonalizzato } = require('../app');

test('greets the user by name', () => {
  expect(greet('DevOps')).toBe('Hello');
});

test('cacazione', () => {
  expect(nicolle()).toBe('Cacati addosso!');
});

test('restituisce un messaggio personalizzato', () => {
  expect(messaggiopersonalizzato()).toBe('questo è un messaggio personalizzato modificato');
});
