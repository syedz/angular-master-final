function contactsFilter() {
  return function(collection, params) {
    // ES5 Array.prototype.filter
    return collection.filter(function(item) {
      return item.tag === (
        params.filter === 'none' ? item.tag : params.filter
      );
    });
  };
}

angular
  .module('components.contact')
  .filter('contactsFilter', contactsFilter);
