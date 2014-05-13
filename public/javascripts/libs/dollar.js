(function() {
    Array.prototype.contains = function(v) {
        var i, l = this.length;
        for (i = 0; i < l; i++) {
            if (this[i] === v || this[i] === v)
                return true;
        }
        return false;
    };

    Array.prototype.pushUnique = function(v) {
        !this.contains(v) ? this.push(v) : null;
        return this;
    };

    Array.prototype.getFirst = function() {
        return this[0];
    };

    Array.prototype.getLast = function() {
        return this[this.length - 1];
    };

    Array.prototype.removeAt = function(p, c) {
        c && c > 0 ? this.splice(p, c) : this.splice(p, 1);
    };
})();

$.extend({
    config:{
        appVersion:1,
        appEnviroment: "development",
        sessionId:"",
        rootFolder:"public/"
    },
    defined:[],
    define:function(c, o){
        this.defined.push(c);        
        this[c] = o;      

        if (o.models)
            this.loadFiles(o.models);

        if (o.extend && this.hasOwnProperty(c))
            $.extend(this[c], this[o.extend]);
    },
    renderTpl:function(tpl, target, data){
        var _this = this;            
            tpl = this.config.rootFolder + tpl;        
        var tplId = $.hash("MD5", tpl);
        if(this.hasOwnProperty(tplId)){
            target.html(this[tplId](data));
            $.initEvents();
            $.config.configLayout();
        } else {
            $.get(tpl, function(datahtml){
                _this[tplId] = Handlebars.compile(datahtml);
                target.html(_this[tplId](data));
                $.initEvents();
                $.config.configLayout();
            });
        }
        
    },
    loadFile: function(file) {
        var f = this.config.appEnviroment == "development" ? file + ".js?" + new Date().getTime() : file + ".min.js?v=" + this.config.appVersion;
        document.write("<script src='"+ this.config.rootFolder + f + "'></script\>");
    },
    loadFiles: function(files) {
        if(this.isArray(files)) {
            for (var i = 0, len = files.length; i < len; i++) {
                this.loadFile(files[i]);
            }
        } else {
            this.loadFile(files);
        }
    },
    application: function(o) {   
        $.extend(this.config, o);
        if (o.controllers)
            this.loadFiles(o.controllers);

        if (o.classes)
            this.loadFiles(o.classes);
        
        $(function() {            
            o.dispatch();
        });
    },
    isArray: function(o) {
        return Object.prototype.toString.call(o) === "[object Array]";
    },
    isFunction: function(o) {
        return Object.prototype.toString.call(o) === "[object Function]";
    },
    isObject: function(o) {
        return Object.prototype.toString.call(o) === "[object Object]";
    },
    array2string: function(tag, array) {
        var str = "",
                i;
        for (i = 0, len = array.length; i < len; i++) {
            str += "<" + tag + ">" + array[i] + "</" + tag + ">";
        }
        return str;
    },
    isEmpty: function(v, aes) {
        return (v === null) || (v === undefined) || (!aes ? v === '' : false) || ($.isArray(v) && v.length === 0);
    },
    ucFirst: function(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    },
    rand:function(){
        return Math.floor(Math.random()*90000) + 10000;
    },
    initEvents: function() {
        for (var c in $) {
            if(this.defined.contains(c)){
                if ($.hasOwnProperty(c)) {
                    (function(c) {
                        if ($[c].hasOwnProperty("control")) {
                            $.controlEvents($[c].control, $[c]);
                        }
                    })(c);
                }
            }

        }
    },
    controlEvents: function(selectors, c) {
        for (var selector in selectors) {
            var splitselector = selector.split("|");
            if (selectors.hasOwnProperty(selector)) {
                $.applyEvent($(splitselector[0]), splitselector[1], selectors[selector], c);
            }
        }
    },
    applyEvent: function(cmp, event, fn, c) {
        cmp.unbind(event);
        cmp.on(event, function(e) {
            $.isEmpty(c) ? fn(cmp, e) : fn(cmp, c, e);
            //$.initEvents();
            return false;
        });
    },
    applyEvents: function(cmp, selectors) {
        for (var selector in selectors) {
            $.applyEvent(cmp, selector, selectors[selector], "");
        }
    },
    hash: function(m,v){
        return this.isEmpty(CryptoJS) ? "" : CryptoJS[m](v).toString();
    }
});





