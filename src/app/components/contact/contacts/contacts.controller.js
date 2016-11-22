function ContactsController($state, $filter) {
  var ctrl = this;
  var contacts = ctrl.contacts;

  // Returns a closure
  ctrl.filteredContacts = $filter('contactsFilter')(contacts, ctrl.filter);

  // Get contacts ID through an event
  ctrl.goToContact = function(event) {
    $state.go('contact', {
      id: event.contactId
    });
  };
}

angular
  .module('components.contact')
  .controller('ContactsController', ContactsController);
