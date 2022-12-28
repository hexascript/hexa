#!/usr/bin/env node

import figlet from "figlet"

exports.main = function() {
	figlet.text("M e l l o w J S", function(err, data) {
		console.log('------------------------------------------------------------\n' + data + '\n------------------------------------------------------------\n')
	})
}