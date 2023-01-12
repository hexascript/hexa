#!/usr/bin/env node
import fs from "fs"
import axios from "axios"

exports.main = function (packages) {
  packagesName = packages
	packages = packages.replace("/", "-")
	if (packages.split('.').pop() == "js") {
		axios.get(`https://raw.githubusercontent.com/hexascript/repository/main/packages/${packagesName}`).then(resp => {
			const data = resp.data;
			fs.writeFile(`public/js/${packages}`, data, (err) => {
				if (err) console.log(err)
				console.log(`[+] Downloading ${packagesName}`)
			})
		}).catch(({response}) => {
			if (response.status == 404) {
				console.log(`[-] ERROR: Package ${packagesName} not found.`)
			}
		})
	}
}