$.define("UserController",{
    extend:"BaseController",
    models:[
        "javascripts/models/UserModel"
    ],
    control:{
        "#LoginForm|submit":function(cmp, c, e){ c.doLogin(cmp); }
    },
    initApplication:function(){
        $.UserModel.setUserInfo($.config.userInfo); 
        
        if($.UserModel.userInfo.loggedIn){
            $.LayoutController.applyMainLayout();
        } else {
            $.LayoutController.applyLoginLayout();
        }
    },
    doLogin:function(cmp){
        
    }
});


