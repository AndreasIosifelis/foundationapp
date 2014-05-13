$.define("BaseController",{
    models:[
        "javascripts/models/BaseModel"
    ],
    localizeErrors: function(errors){
        var arr = [];
        for(var i = 0; i<errors.length; i++){
            arr.push($.Localizer["ERROR_" + errors[i]]);
        }        
        return arr.join("\n");
    }
});


