import { Selector,t} from 'testcafe';
class LogInPasswordPage {
    constructor(){
        this.Password = Selector('#ap_password');
        this.SignIn = Selector('#signInSubmit');
        

    }


}
export default new LogInPasswordPage();