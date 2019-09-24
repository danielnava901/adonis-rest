'use strict'

const User = use('App/Models/User');

class UserController {
    store({request}) {
        const {username, email, password} = request.all();
        
        const user = User.create({
            username,
            email,
            password
        });

        return user;
    }
}

module.exports = UserController
