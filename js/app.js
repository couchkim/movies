const app = angular.module('MoviesApp', []);
// constructor to create new movies

function Movie(name, release, genre) {
    this.name = name;
    this.release = release;
    this.genre = genre;
    this.liked = '';

    return this;
}

app.factory('MovieService', function ($http) {
    let movies = [];
    console.log(movies);

    
        $http.get("https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=cbb32409948b71c890e365ef60a341c1").then(function (response){
        console.log(response);
        let profile = [response.data.results.title, response.data.results.release_date, 'comedy'];
        console.log(profile);
        angular.copy(profile, movies);
        

        
    })

    return {

        addMovie (entry) {
            movies.push(entry);     
            
        },
        getMovies() {
            return movies;
        },

    };
});

app.controller("SubmitMovieController", function ($scope, MovieService) {

        $scope.name = '';
        $scope.release = '';
        $scope.genre = '';
   
         $scope.submitMovie = function () {
       
        const brandNewMovie = new Movie($scope.name, $scope.release, $scope.genre);
     
        MovieService.addMovie(brandNewMovie);
        // clearing the DOM
        $scope.name = '';
        $scope.release = '';
        $scope.genre = '';
        
    };

});


app.controller('ListOfMoviesController', function ($scope, MovieService) {

    $scope.movies = MovieService.getMovies();

    $scope.likeMovie = function (film) {
        console.log('liked it');
        film.liked = 'Good Movie';
        // have to call this in the factory if create the contructor up there
        // see favoriteBook function from code today


    };

    $scope.noLikeMovie = function (film) {
        console.log('no likey');
        film.liked = 'Unwatchable Movie';
    };

});

