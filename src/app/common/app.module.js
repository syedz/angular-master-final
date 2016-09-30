/*
    Application specific code: Header, navbar, etc - all sit here inside
    common module.
*/

angular
  .module('common', [
    'ui.router',
    'angular-loading-bar'
  ])
  .run(function($transitions, cfpLoadingBar) {
      /*
        When onStart() handler gets called, .start function is called
      */
      $transitions.onStart({}, cfpLoadingBar.start);
      $transitions.onSuccess({}, cfpLoadingBar.complete);
  });
