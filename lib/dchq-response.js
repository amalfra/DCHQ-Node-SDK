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
