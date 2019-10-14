'use strict'

const User = use('App/Models/User');

class UserController {
    async store({request}) {
        console.log("intentando registrar...");
        const {username, email, password} = request.all();
        const user = null
        try {
            user = await User.create({
                username,
                email,
                password
            });
            return this.login(...arguments);
        }catch(e) {
            console.log("[store error]", e);
            return {
                code: 401,
                msg: "user exist"
            }; 
        }
    
        
    }

    async login({request, auth}) {
        const {email, password} = request.all();
        try {
            let user = await auth.attempt(email, password);
            console.log("user", user);
            return {
                code: 200,
                user
            };
        }catch(e) {
            return {
                code: 401,
                msg: "user not found"
            }
        }
        
    }

    async get({ params, request }) {
        const { id } = params;
        const user = User.find(id);

        return {

        };

    }
}

module.exports = UserController
