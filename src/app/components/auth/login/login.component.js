/*
    This is the stateful component.
    Because this is a view (or a page), it is a rooted component.
*/

var login = {
    templateUrl: './login.html',
    controller: 'LoginController'
};

angular
    .module('components.auth')
    .component('login', login)
    .config(function ($stateProvider, $urlRouterProvider) {
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
