#!/usr/bin/env node

import yargs from "yargs/yargs"
import { hideBin } from "yargs/helpers"
import fs from "fs"
import axios from "axios"
const argv = yargs(hideBin(process.argv)).argv

exports.main = function () {
	let packages = argv.install;
	packages = packages.replace("/", "-")
	if (packages.split('.').pop() == "js") {
		axios.get(`https://raw.githubusercontent.com/mellow-js/repository/main/javascript/${argv.install}`).then(resp => {
			const data = resp.data;
			fs.writeFile(`public/js/${packages}`, data, (err) => {
				if (err) console.log(err)
				console.log(`[+] Downloading ${argv.install}`)
				fs.readFile("index.html", (err, buf) => {
					let data = buf.toString();
					data = data.replace('<!-- Add Packages here -->', `<script src="public/js/` + packages + `"></script>
  <!-- Add Packages here -->`)
					fs.writeFile("index.html", data, (err) => {
						if (err) console.log(err)
						console.log(`[+] Successfully Add ${argv.install} to your project.`)
					})
				})
			})
		}).catch(({response}) => {
			if (response.status == 404) {
				console.log(`[-] ERROR: Package ${argv.install} not found.`)
			}
		})
	}
	if (packages.split('.').pop() == "css") {
		axios.get(`https://raw.githubusercontent.com/mellow-js/repository/main/css/${argv.install}`).then(resp => {
			const data = resp.data;
			fs.writeFile(`public/css/${packages}`, data, (err) => {
				if (err) console.log(err)
				console.log(`[+] Downloading ${argv.install}`)
				fs.readFile("index.html", (err, buf) => {
					let data = buf.toString();
					data = data.replace('<!-- Add Packages here -->', `<link rel="stylesheet"href="public/css/` + packages + `"/>
  <!-- Add Packages here -->`)
					fs.writeFile("index.html", data, (err) => {
						if (err) console.log(err)
						console.log(`[+] Successfully Add ${argv.install} to your project.`)
					})
				})
			})
		}).catch(({response}) => {
			if (response.status == 404) {
				console.log(`[-] ERROR: Package ${argv.install} not found.`)
			}
		})
	}
}