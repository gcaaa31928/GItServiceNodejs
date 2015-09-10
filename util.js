'use strict';

var util = function util() {};

util.prototype.isFunction = function isFunction(fn) {
    return typeof fn === 'function';
};

exports = module.exports = new util();