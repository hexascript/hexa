#!/usr/bin/env node
import yargs from "yargs/yargs"
import { hideBin } from "yargs/helpers"
import server from "./server.js"
import create from "./create.js"
import packages from "./packages.js"
import build from "./build.js"
const argv = yargs(hideBin(process.argv)).argv

if (argv.server != null) {
  server.main()
}

if (argv.create != null) {
  create.main(argv.create)
}

if (argv.install != null) {
  packages.main(argv.install)
}

if (argv.build == "android") {
  build.android()
}

if (argv.build == "windows") {
  build.windows()
}