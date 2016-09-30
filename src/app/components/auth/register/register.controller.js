function RegisterController(AuthService, $state) {
    var ctrl = this;

    /*
        Intialization logic using lifecycle hook.

        ctrl.user we can intially bind, and will delegate into the auth-form.
        Once that auth-form has been submitted we can use this new user object
        to pass it off to the register function inside of the service.
    */
    ctrl.$onInit = function() {
        ctrl.error = null;
        ctrl.user = {
            email: '',
            password: ''
        };
    };

    ctrl.createUser = function(event) {
        return AuthService
            .register(event.user)
            .then(function(user) {
                // console.log('SUCCESS:', user);
                $state.go('app');
            }, function(reason) {
                ctrl.error = reason.message;
            });
    };
}

angular
    .module('components.auth')
    .controller('RegisterController', RegisterController);
