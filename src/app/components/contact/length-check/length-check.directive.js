/*
  Components are for creating DOM, for creating templates, for creating data
  and rendering child components and using events and delegated data.

  Directives are purely for manipulating the DOM outside of Angular. Example,
  below is a directive that add/removes a class from an input based on whether
  is has data in it.
 */

function lengthCheck() {
  return {
    restrict: 'A', // Attribute directives should add functionality to an existing DOM element
    require: 'ngModel', // Because we bind this directive to an actual template, we require ngModel for that template itself
    compile: function($element) {
      /*
        compile() will add the class once, where as link() will add the class
        several times
      */

      $element.addClass('dynamic-input');
      // returning this function will act like a link() postLink()
      return function($scope, $element, $attrs, $ctrl) {
        var dynamicClass = 'dynamic-input--no-contents';

        $scope.$watch(function() {
          // Gives current view value of the input that it's bound to
          return $ctrl.$viewValue;
        }, function(newValue) {
          // Change listener that is called when the value returned from the above function changes
          if (newValue) {
            $element.removeClass(dynamicClass);
          } else {
            $element.addClass(dynamicClass);
          }
        });
      };
    }
  };
}

angular
  .module('components.contact')
  .directive('lengthCheck', lengthCheck);
