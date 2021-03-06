const Delegator = require('dom-delegator');
const _value = require('observ');
const _struct = require('observ-struct');
const store = require('lib/store');
const assign = require('lib/assign');

function channels(funcs, context) {
  return store(funcs, (acc, fn, name) =>
    acc[name] = Delegator.allocateHandle(fn.bind(null, context)));
}

function state(obj, ...extent) {
  assign(obj, extent);
  const $channels = obj.channels;

  if ($channels) {
    obj.channels = _value(null);
  }

  const observ = _struct(obj);
  if ($channels) {
    observ.channels.set(channels($channels, observ));
  }

  return observ;
}

module.exports = state;
