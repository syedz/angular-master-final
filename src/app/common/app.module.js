/*
    Application specific code: Header, navbar, etc - all sit here inside
    common module.

    This is a stateful component.
*/

angular
  .module('common', [
    'ui.router',
    'angular-loading-bar'
  ])
  .run(function($transitions, cfpLoadingBar) {
      /*
        This is for angular-loading-bar
        When onStart() handler gets called, .start function is called
      */
      $transitions.onStart({}, cfpLoadingBar.start);
      $transitions.onSuccess({}, cfpLoadingBar.complete);
  });
