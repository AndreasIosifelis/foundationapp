$.define("LayoutController",{
    extend:"BaseController",
    models:[
        "javascripts/models/LayoutModel"
    ],
    applyLoginLayout: function(){
        console.log("Login Layout");
    },
    applyMainLayout:function(){
        console.log("Main Layout");
    }
});