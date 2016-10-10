/*
    This is our stateless component

    Don't want our contact-detail component to know anything about the data
    that is coming in. Just want to take the data, mutate the data, and then
    send it back up to the parent, so that the parent can do whatever it likes
    with that new bit of data.
*/

var contactDetail = {
    bindings: {
        contact: '<',
        onSave: '&',
        onUpdate: '&',
        onDelete: '&'
    },
    templateUrl: './contact-detail.html',
    controller: 'ContactDetailController'
};

angular
    .module('components.contact')
    .component('contactDetail', contactDetail);
