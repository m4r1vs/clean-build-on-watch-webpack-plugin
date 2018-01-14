require('colors')
const path = require('path')
const fs = require('fs')


const logger = {

	/**
	 * Log some stuff
	 * @param {*} log what to be logged
	 */
	log(log) {
		if (typeof log === 'string') console.log('[C.B.O.W.] '.magenta + 'Log: '.cyan + log.cyan)
		else console.log('[ATTACH-DEV] '.magenta + 'Log:\n'.cyan, log)
	}
}

/**
 * A function that walks through folders and their sub-folders and triggers a function for every file
 * @param {string} dir The root folder in which we start walking
 * @param {function} callback the function that will be triggered for every file and sub-file
 */
const walk = (dir, callback) => {
	fs.readdir(dir, (err, files) => { // get every file in base dir
		if (err) throw err // if something goes wrong
		files.forEach(item => { // for every item in the directory we're currently in
			const filepath = path.join(dir, item)
			if (fs.lstatSync(filepath).isDirectory()) walk(filepath, callback) // if the item is a folder, walk through that one
			else callback(filepath) // if item is a file (not a folder) trigger callback()
		})
	})
}

/**
 * @constructor
 * @param {Object} options options passing to plugin
 * @param {Boolean} options.disable disable plugin manually
 */
function CleanBuildOnWatchPlugin(options) {
	this.disable = (options && options.disable)
	this.disable = (process.env.NODE_ENV === 'production')
}

CleanBuildOnWatchPlugin.prototype.apply = function (compiler) {

	let isWatching = false

	compiler.plugin('watch-run', (compiler, next) => {
		isWatching = true
		next()
	})

	compiler.plugin('done', stats => {

		if (!this.disable && isWatching) {
			const newlyCreatedAssets = stats.compilation.assets
			const buildDir = compiler.options.output.path

			/**
			 * This function checks if the file is part of the last build, if not, it gets deleted
			 * @param {string} file The file that should be checked
			 */
			const deleteFilesIfOld = file => {
				if (!newlyCreatedAssets[file.replace(buildDir + '/', '')]) {
					logger.log('removed old file: '.cyan + file.replace(buildDir + '/', '').magenta)
					fs.unlinkSync(file)
				}
			}

			// walk through build directory and call deleteFilesIfOld() on every file in folders and sub-folders
			walk(buildDir, deleteFilesIfOld)
		}

	})
}

module.exports = CleanBuildOnWatchPlugin
