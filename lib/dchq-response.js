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
function DchqResponse(res) {
  this.body = res.body;
  this.statusCode = res.statusCode;
}

DchqResponse.prototype.success = function() {
  return this.statusCode >= 200 && this.statusCode <= 299;
};

DchqResponse.prototype.clientError = function() {
  if (this.statusCode >= 400 && this.statusCode <= 499) {
    return new Error("HTTP client error " + this.statusCode);
  }
};

DchqResponse.prototype.serverError = function() {
  if (this.statusCode >= 500 && this.statusCode <= 599) {
    return new Error("HTTP server error " + this.statusCode);
  }
};

module.exports = DchqResponse;
