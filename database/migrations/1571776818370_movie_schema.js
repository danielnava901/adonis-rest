'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieSchema extends Schema {
  up () {
    this.table('movies', (table) => {
      // alter table
      table.integer('mdb_id', 11);
    })
  }

  down () {
    this.table('movies', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MovieSchema
