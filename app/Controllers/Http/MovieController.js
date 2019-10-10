'use strict'

const Movie = use('App/Models/Movie');

class MovieController {

  async index({request, auth}) {
    const movies = await Movie.all();
    
    console.log("check");

    return {
      code: 200,
      movies
    };
  }

  async get({params, request}) {
    const {id} = params;
    const movie = await Movie.find(id);
    
    return {
      code: 200,
      movie
    }
  }

  async update({params, request}) {
    const {id} = params;
    const {name, rating} = request.all();

    const movie = await Movie.find(id);

    movie.name = name;
    movie.rating = rating;

    movie.save();

    return {
      code: 200,
      movie
    };
  }

  async store({request}) {
    const {name, rating} = request.all();

    const movie = new Movie();
    movie.name = name;
    movie.rating = rating;

    await movie.save();

    return {
      code: 200,
      movie
    }
  }

}

module.exports = MovieController
