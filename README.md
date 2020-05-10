# README

## Regarding the index.html
The index.html in the dist-folder is the "true" index.

## Scripts
The script for starting the webpack-dev-server is called "server" and the script to start the nightwatch-tests is called "browsertest".
For running the jest tests, the "test" script can be used. The "coverage" script will show the jest test-coverage. 
All scripts can be run with the npm run command (e.g. "npm run server").

## Starting the nightwatch test
The nightwatch tests aim at the webpack-dev-server, so this needs to be started first for it to function.
To this end, the "servertest" script is supplied. It uses the npm concurrently package to start the webpack-dev-server and nightwatch in parallel.
Please note that this script will always end with an error. This is because the end of the nightwatch script also kills the server process (because of the -k flag).
This needs to be done because otherwise the server will keep running in the background, causing all other attempts at executing this script to fail because the port is blocked.
One can see (in the console) whether the nigthwatch test itself has produced an error: the passed assertions are logged normally, and "npm run browsertest exited with code 0" can be seen if the test passed without fails.
Of course, the webpack-dev-server can also be started manually and then the nightwatch script can be executed (one just needs to open two terminals for this, as the dev-server blocks its terminal while it is running).

## Coverage
The jest coverage is 100%.
There are tests for every component and the ContentLoader. App.test.tsx also contains an "integration test" of sorts, where App is completely mounted, buttons are clicked in the Pagination component and whether the list exists is checked for the List component.
A snapshot of the App component with the render command is also created in App.test.tsx.
Please note that when using the coverage script, jest will complain about the obsolete snapshot. This can be "fixed" by running the script with the parameters -- -u, which will update the snapshot.
If there were no changes, this is not necessary.
If no snapshot exists, the first run of the tests will create one against which subsequent runs will be tested.
When running the test script, the snapshot should pass (unless something was changed).
The nightwatch test clicks through all pages and also tries to click previous when already on the first page/next when already on the last page.