
const dns = require('dns');

function setCustomDNSServers(dnsServers) {
  dns.setServers(dnsServers);
}

module.exports = { setCustomDNSServers };
