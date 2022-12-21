#!/usr/bin/env node

const yargs = require('yargs/yargs')
const figlet = require("figlet")
const {
  hideBin
} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const server = require("./server.js")
const create = require("./create.js")

figlet.text("M e l l o w J S", function (err, data){
  console.log('------------------------------------------------------------\n' + data + '\n------------------------------------------------------------\n')
 })
if (argv.server != null) {
  server.main();
}

if (argv.create != null) {
  create.main();
}