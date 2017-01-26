const app = angular.module('MoviesApp', []);

function Movie(name, release, genre) {
    this.name = name;
    this.release = release;
    this.genre = genre;
    this.liked = '';

    return this;
}

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

