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
  });
