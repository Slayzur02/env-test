#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

require('yargs')
  .scriptName("env-test")
	.command('store-env', 'stores env', function () {
		const envData = `API_KEY=veryimportantapikey`
		const target = path.resolve(__dirname, "..", ".env")
		fs.writeFileSync(target, envData)
	})
	.command('get-env', 'gets env', function () {
		require('dotenv').config()
		console.log(process.env.API_KEY)
	})
  .help()
  .argv