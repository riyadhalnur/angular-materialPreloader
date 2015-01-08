angular.module('ngMaterialPreloader', []).directive('ngMaterialPreloader', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element = new $.materialPreloader(scope.$eval(attrs.materialPreloader));

      element.on();
    }
  };
});
