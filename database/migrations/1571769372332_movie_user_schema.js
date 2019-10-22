'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieUserSchema extends Schema {
  up () {
    this.create('movie_users', (table) => {
      table.integer('movie_id', 11).unsigned().references('id').inTable('movies');
      table.integer('user_id', 11).unsigned().references('id').inTable('users');
      table.timestamps()
    })
  }

  down () {
    this.drop('movie_users')
  }
}

module.exports = MovieUserSchema
