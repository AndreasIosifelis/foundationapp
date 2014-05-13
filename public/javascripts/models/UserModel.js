$.define("UserModel", {
    extend: "BaseModel",
    loginValidationRules:[{
        id: "#username",
        rules: "required|minlength:6"
    },{
        id: "#password",
        rules: "required|minlength:6"
    }],
    userInfo: {},
    setUserInfo: function(userInfo){
        this.userInfo = userInfo;
        $.config.userInfo = userInfo;
    },    
    doLogin: function(json){
        return this.httpCall("user/login", json, $.Localizer.CONNECTING);
    },
    logout:function(){
        return this.httpCall("user/logout", [], $.Localizer.DISCONNECTING + "...");
    }
});


