## Requirements

*The project was developed on ubuntu 18.04 and all the instructions in this guide are based on this linux distribution.*
Before proceeding it is needed that you have installed on your machine the following tools:

1. nodejs => apt-get install nodejs
2. npm => apt-get install npm

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
