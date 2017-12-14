myApp.controller('CollectionController', function($http) {
  console.log('in Collection Controller in collectionController.js');

  var vm = this;
  vm.keyWordArry = [];

  vm.keyWordFunction = function(input) {
    console.log('in keyWord Function');
    $http({
      method: 'GET',
      url: 'https://freemusicarchive.org/api/trackSearch?q=' + input + ''
    }).then(function(response) {
      console.log('back with:', response);
      for (var i = 0; i < 8; i++) {
        console.log(response.data.aRows);
        vm.keyWordarrayObjects = response.data.aRows[i];
        vm.keyWordArray.push(vm.keyWordArrayObjects);
      }
      return vm.keyWordArray;
    });
    vm.keyWord = '';
  }; // end keyWordFunction

}); // end controller
