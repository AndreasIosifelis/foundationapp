$.define("Dialog", function(_options) {

    var _this = this;
    this.dialog = null;

    this.options = $.extend({
        buttons: [],
        contentType: "",
        title: "",
        content: "",
        closable: true,
        size: "large",
        animation: "fade"
    }, _options);


    this.dialogWindow = function() {
        var m = $("<div />");
        m.
                addClass("reveal-modal").
                addClass(this.options.size).
                attr("data-reveal", "");

        return m;
    };

    this.closeBtn = function() {
        var cl = $("<a />");
        cl.
                addClass("close-reveal-modal").
                html("&#215;");
        cl.on("click", function() {
            _this.destroy();
        });
        return this.options.closable ? cl : "";
    };

    this.title = function() {
        var title = $("<h3 />");
        title.html(this.options.title);
        return title;
    };

    this.buttons = function() {
        var buttonsContainer = $("<ul />");
        buttonsContainer.
                addClass("button-group").
                addClass("even-" + this.options.buttons.length);
        $.each(this.options.buttons, function(i, button) {
            var li = $("<li />");
            var _button = $("<a />");
            _button.
                    attr("href", "#").
                    html(button.text).
                    addClass("button").
                    on("click", button.click);
            if (button.cls)
                _button.addClass(button.cls);
            li.append(_button);
            buttonsContainer.append(li);
        });

        return buttonsContainer;
    };

    this.content = function() {
        var ctn = $("<div />");
        ctn.html(this.options.content);
        return ctn;
    };

    this.initComponent = function() {
        this.dialog = this.dialogWindow();
        this.dialog.
                append(this.closeBtn()).
                append(this.title()).
                append(this.content()).
                append("<br />").
                append(this.buttons());
        $("body").append(this.dialog);
    };


    this.open = function() {        
        this.dialog.foundation("reveal", "open", {
            animation: _this.options.animation,
            animationSpeed: 100
        });
    };

    this.destroy = function() {
        this.dialog.foundation("reveal", "close");
        setTimeout(function() {
            _this.dialog.remove();
            $(".reveal-modal-bg").fadeOut(100, function() {
                $(this).remove();
            });
        });

    };

    this.initComponent();

});