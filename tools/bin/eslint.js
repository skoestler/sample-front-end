#!/usr/bin/env node
const {spawnSync} = require('child_process');
const path = require('path');

const [nodeExec, _thisFile, arg] = process.argv;

const config = require.resolve(path.join('..', 'eslint.config.json'));

spawnSync(
  nodeExec,
  [
    require.resolve('eslint/bin/eslint'),
    path.join(process.cwd(), arg),
    '-c',
    config
  ],
  {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  }
);
