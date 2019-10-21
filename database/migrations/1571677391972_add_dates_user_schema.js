'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddDatesUserSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      // alter table
      table.datetime('last_login');
      table.datetime('last_move');
    })
  }

  down () {
    this.alter('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddDatesUserSchema
