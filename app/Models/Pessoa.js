'use strict'

const Model = use('Model')

class Pessoa extends Model {
  pessoa () {
    return this.hasMany(Model, pk, fk)
  }
}

module.exports = Pessoa
