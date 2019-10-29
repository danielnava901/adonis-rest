'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListUserSchema extends Schema {
  up () {
    this.create('list_users', (table) => {
      table.integer('user_id', 11).unsigned().references('id').inTable('users');
      table.integer('list_id', 11).unsigned().references('id').inTable('lists');
    })
  }

  down () {
    this.drop('list_users')
  }
}

module.exports = ListUserSchema
