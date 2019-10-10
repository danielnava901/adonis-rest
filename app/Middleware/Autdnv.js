'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Autdnv {

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, auth }, next) {
    // call next to advance the request
    try {
      await auth.check();

      await next();
    }catch(e) {
      console.log("cath error", e);
      return {
        code: 401,
        msg: 'unauthorized dnv'
      }
    }
    
  }
}

module.exports = Autdnv
