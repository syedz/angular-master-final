function ContactNewController(ContactService, $state) {
    var ctrl = this;

    /*
      Using lifecycle hooks

      Using ctrl.contact across our forms. Each of these properties will
      correspond to a binding in the actual form that we create to go and create
      an actual contact.
    */
    ctrl.$onInit = function() {
        ctrl.contact = {
            name: '',
            email: '',
            job: '',
            location: '',
            social: {
                facebook: '',
                github: '',
                twitter: '',
                linkedin: ''
            },
            tag: 'none'
        };
    };

    // This accepts an event back to us
    ctrl.createNewContact = function(event) {
        return ContactService
            .createNewContact(event.contact)
            .then(function(contact) {
                // Success
                $state.go('contact', {
                  id: contact.key
                });
            });
    };
}

angular
    .module('components.contact')
    .controller('ContactNewController', ContactNewController);
