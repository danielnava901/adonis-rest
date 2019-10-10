'use strict'

const User = use('App/Models/User');

class UserController {
    async store({request}) {
        console.log("intentando registrar...");
        const {username, email, password} = request.all();
        
        const user = await User.create({
            username,
            email,
            password
        });

        return this.login(...arguments);
    }

    async login({request, auth}) {
        console.log("intentando login...");
        const {email, password} = request.all();
        console.log("email", email);
        console.log("password", password);
        const token = await auth.attempt(email, password);

        console.log("encontro token", token);
        return token;
    }
}

module.exports = UserController
