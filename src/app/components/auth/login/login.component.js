/*
    This is the stateful component.
    Because this is a view (or a page), it is a rooted component.
    Because this is rooted component, we have a config()
*/

var login = {
    templateUrl: './login.html',
    controller: 'LoginController'
};

angular
    .module('components.auth')
    .component('login', login)
    .config(function ($stateProvider, $urlRouterProvider) {
        /*
          'auth' state is essentially a wrapper that will allow us to change
          the views in and out, depending on whether we are auth.login or
          auth.register.
        */
        $stateProvider
            .state('auth', {
                redirectTo: 'auth.login',
                url: '/auth',
                template: '<div ui-view></div>' // Dynamic view, no need to create its own components for it (below we are)
            })
            .state('auth.login', {
                url: '/login',
                component: 'login'
            });
        $urlRouterProvider.otherwise('/auth/login');
    });
