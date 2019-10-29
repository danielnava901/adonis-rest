'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class List extends Model {

  user() {
    return this.belongsToMany('App/Models/User').pivotTable('list_users');
  }
}

module.exports = List
