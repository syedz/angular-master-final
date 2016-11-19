function ContactsController() {
  var ctrl = this;

  // Get contacts ID through an event
  ctrl.goToContact = function(event) {
    // $state.go('contact', { id: event.contactId })
  };
}

angular
  .module('components.contact')
  .controller('ContactsController', ContactsController);
