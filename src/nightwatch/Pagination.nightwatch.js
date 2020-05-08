module.exports = {

    'Step one: open page and check for elements': function (browser) {
        browser
            .url('localhost:9000')
            .waitForElementVisible('body')
            .assert.titleContains('Assignment 10')
            .assert.visible('#list')
            .assert.containsText('#point', 'Test 1')
            .assert.visible('#pageNr')
            .assert.containsText('#pageNr', '1/10')
            .assert.visible('#prev')
            .assert.visible('#next');
    },

    'Step two: click next': function (browser) {
        browser
            .click('#next')
            .assert.containsText('#point', 'Test 11')
            .assert.containsText('#pageNr', '2/10');
    },

    'Step three: click previous': function (browser) {
        browser
            .click('#prev')
            .assert.containsText('#point', 'Test 1')
            .assert.containsText('#pageNr', '1/10');
    },

    'Step four: click previous (already on first page)': function (browser) {
        browser
            .click('#prev')
            .assert.containsText('#point', 'Test 1')
            .assert.containsText('#pageNr', '1/10');
    },

    'Step five: click next 9 times': function (browser) {
        browser
            .click('#next')
            .assert.containsText('#point', 'Test 11')
            .assert.containsText('#pageNr', '2/10')
            .click('#next')
            .assert.containsText('#point', 'Test 21')
            .assert.containsText('#pageNr', '3/10')
            .click('#next')
            .assert.containsText('#point', 'Test 31')
            .assert.containsText('#pageNr', '4/10')
            .click('#next')
            .assert.containsText('#point', 'Test 41')
            .assert.containsText('#pageNr', '5/10')
            .click('#next')
            .assert.containsText('#point', 'Test 51')
            .assert.containsText('#pageNr', '6/10')
            .click('#next')
            .assert.containsText('#point', 'Test 61')
            .assert.containsText('#pageNr', '7/10')
            .click('#next')
            .assert.containsText('#point', 'Test 71')
            .assert.containsText('#pageNr', '8/10')
            .click('#next')
            .assert.containsText('#point', 'Test 81')
            .assert.containsText('#pageNr', '9/10')
            .click('#next')
            .assert.containsText('#point', 'Test 91')
            .assert.containsText('#pageNr', '10/10');
    },

    'Step six: click next (already on last page)': function (browser) {
        browser
            .click('#next')
            .assert.containsText('#point', 'Test 91')
            .assert.containsText('#pageNr', '10/10')
    },

    'Step seven: click prev once more and end': function (browser) {
        browser
            .click('#prev')
            .assert.containsText('#point', 'Test 81')
            .assert.containsText('#pageNr', '9/10')
            .end();
    }
}
;