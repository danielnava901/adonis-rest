'use strict'

const User = use('App/Models/User');

class UserController {
<<<<<<< HEAD
    async store({ request }) {
        const { username, email, password } = request.all();

=======
    async store({request}) {
        console.log("intentando registrar...");
        const {username, email, password} = request.all();
        
>>>>>>> c0a3e546e68355f039304ba4307501109b620e16
        const user = await User.create({
            username,
            email,
            password
        });

        return this.login(...arguments);
    }

<<<<<<< HEAD
    async login({ request, auth }) {
        const { email, password } = request.all();
=======
    async login({request, auth}) {
        console.log("intentando login...");
        const {email, password} = request.all();
        console.log("email", email);
        console.log("password", password);
>>>>>>> c0a3e546e68355f039304ba4307501109b620e16
        const token = await auth.attempt(email, password);

        console.log("encontro token", token);
        return token;
    }

    async get({ params, request }) {
        const { id } = params;
        const user = User.find(id);

        return {

        };

    }
}

module.exports = UserController
