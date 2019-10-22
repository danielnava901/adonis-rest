'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovieSchema extends Schema {
  up () {
    this.create('movies', (table) => {
      table.increments();
      table.string('name', 50).notNullable();
      table.integer('rating');
      table.string('genere');
      table.integer('user_id', 11).unsigned().references('id').inTable('users');
      table.timestamps();
    })
  }

  down () {
    this.drop('movies')
  }
}

module.exports = MovieSchema
