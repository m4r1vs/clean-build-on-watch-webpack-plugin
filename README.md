# WebPack Clean Build-Folder on Watch
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