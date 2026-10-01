import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greet, farewell } from '../src/greet.js';

test('greet says hello', () => {
  assert.equal(greet('Ada'), 'Hello, Ada!');
});

test('farewell says goodbye', () => {
  assert.equal(farewell('Ada'), 'Goodbye, Ada!');
});
