/*
    This is a stateless component
*/

var appNav = {
    bindings: {
        user: '<',
        onLogout: '&' // callback
    },
    templateUrl: './app-nav.html'
};

angular
    .module('common')
    .component('appNav', appNav);
