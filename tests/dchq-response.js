/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
 
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
