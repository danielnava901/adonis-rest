'use strict'

const User = use('App/Models/User');

class UserController {
    async store({ request }) {
        const { username, email, password } = request.all();

        const user = await User.create({
            username,
            email,
            password
        });

        return this.login(...arguments);
    }

    async login({ request, auth }) {
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);

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
