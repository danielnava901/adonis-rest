'use strict'

const Movie = use('App/Models/Movie');
const List = use('App/Models/List');

class ListUserController {

  async index({request, auth}) {
    try {
      let user = await auth.getUser();
      let lists = [];
      if(user) {
          lists = await user.lists().fetch();

          if( lists.length ) {
              console.log("si hay lists...", lists);
          }
      }
      
      return {
          code: 201,
          lists
      }
    }catch(e) {
        console.log("[Error] ", e);
        return {
            code: 501
        }
    }
  }

  async save() {

  }

  async update() {
    
  }

  async remove() {
    
  }
}

module.exports = ListUserController
