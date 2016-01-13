var expect = require('chai').expect;
var DchqRequest = require("../lib/dchq-request");
var q = require("q");

describe('DchqRequest', function () {
	var req = new DchqRequest({'username': 'test', 'password': 'testpassword'});

  describe('create DchqRequest', function () {
    it('init DchqRequest', function () {    
			expect(req.endpoint).to.equal('http://104.130.163.208:33901/api/1.0/');
			expect(req.username).to.equal('test');
			expect(req.password).to.equal('testpassword');
    });
  });

  describe('buildData', function () {
    it('with same options', function () {
      var ret = req.buildData(['param1', 'param2'], {'param1': 'val1', 'param2': 'val2'});    
			expect(ret).to.deep.equal({'param1': 'val1', 'param2': 'val2'});
    });

		it('with not existing option', function () {
      var ret = req.buildData(['param1', 'param2'], {'param1': 'val1', 'param3': 'val2'});    
			expect(ret).to.deep.equal({'param1': 'val1'});
    });
  });

	describe('injectParams', function () {
		it('with all params', function () {
			var ret = req.injectParams('\/abcd\/:id', {'id': 'val1'});  
			expect(ret).to.equal('/abcd/val1');
		});

		it('with missing params', function () {
			expect(function(){
				req.injectParams('\/abcd\/:id', {});			
			}).to.throw(Error, "Method requires 'id' option");
		});

		it('path with no params', function () {
			var ret = req.injectParams('\/abcd\/dcba', {'id': 'val1'});  
			expect(ret).to.equal('/abcd/dcba');
		});
	});

	describe('buildUrl', function () {
		it('with all params', function () {
			var ret = req.buildUrl('\/abcd', {'id': 'val1'});  
			expect(ret).to.equal('http://104.130.163.208:33901/api/1.0/abcd?id=val1');
		});

		it('without params', function () {
			var ret = req.buildUrl('\/abcd');  
			expect(ret).to.equal('http://104.130.163.208:33901/api/1.0/abcd?');
		});
	});

	describe('buildRequestConfig', function () {
		it('without options and data', function () {
			var ret = req.buildRequestConfig({
    		"path": "\/abcd",
    		"method": "GET"
  		});  
			expect(ret).to.deep.equal({
				method: 'GET',
  			url: 'http://104.130.163.208:33901/api/1.0/abcd?',
  			headers: { 'Authorization': 'Basic dGVzdDp0ZXN0cGFzc3dvcmQ=',
     								'content-type': 'application/json' },
  			body: '{}' 
		  });
		});
		
		it('with options', function () {
			var ret = req.buildRequestConfig({
    		"path": "\/abcd\/:id",
    		"method": "GET",
				"options": [
					"id"
				]
  		}, null, {'id': 'a'});
			expect(ret).to.deep.equal({
				method: 'GET',
  			url: 'http://104.130.163.208:33901/api/1.0/abcd/a?id=a',
  			headers: { 'Authorization': 'Basic dGVzdDp0ZXN0cGFzc3dvcmQ=',
     								'content-type': 'application/json' },
  			body: '{}' 
		  });
		});

		it('with data', function () {
			var ret = req.buildRequestConfig({
    		"path": "\/abcd",
    		"method": "GET",
				"options": [
					"id"
				]
  		}, {'id': 'a'});
			expect(ret).to.deep.equal({
				method: 'GET',
  			url: 'http://104.130.163.208:33901/api/1.0/abcd?',
  			headers: { 'Authorization': 'Basic dGVzdDp0ZXN0cGFzc3dvcmQ=',
     								'content-type': 'application/json' },
  			body: '{"id":"a"}' 
		  });
		});

		it('with options and data', function () {
			var ret = req.buildRequestConfig({
    		"path": "\/abcd\/:id",
    		"method": "GET",
				"options": [
					"id",
					"param1"
				]
  		}, {'param1': 'val1'}, {'id': 'a'});
			expect(ret).to.deep.equal({
				method: 'GET',
  			url: 'http://104.130.163.208:33901/api/1.0/abcd/a?id=a',
  			headers: { 'Authorization': 'Basic dGVzdDp0ZXN0cGFzc3dvcmQ=',
     								'content-type': 'application/json' },
  			body: '{\"param1\":\"val1\"}' 
		  });
		});
	});
});
