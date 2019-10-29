'use strict'

const User = use('App/Models/User');
const Movie = use('App/Models/Movie');

class MovieUserController {

  async index({request, auth}) {
    try {
        let user = await auth.getUser();
        let movies = null;
        
        if(user) {
            movies = await user.movies().fetch();
        }
        
        return {
            code: 201,
            movies
        }
    }catch(e) {
        return {
            code: 401,
            movies
        }
    }
  }

  async add({request, auth}) {
    try {
        let {movieId} = request.all();
        let user = await auth.getUser();
        if(user) {
            let movie = await Movie.find(movieId);
            if( movie ) {
                console.log("si hay movie...", movieId);
                await user.movies().attach([movie.id]);
            }
        }
        
        return {
            code: 201
        }
    }catch(e) {
        console.log("[Error] ", e);
        return {
            code: 501
        }
    }
  }
}

module.exports = MovieUserController
