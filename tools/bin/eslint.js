#!/usr/bin/env node
const { spawnSync } = require('child_process');
const path = require('path');

spawnSync(
  path.join(__dirname, '..', 'node_modules', '.bin', 'eslint'),
  process.argv.slice(2).concat([
    '--config',
    require.resolve(path.join('..', 'eslint.config.json')),
    '--resolve-plugins-relative-to',
    path.join(__dirname, '..')
  ]),
  { stdio: 'inherit' }
);
