$.define("Alert", function(title, msg, callBack){
    
    var myAlert = new $.Dialog({
        buttons:[{
            text: "OK",
            click: function(){
                if(callBack)
                    callBack();
                
                myAlert.destroy();
            }
        }],
        title: title,
        size:"tiny",
        content: msg
    });
    
    myAlert.open();
    
});