var assert = require("assert");
var logSuppress = require('../lib/log-suppress.js')


describe('Log Suppress Tests', function() {

  it('should be an Object', function() {
    assert.equal(typeof logSuppress, 'object');
  });

  it('should have an init Method', function() {
    assert.equal(typeof logSuppress.init, 'function');
  });

});
