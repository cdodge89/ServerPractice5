var movies = require('./movies');

module.exports = function(){
    this.movies = movies;
    this.getMovieById = function(id,movies = this.movies){
        return new Promise((resolve,reject)=>{
            movies.forEach(movie=>{
                if (movie.id === parseInt(id)){
                    resolve(movie);
                }
            });
            reject('ERROR: Could not find movie');
        });
    };
    this.getMovieProp = function(id,prop,movies=this.movies){
        return new Promise((resolve,reject)=>{
            movies.forEach(movie=>{
                if (movie.id === parseInt(id)){
                    if(movie[prop]){
                        var movProp = movie[prop];
                        resolve(movProp);
                    } else {
                        reject('ERROR 1');
                    }
                }
            });
            reject('ERROR 2');
        });
    }
    this.getActorById = function(){};
    this.getQuoteById = function(){};
    this.postMovieQuote = function(){};
    this.putMovieQuote = function(){};
    this.deleteMovieQuote = function(){};
}