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
  Route.post('login', 'UserController.login');
  Route.post('register', 'UserController.store');
  Route.post('profile', 'UserController.profile').middleware(['auth']);
  Route.get('/:id', 'UserController.get').middleware(['auth']);
}).prefix('api/v1/user'); 

Route.group(() => { 
  Route.get('/',    'MovieController.index').middleware(['auth']); 
  Route.get('/:id', 'MovieController.get').middleware(['auth']); 
  Route.put('/:id', 'MovieController.update').middleware(['auth']); 
  Route.post('new', 'MovieController.store').middleware(['auth']); 
}).prefix('api/v1/movie');

/** ---------------------------------- */

Route.group(() => {
  Route.post('/', 'MovieUserController.index').middleware(['auth']);
  Route.post('/add', 'MovieUserController.add').middleware(['auth']);
}).prefix('api/v1/movieUser'); 


/**
 * Rutas para crear listas, actualiar o remover
 * 
 */
Route.group(() => { 
  Route.get('/',    'ListUserController.index').middleware(['auth']); 
  Route.post('/save', 'ListUserController.save').middleware(['auth']); 
  Route.post('/update', 'ListUserController.update').middleware(['auth']); 
  Route.post('/remove', 'ListUserController.remove').middleware(['auth']); 
  
}).prefix('api/v1/list');

Route.group(() => { 
  Route.get('/',    'ListMovieController.index').middleware(['auth']); 
  Route.post('/add', 'ListMovieController.add').middleware(['auth']); 
  Route.post('/createAdd', 'ListMovieController.createAdd').middleware(['auth']); 
  Route.post('/update', 'ListMoveController.update').middleware(['auth']); 
  Route.post('/remove', 'ListMovieController.remove').middleware(['auth']); 
  
}).prefix('api/v1/listMovie');
