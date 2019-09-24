'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieSchema extends Schema {
  up () {
    this.create('movies', (table) => {
      table.increments();
      table.string('name', 50).notNullable();
      table.integer('rating');
      table.timestamps();
    })
  }

  down () {
    this.drop('movies')
  }
}

module.exports = MovieSchema
