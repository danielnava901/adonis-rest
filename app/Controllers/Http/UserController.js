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
            let jwt = await auth.attempt(email, password);
            let user = await auth.getUser();
            console.log("user", user);
            return {
                code: 200,
                jwt,
                user
            };

        }catch(e) {
            return {
                code: 401,
                msg: "user not found"
            }
        }
        
    }

    async profile({request, auth}) {
        const {user} = request.all();
        try {
            let jwt = await auth.attempt(email, password);
            console.log("user refresh", jwt);
            const refreshuser = User.find(user.id);

            return {
                code: 200,
                jwt,
                user: refreshuser
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
            code: 200,
            user
        };

    }
}

module.exports = UserController
