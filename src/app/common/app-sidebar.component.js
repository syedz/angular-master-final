/*
    This is a stateless component
*/

var appSidebar = {
    templateUrl: './app-sidebar.html',
    controller: 'AppSidebarController'
};

angular
    .module('common')
    .component('appSidebar', appSidebar);
