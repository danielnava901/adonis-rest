'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieUserSchema extends Schema {
  up () {
    this.table('movie_users', (table) => {
      // alter table
      table.integer('score', 11);
    })
  }

  down () {
    this.table('movie_users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MovieUserSchema
