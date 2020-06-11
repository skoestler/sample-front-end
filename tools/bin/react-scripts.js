#!/usr/bin/env node
const {spawnSync} = require('child_process');

const [nodeExec, _thisFile, ...args] = process.argv;

const result = spawnSync(
  nodeExec,
  [require.resolve('react-scripts/bin/react-scripts.js'), ...args],
  { stdio: 'inherit' }
);
