$.define("UserController",{
    extend:"BaseController",
    models:[
        "javascripts/models/UserModel"
    ],
    initApplication:function(){
        alert($.config.sessionId);
    }
});


