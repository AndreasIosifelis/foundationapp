$.define("Mask", function(msg){
    
    var _this = this;
    this.msg = msg;
    
    this.mask = new $.Dialog({
        content: "<img src='public/images/img-loading.gif' />",
        closable: false,
        title: _this.msg,
        size:"tiny"
    });
    
    this.show = function(){
        this.mask.open();
    };
    
    this.hide = function(){
        this.mask.destroy();
    };
    
});


