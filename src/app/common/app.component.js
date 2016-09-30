/*
    This will be the authenticated view. Anything in here will be already be
    fully authenticated. Will have full access to everything.

    This will be a rooted component.

    As soon as authorization is done, we can redirec to /app, where we can
    have child states such as apps/contacts, etc.
*/

var app = {
    templateUrl: './app.html',
    controller: 'AppController'
};

angular
    .module('common')
    .component('app', app)
    .config(function($stateProvider) {
        $stateProvider
            .state('app', {
                // redirectTo: 'contacts'
                url: '/app',
                data: {
                    requiredAuth: true
                },
                component: 'app'
            });
    });
