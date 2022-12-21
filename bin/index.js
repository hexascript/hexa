#!/usr/bin/env node

const yargs = require('yargs/yargs')
const {
  hideBin
} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const server = require("./server.js");
const create = require("./create.js");

if (argv.server != null) {
  server.main();
}

if (argv.create != null) {
  create.main();
}