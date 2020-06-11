#!/usr/bin/env node
const { spawnSync } = require('child_process');
const path = require('path');

spawnSync(
  path.join(__dirname, '..', 'node_modules', '.bin', 'react-scripts'),
  process.argv.slice(2),
  { stdio: 'inherit' }
);
