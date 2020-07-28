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
 *    tags:
 *    - "signup"
 *    summary: "Endpoint to create a user for auth"
 *    description: "Uses email and password to create"
 *    operationId: "store"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - name: "username"
 *      in: "query"
 *      description: "The user name for store"
 *      required: true
 *      type: "string"
 *    - name: "password"
 *      in: "query"
 *      description: "The password for store in clear text"
 *      required: true
 *      type: "string"
 *    
 */

routes.post("/signup", passport.authenticate('signup', { session: false }), AuthController.store);

/**
 * @swagger
 * /login:
 *  post:
 *    tags:
 *    - "login"
 *    summary: "Endpoint to logs user into the system"
 *    description: "Uses email and password to access"
 *    operationId: "login"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - name: "username"
 *      in: "query"
 *      description: "The user name for login"
 *      required: true
 *      type: "string"
 *    - name: "password"
 *      in: "query"
 *      description: "The password for login in clear text"
 *      required: true
 *      type: "string"
 *    
 */
routes.post("/login", AuthController.index);

 /**
 * @swagger
 * /profile:
 *  post:
 *    tags:
 *    - "profile"
 *    summary: "Endpoint access the route only with valid token"
 *    description: "Uses token, email and password to access"
 *    operationId: "login"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Test token validation params"
 *      required: true
 *      schema:
 * 		  type: "array"
 *        items:
 *          $ref: "#/definitions/Profile"
 *    responses:
 *      '200':
 *        description: "OK"
 *        content:
 *          text/plain:
 *              schema:
 *              type: "string"
 *      '400':
 *        description: "ERROR"
 *        content:
 *          text/plain:
 *              schema:
 *              type: "string"
 *  definitions:
 *    Profile:
 *      type: "object"
 *      properties:
 *        id:
 *          type: "integer"
 *          format: "int64"
 *        token:
 *          type: "string" 		 
 *        email:
 *          type: "string"
 *        password:
 *          type: "string"
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
