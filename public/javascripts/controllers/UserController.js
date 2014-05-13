$.define("UserController", {
    extend: "BaseController",
    models: [
        "javascripts/models/UserModel"
    ],
    control: {
        "#LoginForm|submit": function(cmp, c, e) {
            c.login(cmp);
        },
        "#LogoutMenuItem|click": function(cmp, c, e) {
            c.logout(cmp);
        }
    },
    initApplication: function() {
        $.UserModel.setUserInfo($.config.userInfo);

        if ($.UserModel.userInfo.loggedIn) {
            $.LayoutController.applyMainLayout();
        } else {
            $.LayoutController.applyLoginLayout();
        }
    },
    login: function(form) {
        var _this = this;
        var valid = $.Form.validate(form, $.UserModel.loginValidationRules);
        if (valid) {
            var usernameVal = $.hash("SHA512", form.find("#username").val());
            var passwordVal = $.hash("SHA512", form.find("#password").val());
            var json = {};
            json.username = usernameVal;
            json.password = passwordVal;
            $.when($.UserModel.doLogin(JSON.stringify(json))).then(function(data) {
                if (data.success) {
                    $.UserModel.setUserInfo(data.userInfo);
                    $.LayoutController.applyMainLayout();
                } else {
                    $.Alert($.Localizer.LOGIN_ERROR, _this.localizeErrors(data.messages));                    
                }
            });

        }
    },
    logout: function() {
        var _this = this;
        $.Confirm($.Localizer.LOGOUT, $.Localizer.DO_YOU_WISH_TO_LOGOUT, function() {
            $.when($.UserModel.logout()).then(function(data) {
                if (data.success) {                    
                    $.UserModel.setUserInfo(data.userInfo);
                    $.LayoutController.applyLoginLayout();
                }
            });
        });
    },
    doLogout: function() {
        $.when($.UserModel.logout()).then(function() {
            $.LayoutController.applyLoginLayout();
        });
    }
});


