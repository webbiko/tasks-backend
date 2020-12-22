## Requirements

*The project was developed on ubuntu 18.04 and all the instructions in this guide are based on this linux distribution.*
Before proceeding it is needed that you have installed on your machine the following tools:

1. nodejs => apt-get install nodejs
2. npm => apt-get install npm
3. postgres configured:
 3.1 username used is postgres or you replace by your own in knexfile.js
 3.2 password for postgres must be "123456" or you replace by your own in knexfile.js
 3.3 database name must be tasks or you replace by your own in knexfile.js

**PS**: There is a file called install in root folder of this project that install postgres locally but you can also use [docker](https://hub.docker.com/_/postgres) 

---

## Env variables

In order to execute this project smoothly it is necessary to create a a file called **.env** with the following structure:

```javascript
module.exports = {
    authSecret: 'yourSecretGoesHere'
}

```
---

## Running the project in development mode

In order to run the project in development mode just type on terminal : **npm run start**

After the steps about the service should be up and running on port 3000.

---
