import { Selector,t} from 'testcafe';
class ScreenShot {
    constructor(){
        this.Logout = Selector('#nav-item-signout > span');
    }
}
    export default new ScreenShot();