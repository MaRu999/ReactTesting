# README

## Regarding the index.html
The index.html in the dist-folder is the "true" index.

## Scripts
The script for starting the webpack-dev-server is called "server" and the script to start the nightwatch-tests is called "browsertest".
For running the jest tests, the "test" script can be used. The "coverage" script will show the jest test-coverage. 
All scripts can be run with the npm run command (e.g. "npm run server").

## Starting the nightwatch test
The nightwatch tests aim at the webpack-dev-server, so this needs to be started first for it to function.
Because of that, a bat-file is supplied (nightwatch_with_webdev.bat). It will start the webpack-dev-server, wait a few seconds and then run the nightwatch script.
The bat-file also uses the scripts defined in the package.json (server and browsertest).
Of course, the webpack-dev-server can also be started manually and then the nightwatch script can be executed (one just needs to open two terminals for this, as the dev-server blocks its terminal).

## Coverage
The jest coverage is 100%.
The nightwatch test clicks through all pages and also tries to click previous when already on the first page/next when already on the last page.