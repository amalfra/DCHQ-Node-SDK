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
 *
 * Author: Amal Francis <amalfra@gmail.com>
 */
var qs = require("querystring");
var urlHelper = require("url");
var request = require("request");
var q = require("q");
var DchqResponse = require ("./dchq-response");

function DchqRequest(config) {
  if (config === null) {
    config = {};
  }

  this.endpoint = 'http://104.130.163.208:33901/api/1.0/';
  this.username = config.username;
  this.password = config.password;
}

DchqRequest.prototype.buildData = function(availableOptions, data) {
  var option, query, _i, _len;
  query = {};
  for (_i = 0, _len = availableOptions.length; _i < _len; _i++) {
    option = availableOptions[_i];
    if (data[option] !== void 0) {
      query[option] = data[option];
    }
  }
  return query;
};

DchqRequest.prototype.injectParams = function(path, params) {
	var fragment, fragments, key, _i, _len;
	if (params == null) {
		params = {};
	}
	path = "/" + path;
	fragments = path.match(/\/:[A-z0-9_-]+/g) || [];

	for (_i = 0, _len = fragments.length; _i < _len; _i++) {
		fragment = fragments[_i];
		key = fragment.replace("/:", "");
		if (params[key] === void 0) {
			throw new Error("Method requires '" + key + "' option.");
		}
		path = path.replace(fragment, "/" + params[key]);
	}

	return path.replace(/^\//, "");
};

DchqRequest.prototype.buildUrl = function(path, urlParams) {
  var url;
  if (urlParams == null) {
    urlParams = {};
  }

	path = this.injectParams(path, urlParams);
  url = this.endpoint + path.replace(/^\//, "");
	url += "?" + qs.stringify(urlParams);
  url = url.replace("/?", "?");

  return url;
};

DchqRequest.prototype.buildRequestConfig = function(resource, data, urlParams) {
  var config, reqData, auth;
  config = {};
  config.method = resource.method;
  reqData = this.buildData(resource.options || [], data || {});
  config.url = this.buildUrl(resource.path, urlParams);
  auth = "Basic " + new Buffer(this.username + ":" + this.password).toString("base64");
  config.headers = {
    'Authorization': auth,
    'content-type' : 'application/json'
  };
  config.body = JSON.stringify(reqData);

  return config;
};

DchqRequest.prototype.process = function(resource, opts, urlParams) {
  if (urlParams == null) {
    urlParams = {};
  }
  var config = this.buildRequestConfig(resource, opts, urlParams);
  var deferred = q.defer();

  request(config, (function(_this) {
    return function(err, res) {
      if (err) {
        return deferred.reject(err);
      }
      return _this.handleResponse(deferred)(res);
    };
  })(this));

  return deferred.promise;
};

DchqRequest.prototype.handleResponse = function(deferred) {
  return function(res) {
    var response = new DchqResponse(res);

    if (response.success()) {
      return deferred.resolve(response.body);
    }
    if (response.clientError()) {
      return deferred.reject(response.clientError());
    }
    if (response.serverError()) {
      return deferred.reject(response.serverError());
    }
    return null;
  };
};

module.exports = DchqRequest;
