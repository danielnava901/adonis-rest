'use strict'

const User = use('App/Models/User');
const Movie = use('App/Models/Movie');

class UserController {
    async store({request}) {
        console.log("intentando registrar...");
        const {username, email, password} = request.all();
        
        try {
            console.log("user creating: ");
            let user = await User.create({
                username,
                email,
                password
            });
            
            let loginReturn = await this.login(...arguments);
            
            return {
                ...loginReturn            
            };
        }catch(e) {
            console.log("[store error]", e);
            return {
                code: 401,
                msg:  `${email} is occupied`
            }; 
        }
    }

    async login({request, auth}) {
        const {email, password} = request.all();
        console.log(email, password);
        try {
            let jwt = await auth.attempt(email, password);
            
            return {
                code: 200,
                jwt
            };

        }catch(e) {
            console.log("[Error] ", e);
            return {
                code: 401,
                msg: "user not founda"
            }
        }
        
    }

    async profile({request, auth}) {
        const {user} = request.all();
        try {
            let jwt = await auth.attempt(email, password);            
            const refreshuser = await auth.getUser();

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
            code: 202,
            user
        };

    }

    async setMovie({request, auth}) {
        try {
            let {movieId} = request.all();
            console.log("movieId", movieId);
            let user = await auth.getUser();
            console.log("user", !!user);
            if(user) {
                let movie = await Movie.find(movieId);
                console.log("movie", movie);
                if( movie ) {
                    user.movies().fetch();
                }
                
            }
            
            return {
                code: 201
            }
        }catch(e) {

        }
    }
}

module.exports = UserController
