import { Selector,t} from 'testcafe';
class LogOutPage {
    constructor(){
        this.Logout = Selector('#nav-item-signout > span');
        
    }
    async search(product){
        await t
                .setTestSpeed(0.1)
                .hover('#nav-link-accountList-nav-line-1')
    }

}
export default new LogOutPage();