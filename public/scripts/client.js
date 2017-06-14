console.log('js');

var myApp = angular.module('myApp', []);

myApp.controller('GiphyController', function($http){
  console.log('GC');
  var vm = this;
  vm.startUpFunction = function(){
    console.log('inside the startup function');
    $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=').then(function(response){
      console.log('back from the server with: ', response);
      vm.gifs = response.data.data;
    });
  };


  vm.searchGif = function(){
    var search = vm.search;
    console.log(search);
    var searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + search + "&api_key=dc6zaTOxFJmzC";
    $http.get(searchURL).then(function(response){
      vm.returnSearch = response.data.data;
    }); //end get requets
  }; // end searchGIf
});
