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
            sessionId: $.config.userInfo.sessionId
        };
        
        $.renderTpl("templates/main/LoginLayoutTemplate.html", $("#AppContainer"), data);
    },
    applyMainLayout:function(){
        var data = {
            APP_TITLE: "Application Title"
        };
        $.renderTpl("templates/main/MainLayoutTemplate.html", $("#AppContainer"), data);   
    }
});