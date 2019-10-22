'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Movie extends Model {

  user() {
    return this.belongsToMany('App/Models/User').pivotTable('movie_users');
  }

  category() {
    return this.belongsTo('App/Models/Category');
  }
}

module.exports = Movie
