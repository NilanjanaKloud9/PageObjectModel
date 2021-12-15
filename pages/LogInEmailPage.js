const { Selector} = require ('testcafe');

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}

    exports.LogInEmailPage = {
        EmailAddress: function(){
            return select('#ap_email')
        },
        Continue: function(){
            return select('#continue')
        }
           
    
        

    }



