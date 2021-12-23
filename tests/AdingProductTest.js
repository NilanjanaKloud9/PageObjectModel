import {ClientFunction} from 'testcafe';
import HomePage from '../pages/HomePage old';
import LogInEmailPage from '../pages/LogInEmailPage old';
import LogInPasswordPage from '../pages/LogInPasswordPage old';
import ProductSearchPage from '../pages/ProductSearchPage';
import AddproductPage from '../pages/AddproductPage';
import CartPage from '../pages/CartPage';
const dataSet = require('../data/data.json');
//import LogOutpage from '../pages/LogOutpage';

//const URL = 'https://www.amazon.com/';
//const getURL = ClientFunction(() => window.location.href);
//fixture ("OrderProduct")
   // .page (URL);
    fixture `OrderProduct`
    .page `http://localhost:8080`;
dataSet.forEach( data => {
test('Adding Product Test', async t => {
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
        .typeText (LogInPasswordPage.Password , data.Password)
        .takeScreenshot('2.png')
        .wait(2000)
        .click(LogInPasswordPage.SignIn)
        .wait(3000)
        .typeText(ProductSearchPage.searchbar,'watch for women')
        .click(ProductSearchPage.search)
        .takeScreenshot('3.png')
        await t.expect(ProductSearchPage.item1.exists).ok()
        .takeScreenshot('4.png')
        .wait(2000)
        .click(ProductSearchPage.item1)
        .wait(3000)
        .click(AddproductPage.addtocart)
        .takeScreenshot('5.png')
        .wait(3000)
        .click(CartPage.cart)
        await t.expect(CartPage.cartitem1.exists).ok()
        .wait(3000)
        .takeScreenshot('6.png') 



})});
// testcafe chrome tests/AdingProductTest.js -s takeOnFails=true -e