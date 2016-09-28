/*
    1. We've cloned the user object via $onChanges()
    2. When submitForm function happens, we're going to pass an event object
       up to the parent component, which is the delegated onSubmit() function
       that we passed down from the register component into the auth-form
       component, which then gets called with that particular piece of data,
    3. So when the submitForm() is called, we get user object back (line 38),
       which then passes back the latest value of ctrl.user, which inside of
       the RegisterController we get as an event object, which is then given to
       us via the on-submit line in register.html.
    4. We pass the function into the auth-form, and we get the $event back with
       this new object in onSubmit() in here.
*/

function AuthFormController() {
    var ctrl = this;

    /*
        This is called because the one-way binding is fired.
        $onChanges() being called before the component instantiates. Therefore
        we get the changes object that we can copy, before the component is
        bound. We can copy that object and reassign it to ctrl.user. So that
        when ctrl.$onInit is called, when component is ready, the ctrl.user
        value there will then equal the copied value. This way our component is
        setup with a cloned piece of data before the component is instantiated.
        This way, any changes we make to the user object do NOT affect the
        parent, and we can use a function to tell the parent that we want to
        to send it some data back.
    */
    ctrl.$onChanges = function(changes) {
        // changes.user is the user in auth-form.component.js (user: '<')
        if (changes.user) {
            // Break binding between the parent and the child component
            ctrl.user = angular.copy(ctrl.user);
        }
    };

    // This will send  the data back to the parent
    ctrl.submitForm = function() {
        // $event acts as a fake event object
        ctrl.onSubmit({
            $event: {
                user: ctrl.user
            }
        });
    };
}

angular
    .module('components.auth')
    .controller('AuthFormController', AuthFormController);
