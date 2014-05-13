$.define("Confirm", function(title, msg, callBack){
    
    var myConfirm = new $.Dialog({
        buttons:[{
            text: "OK",
            cls: "small",
            click: function(){
                if(callBack)
                    callBack();
                
                myConfirm.destroy();
            }
        },{
            text:"Cancel",
            cls: "small",
            click: function(){
                myConfirm.destroy();
            }
        }],
        title: title,
        size:"tiny",
        content: msg
    });
    
    myConfirm.open();
    
});


