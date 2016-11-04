/*
    This is a stateful component
*/

var contactNew = {
    templateUrl: './contact-new.html',
    controller: 'ContactNewController'
};

angular
    .module('components.contact')
    .component('contactNew', contactNew)
    .config(function($stateProvider) {
        $stateProvider
            .state('new', {
                parent: 'app', // A child of 'app' state in app.component.js
                url: '/new',
                component: 'contactNew'
            });
    });
