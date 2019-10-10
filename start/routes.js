'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route');

Route.group(() => {
  Route.post('register', 'UserController.store');
  Route.post('login', 'UserController.login');
  Route.get('/:id', 'UserController.get').middleware(['auth']);
}).prefix('api/v1/user'); 


Route.group(() => { 
  Route.get('/',    'MovieController.index').middleware(['auth']); 
  Route.get('/:id', 'MovieController.get').middleware(['auth']); 
  Route.put('/:id', 'MovieController.update').middleware(['auth']); 
  Route.post('new', 'MovieController.store').middleware(['auth']); 

}).prefix('api/v1/movie');