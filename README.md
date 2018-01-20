<h1 align="center">
  Webpack clean on watch 🗑️
</h1>
<div align="center">
	<a href="https://www.npmjs.com/package/clean-build-on-watch-webpack-plugin">
		<img src="https://img.shields.io/npm/v/clean-build-on-watch-webpack-plugin.svg?style=for-the-badge" alt="NPM Version" />
	</a>
	<a href="https://www.npmjs.com/package/clean-build-on-watch-webpack-plugin">
		<img src="https://img.shields.io/npm/dm/clean-build-on-watch-webpack-plugin.svg?style=for-the-badge" alt="NPM Downloads" />
	</a>
	<a href="https://oss.ninja/mit/m4r1vs">
		<img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT" />
	</a><br />
  <strong>This plugin for webpack removes all unused js/css/... files on build and also working with ´--watch´ enabled.</strong>
</div>
<div align="center">
  <sub>&lt;coded/&gt; with ❤︎ and ☕ by <a href="https://niveri.me">Marius Niveri</a><br />
</div>
<br />
<br />

## Getting started 🚀
```sh
# install via npm:
npm i clean-build-on-watch-webpack-plugin --save-dev
# or use yarn:
yarn add clean-build-on-watch-webpack-plugin -D
```
```javascript
const CleanBuildPlugin = require('clean-build-on-watch-webpack-plugin')

plugins: [
	new CleanBuildPlugin() // all you need :)
]
```