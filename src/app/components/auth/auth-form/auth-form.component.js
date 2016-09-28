/*
    This is the stateless component. Just accepts data as an input, data can
    leave via an output (a function).

    This component doesn't care what the submit function is. When the form is
    submitted, the sole responsiblity of this component is to simply pass the
    data back via an event. So it doesn't matter what type of a function is
    being passed into this auth-form (it could be the login/register function),
    all we care about is getting the email and the password from the user
    object.
*/

var authForm = {
    bindings: {
        user: '<',
        button: '@',
        message: '@',
        onSubmit: '&' // This is a callback
    },
    templateUrl: './auth-form.html',
    controller: 'AuthFormController'
};

angular
    .module('components.auth')
    .component('authForm', authForm);
