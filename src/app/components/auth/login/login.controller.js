function LoginController(AuthService, $state) {
    var ctrl = this;

    // Intialization logic using lifecycle hook
    ctrl.$onInit = function() {
        ctrl.error = null;
        ctrl.user = {
            email: '',
            password: ''
        };
    };

    ctrl.loginUser = function(event) {
        return AuthService
            .login(event.user)
            .then(function(user) {
                // console.log('SUCCESS:', user);
                // Fully authorized
                $state.go('app');
            }, function(reason) {
                ctrl.error = reason.message;
            });
    };
}

angular
    .module('components.auth')
    .controller('LoginController', LoginController);
