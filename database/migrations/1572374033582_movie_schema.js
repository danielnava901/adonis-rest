'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieSchema extends Schema {
  up () {
    this.table('movies', (table) => {
      // alter table
      table.boolean("is_favorite", 0);
    })
  }

  down () {
    this.table('movies', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MovieSchema
