angular
    .module('components.auth', [
        'ui.router',
        'firebase'
    ])
    .config(function($firebaseRefProvider) {
        var config = {
            apiKey:            "AIzaSyCSJnZlcMfNKXRniisNeVf_CsIXa0MJQzs",
            authDomain:        "contacts-manager-76cfd.firebaseapp.com",
            databaseURL:       "https://contacts-manager-76cfd.firebaseio.com",
            storageBucket:     "contacts-manager-76cfd.appspot.com",
            messagingSenderId: "633681611585"
        };

    $firebaseRefProvider
        .registerUrl({
            default: config.databaseURL,
            contacts: config.databaseURL + '/contacts'
        });

    firebase.initializeApp(config);
  })
  .run(function($transitions, $state, AuthService){

      /*
        Called on every transition that requires an authentication. If
        there is a problem, catch() fires.
      */
      $transitions.onStart({
          to: function(state) {
              return !!(state.data && state.data.requiredAuth); // returns true or false
          }
      }, function() {
          return AuthService.requireAuthentication()
          .catch(function() {
              return $state.target('auth.login');
          });
      });

      $transitions.onStart({
          to: 'auth.*'
      }, function() {
          if (AuthService.isAuthenticated()) {
              return $state.target('app');
          }
      });
  });
