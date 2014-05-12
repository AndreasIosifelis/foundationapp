$.define("BaseModel", {
    httpCall:function(path, json, msg){
       
        var url = window.location.href + "?c={ctrl}&m={fnc}";
        url = url.replace(/#/g, "");
        
        path = path.split("/");
        url = url.replace(/{ctrl}/, path[0]);
        url = url.replace(/{fnc}/, path[1]);
        url+= "&_dc=" + new Date().getTime();
        
        var mask = new $.Mask(msg);
        
        var params = {};
        $.isEmpty(json) ? null : params.json = json;
        $.isEmpty($.config.userInfo.userToken) ? null : params.userToken = $.config.userInfo.userToken;
        params.sessionId = $.config.userInfo.sessionId;       
        
        mask.show();
        return $.ajax({
            type:"POST",
            dataType: "json",
            url: url,
            data:params,
            complete: function(){
                mask.hide();
            },
            error:function(data){
                mask.hide();
                setTimeout(function(){
                    $.Alert("Server Error", data.responseText);
                },200);                
            }
        });
        
    }
});


