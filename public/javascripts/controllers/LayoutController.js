$.define("LayoutController",{
    extend:"BaseController",
    models:[
        "javascripts/models/LayoutModel"
    ],
    applyLoginLayout: function(){
        var data = {
            APP_TITLE: "Application Title",
            USERNAME: $.Localizer.USERNAME,
            PASSWORD: $.Localizer.PASSWORD,
            LOGIN:$.Localizer.LOGIN,
            sessionId: $.UserModel.userInfo.sessionId
        };
        
        $.template("templates/user/Login.html", data, $.config.appContainer);
    },
    applyMainLayout:function(){
        if(!this.authUser())
            return;  
        var data = {
            APP_TITLE: "Application Title"
        };
        $.template("templates/user/Main.html", data, $.config.appContainer);       
    }
});