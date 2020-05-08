# README

## Regarding the index.html
The index.html in the dist-folder is the "true" index.

## Saving Language Option 
localStorage is used to save the chosen language option (de, en or fr) so it is still remembered on a reload.
By using localStorage, the chosen option will be remembered even when the browser is closed and restarted.
If that is not desired, localStorage can be swapped out with sessionStorage.

## Translations
The translations for the different languages supported were placed in their own json-files.
This works well, but needs the two options 

<code>"resolveJsonModule": true
"esModuleInterop": true </code>

to be added to the tsconfig.json file under compiler options, as importing from json files is disabled by default in typescript.

## Starting on server
As desired, a server running the react-app can be started by using the server-build script:

<code>npm run server</code>.
 
 
This will start a webpack-dev-server on the port 9000 of localhost.
If the port needs to be changed for whatever reason, this can be done in the webpack.config.js file, under the port option of devServer.

## Nan prevention
Emtpying out one of the number-input fields (by deleting everything in it, for example) will lead to the value being NaN. This will lead to texts like "I have NaN dogs". 
To prevent this, NaN is automatically replaced by 0 in the method that is called in onChange. Emptying out the input box will always leave a zero in there because of this.

## Floating point numbers
In the numbers tab, it is possible to enter floating-point numbers (it's not possible in the Texts tab, since having 1.2 dogs does not make much sense).
Please note that, regardless of language selected, the decimal points always start with a ","  in the input box (e.g. 10000000,1234 with 1234 being the numbers behind the decimal point).

## Known issues
It looks like the kilobyte unit is not supported in the Firefox browser for whatever reason (that number will simply not show a unit at all).
It is displayed without problem in Chrome.