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
        let newMovie = {
            name: $scope.name,
            release: $scope.release,
            genre: $scope.genre,
            liked: 'not yet liked',
        };

        MovieService.addMovie(newMovie);
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


    };

    $scope.noLikeMovie = function (film) {
        console.log('no likey');
        film.liked = 'Unwatchable Movie';
    };

});

