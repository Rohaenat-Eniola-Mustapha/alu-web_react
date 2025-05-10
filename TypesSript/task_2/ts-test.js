#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');
const tscPath = path.join(__dirname, 'node_modules', 'typescript', 'bin', 'tsc');
try {
  execSync(`${tscPath} js/main.ts`, { stdio: 'inherit' });
} catch (error) {
  console.error('Error compiling TypeScript:', error.message);
  process.exit(1);
}
