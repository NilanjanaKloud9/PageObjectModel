const { Selector} = require ('testcafe');

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}

exports.HomePage = {
    signin: function(){
        return select('#nav-link-accountList-nav-line-1')
    }
    
        

    }


