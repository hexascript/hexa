#!/usr/bin/env node

const figlet = require("figlet")

exports.main = function() {
	figlet.text("M e l l o w J S", function(err, data) {
		console.log('------------------------------------------------------------\n' + data + '\n------------------------------------------------------------\n')
	})
}