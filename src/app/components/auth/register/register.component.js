/*
    This is the stateful component.
    Because this is a view (or a page), it is a rooted component.
    Because this is rooted component, we have a config().
*/

var register = {
    templateUrl: './register.html',
    controller: 'RegisterController'
};

angular
    .module('components.auth')
    .component('register', register)
    .config(function ($stateProvider) {
        // Created auth state in login.controller.js aready
        $stateProvider
            .state('auth.register', {
                url: '/register',
                component: 'register'
            });
    });
