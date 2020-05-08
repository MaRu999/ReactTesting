module.exports = {
    "src_folders": [
        "src/nightwatch/" // Where you are storing your Nightwatch e2e/UAT tests
    ],
    "output_folder": "./reports",   // reports (test outcome) output by nightwatch
    "webdriver": {
        "start_process": true,
        "server_path": "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
        "port": 9515
    },
    "test_settings": {
        "launch_url" : "http://localhost:9000",
        "default": {
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    }
}