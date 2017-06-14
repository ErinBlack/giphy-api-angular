console.log('js');

var myApp = angular.module('myApp', []);

myApp.controller('GiphyController', function(GifService){
  console.log('GC');
  var vm = this;


//Get random single gif
  vm.newGet = function(){
  GifService.startUpFunction().then(function(backWithGif){
    console.log('back with Gif', backWithGif);
    vm.gifs = backWithGif;
  }); //end then
  }; //end newGet
  // 
  // vm.startUpFunction = GifService.startUpFunction;


//Get searched gifs
  vm.searchForGif = function(search){

    GifService.searchGif(search).then(function(gifsSearched){
      console.log('gifsSearched', gifsSearched);
      vm.gif = gifsSearched;
      vm.searchGif = GifService;
    }); //end then


  }; //end searchGif



}); // endcontroller
