const { pause } = require("codeceptjs");

Feature('search');

Scenario('Testing Automation Demo', ({ I }) => {
  I.amOnPage('http://the-internet.herokuapp.com');
  I.see('Welcome to the-internet');
  I.click('Dropdown', '#content > ul > li:nth-child(11) > a');
  I.see('Dropdown List');
  I.click('Please select an option', '#dropdown');
  I.click('Option 2', 'option');
});
