$.define("UserController",{
    extend:"BaseController",
    models:[
        "javascripts/models/UserModel"
    ],
    initApplication:function(){
        console.log($.config.sessionId);
    }
});


