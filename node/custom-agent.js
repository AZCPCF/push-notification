const http = require('http');
const https = require('https');
const { setCustomDNSServers } = require('./custon-dns-provider');

// Function to create agents
function createCustomAgents(dnsServers) {
  // Set the DNS servers
  setCustomDNSServers(dnsServers);

  // Create and return custom agents
  return {
    httpAgent: new http.Agent({ keepAlive: true }),
    httpsAgent: new https.Agent({ keepAlive: true })
  };
}

module.exports = { createCustomAgents };
