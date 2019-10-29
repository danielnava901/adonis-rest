'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListSchema extends Schema {
  up () {
    this.create('lists', (table) => {
      table.increments();
      table.integer('user_id', 11).unsigned().references('id').inTable('users');
      table.string('name');
      table.timestamps();
    })
  }

  down () {
    this.drop('lists')
  }
}

module.exports = ListSchema
