#!/usr/bin/env node

const fs = require('fs');
const content = fs.readFileSync(__dirname + '/index.txt', { encoding: 'utf8' }).trim();

fs.writeFileSync(__dirname + '/index.json', JSON.stringify(content.split('\n'), null, 4), { encoding: 'utf8' });
