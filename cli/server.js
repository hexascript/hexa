#!/usr/bin/env node

import http from "http"
import fs from "fs"
import path from "path"

export function main() {
	process.on('uncaughtException', err => console.error('uncaughtException', err))
	process.on('unhandledRejection', err => console.error('unhandledRejection', err))

	const publicFolder = `${process.cwd()}/src/`
	const port = "1337"

	const mediaTypes = {
		jpg: 'image/jpeg',
		html: 'text/html',
		js: 'text/javascript',
		css: 'text/css',
	}
	const server = http.createServer((request, response) => {
		if (request.url == "/") {
			request.url = "index.html"
		}
		console.log(`${request.method} ${request.url}`)
		const filepath = path.join(publicFolder, request.url)
		fs.readFile(filepath, (err, data) => {
			if (err) {
				response.statusCode = 404
				return response.end('File not found or you made an invalid request.')
			}

			let mediaType = 'text/html'
			const ext = path.extname(filepath)
			if (ext.length > 0 && mediaTypes.hasOwnProperty(ext.slice(1))) {
				mediaType = mediaTypes[ext.slice(1)]
			}

			response.setHeader('Content-Type', mediaType)
			response.end(data)
		})
	})

	server.on('clientError', function onClientError(err, socket) {
		console.log('clientError', err)
		socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
	})

	server.listen(port, '127.0.0.1', () => {
		console.log(`Server running on http://127.0.0.1:${port}\n👨‍🔧 Development server is online.`)
	})
}