$.define("DialogClass", function(_options){
    
    var _this = this;
    this.modal = null;
    
    this.options = $.extend({
        buttons:[{
            text:"OK",
            cls:"secondary",
            click:function(){
                alert("click!");
            }
        }],
        contentType: "",
        title: "",
        content: "<p>Message</p>",
    }, _options);
    
    
    
    
    this.revealModal = function(){
        var m = $("<div />");
        m.
                addClass("reveal-modal").
                attr("data-reveal", "");
        
        return m;
    };
    
    this.closeBtn = function(){
        var cl = $("<a />");
        cl.
                addClass("close-reveal-modal").
                html("&#215;");
        return cl;
    };
    
    this.title = function(){
        var title = $("<h2 />");
        title.html(this.options.title);
        return title;
    };
    
    this.buttons = function(){
        var buttonsContainer = $("<div />");
        $.each(this.options.buttons, function(i, button){
           var _button = $("<button />");
               _button.
                       html(button.text).
                       on("click", button.click);
               if(button.cls)
                   _button.addClass(button.cls);
               
               buttonsContainer.append(_button);
        });
        
        return buttonsContainer;
    };
    
    this.content = function(){
        var ctn = $("<div />");
        ctn.html(this.options.content);
        return ctn;
    };
    
    this.initComponent = function(){
        this.modal = this.revealModal();
        this.modal.
                append(this.closeBtn()).
                append(this.title()).
                append(this.content()).
                append("<br />").
                append(this.buttons());
        $("body").append(this.modal);
    };
    
    
    this.open = function(){
        this.initComponent();
        this.modal.foundation("reveal", "open");
    };
    
    this.destroy = function(){
        this.modal.foundation("reveal", "close");
        setTimeout(function(){
            _this.modal.remove();
        },500);
    };
    
});

$.define("Alert", function(title, msg, callBack){
    
    var myAlert = new $.DialogClass({
        buttons:[{
            text: "OK",
            click: function(){
                if(callBack)
                    callBack();
                
                myAlert.destroy();
            }
        }],
        title: title,
        content: msg
    });
    
    myAlert.open();
    
});




