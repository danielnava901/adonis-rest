'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MysqSchema extends Schema {
  up () {
    this.create('mysqs', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('mysqs')
  }
}

module.exports = MysqSchema
