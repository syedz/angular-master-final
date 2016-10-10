function ContactNewController(ContactService, $state) {
    var ctrl = this;

    // Using lifecycle hooks
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
