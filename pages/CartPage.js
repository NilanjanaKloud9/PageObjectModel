import { Selector,t} from 'testcafe';
class CartPage {
    constructor(){
        this.cart = Selector ('#nav-cart-count');
        this.cartitem1 = Selector('span').withAttribute('class','a-truncate-cut').withText('Malachite Textured Watch with Black Leather Strap');
        
        

    }


}
export default new CartPage();