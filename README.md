# best-express-node-boilerplate
Best Node.js boilerplate created by expres.js

## Before start coding, you should know more about nodejs
- [NodeBestPractices] (https://github.com/goldbergyoni/nodebestpractices)
- [JavaScriptStyleGuide] (https://airbnb.io/javascript/)

## Other Node.js boilerplate you can choose:
- [node-api-boilerplate] (https://github.com/talyssonoc/node-api-boilerplate)
- [express-api-boilerplate-multiple-db] (https://github.com/DanishSiddiq/express-api-boilerplate-multiple-db)
- [hackathon-starter] (https://github.com/sahat/hackathon-starter)
- [node-express-mongoose-boilerplate] (https://github.com/hagopj13/node-express-mongoose-boilerplate)
- [node-express-postgresql-server] (https://github.com/rwieruch/node-express-postgresql-server)

## Features

- Express
- REST API
- MySQL
- Other Database

## Core Structure
    best-express-node-boilerplate
      ├── src
      │   ├── config
      │   │   > Set Normal config here
      │   │   > Set Additional config here
      │   │
      │   ├── loaders
      │   │   > Set connect local node modules here
      │   │
      │   ├──loggers
      │   │   > Set get log here ,ex:line, slack, mail
      │   │
      │   ├──misc
      │   │   > Put the misc settings here
      │   │
      │   ├──models
      │   │   > Set database models here
      │   │
      │   ├──notifications
      │   │   > Put the notifications settings here
      │   │
      │   ├──resolvers
      │   │   > Put the resolvers settings here
      │   │
      │   ├──routes
      │   │   > Put the route settings here
      │   │
      │   └── index.js
      │
      ├── .babelrc    
      │      
      ├── .env
      │
      ├── .eslint.js      
      │
      ├── .gitattributes       
      │      
      ├── .gitignore          
      │         
      ├── .prettierrc          
      │         
      ├── .travis.yml          
      │       
      ├── config-overrides.js           
      │       
      ├── jsconfig.json            
      │      
      ├── package.json           
      │      
      ├── tsconfing.json        
      │      
      └── README.md (you are here)

### Quick Start ###
* Install node.js: https://nodejs.org​
* Install yarn package manager: https://yarnpkg.com/​
* Copy .env.example to .env , then put database config into .env file
* Start MySQL the app
* Install node modules by running terminal command `yarn install`
* Run the app `yarn start`


### GET Routes

- visit http://localhost:3000
  - /messages
  - /messages/1
  - /users
  - /users/1

### Beyond GET Routes

#### CURL

- Create a message with:
  - `curl -X POST -H "Content-Type:application/json" http://localhost:3000/messages -d '{"text":"Hi again, World"}'`
- Delete a message with:
  - `curl -X DELETE -H "Content-Type:application/json" http://localhost:3000/messages/1`
#### Postman

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API
- Create a message with:
  - URL: http://localhost:3000/messages
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "text": "Hi again, World" }`
- Delete a message with:
  - URL: http://localhost:3000/messages/1
  - Method: DELETE
