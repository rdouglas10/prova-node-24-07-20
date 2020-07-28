# Helpper Challenge - Backend NodeJS

## :page_with_curl: Summary

This project was developed as a prerequisite in the selection process for a backend developer vacancy. The purpose of the project is to provide an API to manage user crud.

## :necktie: The Business Roles

- Create a small application to manage users.

- The user can add, update, view all contacts and delete.

- The user cannot be deleted from the database (soft delete).

## :arrow_forward: Environment

You can run the application directly on your computer. Just have Node v12.16.1+ installed, mongodb v4.0.3.

Used libraries:

- [express](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/)
- [passportjs](https://www.passportjs.org/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [swagger](https://swagger.io/)
- [jest](https://jestjs.io/)
- [supertest](https://www.npmjs.com/package/supertest)
- [nodemon](https://nodemon.io/)
- [cors](https://www.npmjs.com/package/cors)

## :fire: Getting Started

These instructions will get this project up and running in your machine.

### :computer: Using your computer

### :wave: Prerequisites

> [Node](https://nodejs.org/pt-br/download/)

> [Mongodb](https://www.mongodb.com/try/download/community)


### :rocket: Installing

 - Clone the project:
```sh
$ git clone https://github.com/rdouglas10/prova-node-24-07-20.git 
```
  
- Access the project folder (terminal)
 ```sh
$ cd prova-node-24-07-20
```

- Change the line below in the .env file (project root)
```sh
$ MONGO_URI=your_url_from_MongoDB
```

- Install all packages mentioned above

- To execute access the project root run:
```sh
$ npm start
    OU
$ node app.js    
```

- URL Project: http://127.0.0.1:3000/ 

## :robot: API and Endpoints

The API has the following endpoints:

- `[POST] /signup`: Endpoint to create a um user with password.
```sh
Input data:

$ { "email": "fulano@gmail.com", "password": "123456" }
 ``` 

- `[POST] /login`: Endpoint to login e generate the token access.
```sh
Input data:

$ { "email": "fulano@gmail.com", "password": "123456" }
 ``` 

- `[GET] /profile`: Endpoint to test the validation token.
```sh
Input data:

$ { "autentication": "hash token" }
 ``` 
 
- `[POST] /users`: Endpoint to create a person (action possible only with token generated above). 
```sh
Input data:

$ { "name": "Beltrano", "email": "beltrano@gmail.com", "username": "beltrano_"}
 ```
 
- `[GET] /users`: Endpoint to list all people

- `[GET] /users/:id`: Endpoint to list all people

- `[DELETE] /users/:id`: Endpoint to delete a person (action possible only with token generated above). 

- `[PUT] /users/:id`: Endpoint to update a person (action possible only with token generated above). 
```sh
Input data:

$ { "name": "Beltrano", "email": "beltrano@gmail.com", "username": "beltrano_"}
 ```

## :battery: Future improvements and features

 - [ ] :cold_sweat: Improve documentation.
 - [ ] Create more tests cases.
 - [ ] Improve swagger documentation. [Doc Swagger](http://localhost:3000/api-docs)
 
 with more time we do more =)

