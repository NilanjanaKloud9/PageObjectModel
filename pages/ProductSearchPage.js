import { Selector,t} from 'testcafe';
class ProductSearchPage {
    constructor(){
        this.searchbar = Selector ('#twotabsearchtextbox');
        this.search = Selector('#nav-search-submit-button');
        this.item1 = Selector('span').withAttribute('class','a-size-base-plus a-color-base a-text-normal').withText('Malachite Textured Watch with Black Leather Strap');
    }
    

   /* get productSearch(){

        return Selector ('#twotabsearchtextbox');
    }

    async search(product){
         await t
                 .typeText(this.productSearch,product)
                 .wait(3000)
                 .pressKey('enter')

    }*/


}
export default new ProductSearchPage();