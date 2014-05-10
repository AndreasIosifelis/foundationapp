$.define("UserController",{
    extend:"BaseController",
    models:[
        "models/UserModel"
    ],
    initApplication:function(){
        alert($.config.sessionId);
    }
});


