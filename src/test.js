const assert = require('assert');
const { add, subtract } = require('./utils.js');

assert.strictEqual(add(1, 1), 2, '1 + 1 should be equal to 2');
assert.strictEqual(subtract(2, 1), 1, '2 - 1 should be equal to 1');
console.log('Tests passed!');