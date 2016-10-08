function ContactNewController(ContactService) {
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
                console.log(contact);
            });
    };
}

angular
    .module('components.contact')
    .controller('ContactNewController', ContactNewController);
