const request = require('supertest');
const { app, server } = require('../server'); // ✅ Destructure both
const assert = require('assert');

describe('loading express', function () {
  after(function (done) {
    // ✅ Close the server after tests
    server.close(done);
  });

  it('responds to /', function (done) {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('404 everything else', function (done) {
    request(app)
      .get('/foo/bar')
      .expect(404, done);
  });
});
