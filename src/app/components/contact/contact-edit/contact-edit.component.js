/*
  Our first stateful routed component. Up until this point, we only had
  routed components that did not get data as we transitioned to them. Edit
  functionality requires us to have data before being utilized.

  In state.go() we take the key from the user and put it in the URL, when we
  start transitioning to this new state we read that value from the URL.
 */

var contactEdit = {
  bindings: {
    contact: '<'
  },
  templateUrl: './contact-edit.html',
  controller: 'ContactEditController'
};

angular
  .module('components.contact')
  .component('contactEdit', contactEdit)
  .config(function($stateProvider) {
    $stateProvider
      .state('contact', {
        parent: 'app', // This make this route protected by authentication
        url: '/contact/:id',
        component: 'contactEdit',
        resolve: { // Need to figure out how to resolve the data, before getting it into the component by resolving that data before we transition
          contact: function($transition$, ContactService) {
            // Here we return the particular contact before transitioning into the view so that we get it as a binding.
            // $transition$ is required so that we can fetch the actual URL value, so we can pass it off to our service
            var key = $transition$.params().id;
            console.log(key);
            return ContactService.getContactById(key).$loaded();
          }
        }
      });
  });
