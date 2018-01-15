<div align="center">
	<h1>WebPack Clean Build-Folder on Watch</h1>
  <a href="https://www.npmjs.com/package/clean-build-on-watch-webpack-plugin">
    <img src="https://img.shields.io/npm/v/clean-build-on-watch-webpack-plugin.svg?style=for-the-badge" alt="version" />
  </a>
  <a href="https://www.npmjs.com/package/clean-build-on-watch-webpack-plugin">
    <img src="https://img.shields.io/npm/dm/clean-build-on-watch-webpack-plugin.svg?style=for-the-badge" alt="version" />
  </a>
  <a href="https://oss.ninja/mit/m4r1vs">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License: MIT" />
  </a>
</div>

This WebPack plugin removes old files from the build folder on each rebuild caused by `--watch`. To make use of this tiny plugin just install the plugin and then add it to your `webpack.config.js`:

```sh
# via npm:
npm i clean-build-on-watch-webpack-plugin --dev
# or use yarn:
yarn add clean-build-on-watch-webpack-plugin -D
```
```javascript
const CleanBuildOnWatchPlugin = require('clean-build-on-watch-webpack-plugin')

plugins: [
	new CleanBuildOnWatchPlugin() // all you need ;)
]
```