'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterUserSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      // alter table
      table.boolean('active').defaultTo(true)
    })
  }

  down () {
    this.alter('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterUserSchema
