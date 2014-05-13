$.define("Mask", function(msg){
    
    var _this = this;
    this.msg = msg;
    this.top = $(window).height()  / 2 -50;
    this.left = $(window).width() / 2 -50;
    
    this.mask = $("<div />");
    
    this.mask.
            addClass("bodymask");
    
    this.loading = $("<div />");
    
    this.loading.
            addClass("maskmsg").
            css({
               top:_this.top,
               left:_this.left
            }).
            html(this.msg);
            
            

    
    this.show = function(){
        $("body").
                append(this.mask).
                append(this.loading);
    };
    
    this.hide = function(){
        this.mask.remove();
        this.loading.remove();
    };
    
//    this.mask = new $.Dialog({
//        content: "<img src='public/images/img-loading.gif' />",
//        closable: false,
//        title: _this.msg,
//        size:"tiny"
//    });
//    
//    this.show = function(){
//        this.mask.open();
//    };
//    
//    this.hide = function(){
//        this.mask.destroy();
//    };
    
});


