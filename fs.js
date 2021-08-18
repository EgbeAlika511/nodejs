const { readFileSync } = require('fs');

const home = readFileSync('./index.html', 'utf8');
const welcome = readFileSync('./route_pages/welcome.txt', 'utf8');
const about = readFileSync('./route_pages/about.txt', 'utf8');
const contact = readFileSync('./route_pages/contact.txt', 'utf8');

