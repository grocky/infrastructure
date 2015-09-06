<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>  <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="UTF-8">
	<title>Rocky Gray Jr.</title>
	<meta name="description" content="Rocky Gray Jr; Software Engineer; Resume; Skills; Projects">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

    <base href="/">
	<script>
	  (function(d) {
	    var config = {
	      kitId: 'rur5mbi',
	      scriptTimeout: 1000,
	      async: true
	    },
	    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
	  })(document);
	</script>
    <!-- bower:css -->
    <link rel="stylesheet" href="vendor/bootstrap.min.css"/>
    <link rel="stylesheet" href="vendor/font-awesome.min.css"/>
    <!-- endbower -->

    <!-- inject:css -->
    <link rel="stylesheet" href="css/main.css"/>
    <link rel="stylesheet" href="css/errors/404.css"/>
    <!-- endinject -->

    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-55863384-1', 'auto');
        ga('send', 'pageview');

    </script>
</head>
<body class="no-overflow" ng-app="main" ng-controller="vCardController as vm" ng-cloak>
<div class="container">
    <div ng-view class="slow-reveal"></div>
</div>

<!-- bower:js -->
<script src="vendor/jquery.js"></script>
<script src="vendor/angular.js"></script>
<script src="vendor/angular-animate.js"></script>
<script src="vendor/ui-bootstrap-tpls.js"></script>
<script src="vendor/angular-resource.js"></script>
<script src="vendor/angular-route.js"></script>
<script src="vendor/TweenMax.js"></script>
<!-- endbower -->

<!-- inject:js -->
<script src="js/ThrowPropsPlugin.min.js"></script>
<script src="js/app.js"></script>
<script src="js/main.js"></script>
<script src="js/controllers/VCard.js"></script>
<script src="js/services/personalInformation.js"></script>
<!-- endinject -->
</body>
</html>
