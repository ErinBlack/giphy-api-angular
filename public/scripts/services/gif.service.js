myApp.service('GifService', function($http){

  gs = this;
  gs.startUpFunction = function(){
    console.log('inside the startup function');
    return $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=').then(function(response){
      console.log('back from the server with: ', response);
      return response.data.data;
    });
  };


  gs.searchGif = function(search){
    console.log(search);
    var searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + search + "&api_key=dc6zaTOxFJmzC";
    
    return $http.get(searchURL).then(function(response){
    return response.data.data;
    }); //end get requets
  }; // end searchGIf

});
