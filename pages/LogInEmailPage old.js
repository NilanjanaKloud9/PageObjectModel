import { Selector,t} from 'testcafe';
class LogInEmailPage {
    constructor(){
        this.EmailAddress = Selector('#ap_email');
        this.Continue = Selector('#continue');
        

    }


}
export default new LogInEmailPage();