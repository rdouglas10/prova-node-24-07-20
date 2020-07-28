const express = require("express");
const passport = require('passport');
const AuthController = require("./controllers/AuthController");
const ProfileController = require("./controllers/ProfileController");
const PersonController = require("./controllers/PersonController");

const routes = express.Router();

//http://localhost:3000/api-docs

/**
 * @swagger
 * info:
 * 	 description: "This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters."
 */

/**
 * @swagger
 * /signup:
 *  post:
 *    description: create a user
 *       
 */
routes.post("/signup", passport.authenticate('signup', { session: false }), AuthController.store);

/**
 * @swagger
 * /login:
 *  post:
 *    description: Sign in with email and password
 *       
 */
routes.post("/login", AuthController.index);

 /**
 * @swagger
 * /profile:
 *  post:
 *    description: access the route only with valid token
 *       
 */
routes.get("/profile", passport.authenticate('jwt', { session: false }), ProfileController.index);


/**
 * @swagger
 * /users:
 *  post:
 *    description: access the route to add a person
 *       
 */ 
routes.post("/users", passport.authenticate('jwt', { session: false }), PersonController.addPerson);


/**
 * @swagger
 * /users:
 *  get:
 *    description: access the route to list all people
 *       
 */
routes.get("/users", PersonController.allPeople);
module.exports = routes;


/**
 * @swagger
 * /users/:id:
 *  get:
 *    description: access the route to list one person
 *       
 */
routes.get("/users/:id", PersonController.onePerson);
module.exports = routes;


/**
 * @swagger
 * /users/:id:
 *  put:
 *    description: access the route to update one person
 *       
 */
routes.put("/users/:id", passport.authenticate('jwt', { session: false }), PersonController.updatePerson);
module.exports = routes;


/**
 * @swagger
 * /users/:id:
 *  delete:
 *    description: access the route to delete a person
 *       
 */
routes.delete("/users/:id", passport.authenticate('jwt', { session: false }), PersonController.deletePerson);
module.exports = routes;
