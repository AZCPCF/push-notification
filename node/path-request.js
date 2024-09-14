const request = require('request');
const { createCustomAgents } = require('./custom-agent.js');

const dnsServers = ['10.202.10.202', '10.202.10.102'];

// dns addresses

// Create custom agents
const { httpAgent, httpsAgent } = createCustomAgents(dnsServers);

// Patch the request library to use custom agents
const originalRequest = request.defaults;
request.defaults = function (options) {
  options.agent = options.uri.startsWith('https') ? httpsAgent : httpAgent;
  return originalRequest.call(this, options);
};
