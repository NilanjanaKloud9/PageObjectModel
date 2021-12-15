const { Selector} = require ('testcafe');

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}

    exports.LogInPasswordPage = {
        Password: function(){
            return select('#ap_password')
        },
        SignIn: function(){
            return select('#signInSubmit')
        }

        

    }


