$.define("UserModel", {
    extend: "BaseModel",
    setUserInfo: function(userInfo){
        this.userInfo = userInfo;
        $.config.userInfo = userInfo;
    },
    userInfo: {},
    doLogin: function(json){
        return this.httpCall("user/doLogin", json, Localizer.LOGGING_IN);
    }
});


