#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const server = require("./server.js")
const create = require("./create.js")
const packages = require("./packages.js")
const build = require("./build.js")
const ascii = require("./ascii.js")

if (argv.server != null) {
  ascii.main();
  server.main();
}

if (argv.create != null) {
  ascii.main();
  create.main();
}

if (argv.install != null) {
  ascii.main();
  packages.main();
}

if (argv.build != null) {
  ascii.main();
  build.main();
}