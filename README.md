# angular-materialPreloader [![Bower version](https://badge.fury.io/bo/angular-material-preloader.svg)](http://badge.fury.io/bo/angular-material-preloader)

## DESCRIPTION  
An Angular directive based on the jQuery plugin that recreates the Material Design pre-loader (as seen on inbox).  

## INSTALLATION  
`bower install angular-material-preloader --save`  

## REQUIREMENTS
This package depends on the Material-Preloader jQuery plugin to work. Include it from the `bower_components` folder in this package or download it from [here](http://git.aaronlumsden.com/material/) and include it yourself.  

```  
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.0/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script>
<script src="/bower_components/bower_components/Material-Preloader/js/materialPreloader.js"></script>
<script src="/bower_components/preloader.js"></script>  
```

## USAGE  
Inject the module into your angular app as a dependency:  
`angular.module('yourAppModule', ['ng-material-preloader']);`  

Use it in your application by passing in the options using element attributes  
```  
<div ng-material-preloader="{position: 'top',  
    height: '5px',  
    col_1: '#159756',  
    col_2: '#da4733',  
    col_3: '#3b78e7',  
    col_4: '#fdba2c',  
    fadeIn: 200,  
    fadeOut: 200}">  
</div>  
```

## CREDITS  
This AngularJS plugin is based on the jQuery [Material-Preloader](http://git.aaronlumsden.com/material/) plugin by [Aaron Lumsden](https://twitter.com/aaronlumsden).  


Made with love in Dhaka, Bangladesh by [Riyadh Al Nur](https://twitter.com/riyadhalnur)
