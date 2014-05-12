$.define("Confirm", function(title, msg, callBack){
    
    var myConfirm = new $.Dialog({
        buttons:[{
            text: "OK",
            click: function(){
                if(callBack)
                    callBack();
                
                myConfirm.destroy();
            }
        },{
            text:"Cancel",
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


