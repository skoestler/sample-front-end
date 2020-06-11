#!/usr/bin/env node
const { spawnSync } = require('child_process');
const path = require('path');

spawnSync(
  path.join(__dirname, '..', 'node_modules', '.bin', 'babel'),
  process.argv.slice(2).concat([
    '--config-file',
    path.join(__dirname, '..', 'babel.config.json')
  ]),
  { stdio: 'inherit' }
);
