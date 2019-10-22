'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddCategoryInMovieSchema extends Schema {
  up () {
    this.alter('movies', (table) => {
      // alter table
      table.integer('category_id', 11).unsigned().references('id').inTable('categories');
    })
  }

  down () {
    this.alter('movies', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddCategoryInMovieSchema
