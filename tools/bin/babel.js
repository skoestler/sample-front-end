#!/usr/bin/env node
const {spawnSync} = require('child_process');
const path = require('path');

const [nodeRuntime, nodeScript, ...args] = process.argv;

const config = require.resolve(path.join('..', 'babel.config.json'));

spawnSync(
  nodeRuntime,
  [require.resolve('@babel/cli/bin/babel'), ...args, '--config-file', config],
  { stdio: 'inherit' }
);
