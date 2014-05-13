$.define("Form", {
    emailPattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    urlPattern: /(^|[ \t\r\n])((ftp|http|https|gopher|mailto|news|nntp|telnet|wais|file|prospero|aim|webcal):(([A-Za-z0-9$_.+!*(),;/?:@&~=-])|%[A-Fa-f0-9]{2}){2,}(#([a-zA-Z0-9][a-zA-Z0-9$_.+!*(),;/?:@&~=%-]*))?([A-Za-z0-9$_+!*();/?:~-]))/,
    configMessage: function(msg, f, v) {
        return msg.replace(/%f/, "<span style='color:#B80000;'>" + f + "</span>").replace(/%s/, "<span style='color:#B80000;'>" + v + "</span>");
    },
    addValidationEffect:function(el, title){
        el.addClass("invalid-field").attr("title", title);
    },
    removeValidationEffect:function(el){
        el.removeClass("invalid-field").attr("title", "");
    },
    validate: function(form, fields) {
        var _this = this, errors = [];

        $.each(fields, function(i, field) {
            var el = form.find(field.id),
                fieldLabel = el.prev().html(),
                fieldValue = el.val(),
                rules = field.rules.split("|");
            
            $.each(rules, function(j, rule) {
                rule = rule.split(":");

                switch(rule[0]){
                    case "required":
                        if($.isEmpty(fieldValue))
                            errors.push(_this.configMessage($.Localizer.THE_FIELD_VAR_IS_REQUIRED, fieldLabel, ""));
                        break;
                    case "maxlength":
                        var v = rule[1];
                        if(!$.isEmpty(fieldValue) && fieldValue.length > v)
                            errors.push(_this.configMessage($.Localizer.THE_FIELD_VAR_CANNOT_CONTAIN_MORE_THAN_VAR_CHARACTERS, fieldLabel, v));
                        break;
                    case "minlength":
                        var v = rule[1];
                        if(!$.isEmpty(fieldValue) && fieldValue.length < v)
                            errors.push(_this.configMessage($.Localizer.THE_FIELD_VAR_CANNOT_CONTAIN_LESS_THAN_VAR_CHARACTERS, fieldLabel, v));
                        break;
                    case "email":
                        if(!$.isEmpty(fieldValue) && !_this.emailPattern.test(fieldValue))
                            errors.push(_this.configMessage($.Localizer.THE_FIELD_VAR_MUST_BE_A_VALID_EMAIL_ADDRESS, fieldLabel));
                        break;
                    case "url":
                        if(!$.isEmpty(fieldValue) && !_this.urlPattern.test(fieldValue))
                            errors.push(_this.configMessage($.Localizer.THE_FIELD_VAR_MUST_CONTAIN_A_VALID_URL, fieldLabel));
                        break;
                    case "number":
                        if(!$.isEmpty(fieldValue) && isNaN(fieldValue))
                            errors.push(_this.configMessage($.Localizer.THE_FIELD_VAR_MUST_CONTAIN_A_NUMERIC_VALUE, fieldLabel));
                        break;
                }
            });
        });
        
        if($.isEmpty(errors)){
            return true;
        } else {
            $.Alert($.Localizer.VALIDATION_ERROR, errors.join("<br />"));
            return false;
        }        
    },
    serialize: function(form, toJson) {
        var post = $(form).serialize(),
                arrayAnd = post.split("&"),
                i,
                obj = {};
        for (i = 0, len = arrayAnd.length; i < len; i++) {
            var arrayEq = arrayAnd[i].split("=");
            obj[arrayEq[0]] = decodeURIComponent(arrayEq[1]);
        }
        return (toJson) ? JSON.stringify(obj) : obj;
    },
    serializePanel: function() {
    },
    clear: function(form) {
        $(form).find("[name]").each(function(i) {
            $(this).val("");
            i === 0 ? $(this).focus() : null;
        });
    }
});

