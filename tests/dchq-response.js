var expect = require('chai').expect;
var DchqResponse = require("../lib/dchq-response");

describe('DchqResponse', function () {
  describe('success', function () {
    it('returns success', function () {
      var resp = new DchqResponse({'statusCode': 200}).success();
      expect(resp).to.equal(true);
    });
  });

	describe('not success', function () {
    it('should not return success', function () {
      var resp = new DchqResponse({'statusCode': 404}).success();
      expect(resp).to.equal(false);
    });
  });

  describe('clientError', function () {
    it('returns clientError', function () {
			var resp = new DchqResponse({'statusCode': 404}).clientError().toString();
      expect(resp).to.have.string('HTTP client error 404');
    });
  });

  describe('clientError', function () {
    it('should not return clientError', function () {
			var resp = new DchqResponse({'statusCode': 200}).clientError();
      expect(resp).to.be.an('undefined');
    });
  });

	describe('serverError', function () {
    it('returns serverError', function () {
			var resp = new DchqResponse({'statusCode': 500}).serverError().toString();
      expect(resp).to.have.string('HTTP server error 500');
    });
  });

  describe('serverError', function () {
    it('should not return serverError', function () {
			var resp = new DchqResponse({'statusCode': 200}).serverError();
      expect(resp).to.be.an('undefined');
    });
  });
});
