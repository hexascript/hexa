#!/usr/bin/env node

import yargs from "yargs/yargs"
import { hideBin } from "yargs/helpers"
import server from "./server.js"
import create from "./create.js"
import packages from "./packages.js"
import build from "./build.js"
import ascii from "./ascii.js"

const argv = yargs(hideBin(process.argv)).argv

if (argv.server != null) {
	ascii.main()
	server.main()
}

if (argv.create != null) {
	ascii.main()
	create.main()
}

if (argv.install != null) {
	ascii.main()
	packages.main()
}

if (argv.build != null) {
	ascii.main()
	build.main()
}