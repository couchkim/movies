const app = angular.module('MoviesApp', []);

app.factory('MovieService', function () {
    let movies = [];
    console.log(movies);

    return {

        addMovie: function (entry) {
            movies.push(entry);

        },
        getMovies: function () {
            return movies;
        },

    };
});

app.controller('SubmitMovieController', function ($scope, MovieService) {


    $scope.submitMovie = function () {
        let newMovie = [$scope.name, $scope.release, $scope.genre];
        MovieService.addMovie(newMovie);
        $scope.name = '';
        $scope.release = '';
        $scope.genre = '';
    
    };

});


app.controller('ListOfMoviesController', function ($scope, MovieService) {
   
    $scope.movies = MovieService.getMovies();

    $scope.likeMovie = function () {
        console.log('liked it');
    };

    $scope.noLikeMovie = function () {
        console.log('no likey');
    };

});

