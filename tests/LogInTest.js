import {ClientFunction} from 'testcafe';
import HomePage from '../pages/HomePage old';
import LogInEmailPage from '../pages/LogInEmailPage old';
import LogInPasswordPage from '../pages/LogInPasswordPage old';
const dataSet = require('../data/data.json');
const URL = 'https://www.amazon.com/';
//const getURL = ClientFunction(() => window.location.href);
fixture ("OrderProduct")
    .page (URL);
dataSet.forEach( data => {
test('Login to Amazon Test', async t => {
    await t
    //.expect(getURL).eql(URL)
    .takeScreenshot()
    .maximizeWindow()
    .wait(2000)
    .click(HomePage.signin)
     .typeText (LogInEmailPage.EmailAddress , data.EmailAddress)
     .takeScreenshot('1.png')
        .wait(2000)
        .click(LogInEmailPage.Continue)
        .wait(2000)
        .typeText (LogInPasswordPage.Password ,data.Password)
        .takeScreenshot('2.png')
        .wait(2000)
        .click(LogInPasswordPage.SignIn)

}) });
//testcafe chrome tests/LogInTest.js -s takeOnFails=true -e
//new modification