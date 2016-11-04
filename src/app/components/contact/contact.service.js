function ContactService(AuthService, $firebaseRef, $firebaseArray, $firebaseObject) {
    // Reference to the URL for the database that we created in auth.module.js
    var ref = $firebaseRef.contacts;
    var uid = AuthService.getUser().uid;

    return {
        createNewContact: function(contact) {
            return $firebaseArray(ref.child(uid)).$add(contact);
        },
        getContactById: function(id) {
          return $firebaseObject(ref.child(uid).child(id));
        },
        updateContact: function(contact) {
          return contact.$save();
        },
        deleteContact: function(contact){
          return contact.$remove();
        }
    };
}

angular
    .module('components.contact')
    .factory('ContactService', ContactService);
