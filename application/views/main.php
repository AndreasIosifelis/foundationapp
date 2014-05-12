<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Foundation | Welcome</title>
    <link rel="stylesheet" href="public/stylesheets/foundation.min.css" />
    <link rel="stylesheet" href="public/stylesheets/icons/foundation-icons.css" />
    <link rel="stylesheet" href="public/stylesheets/structure.css" />
    <link rel="stylesheet" href="public/stylesheets/theme.css" />
  </head>
  <body>
    <div id="AppContainer"></div>
 
    <script src="public/javascripts/libs/modernizr.min.js"></script>
    <script src="public/javascripts/libs/jquery.min.js"></script>
    <script src="public/javascripts/libs/foundation.min.js"></script>
    <script src="public/javascripts/libs/handlebars.min.js"></script>
    <script src="public/javascripts/libs/md5.min.js"></script>
    <script src="public/javascripts/libs/dollar.js"></script>
    <script>
      $.application({
          appVersion: 1,
          appEnviroment: "<?=ENVIRONMENT?>",
          sessionId: "<?=$this->session->userdata("session_id")?>",
          userLoggedIn: <?=$userLoggedIn?>,
          classes:[
              "javascripts/classes/DialogClass"
          ],
          controllers:[
              "javascripts/controllers/BaseController",
              "javascripts/controllers/LayoutController",
              "javascripts/controllers/UserController"
          ],
          dispatch:function(){
              $.UserController.initApplication();
          }
      });
    </script>
  </body>
</html>
