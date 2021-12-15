import { Selector,t} from 'testcafe';
class HomePage {
    constructor(){
        this.signin = Selector('#nav-link-accountList-nav-line-1');
        

    }


}
export default new HomePage();