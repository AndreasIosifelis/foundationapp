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
        
        $.renderTpl("templates/main/LoginLayout.html", $.config.appContainer, data);
    },
    applyMainLayout:function(){
        var data = {
            APP_TITLE: "Application Title"
        };
        $.renderTpl("templates/main/MainLayout.html", $.config.appContainer, data);   
    }
});