var expect = require('expect');
var {generateMessage} = require('./message.js');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'jon';
    var text = 'Sample text for generateMessage';
    var message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    // expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });
});