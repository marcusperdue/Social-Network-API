<div align="center">

  <img src="https://github.com/marcusperdue/Regular-Expressions-Email-Validation/raw/main/assets/logo.png" alt="Logo" width="100">

# Social-Network-API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=fff&style=flat)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=fff&style=flat)](https://mongoosejs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)

## Description

The Social-Network-API is a backend solution for building social network web applications. It allows users to share their thoughts, interact with friends' thoughts, and manage their friend lists. This API is designed for developers who want to create social networking platforms and provides a solid foundation for handling user accounts, thoughts, reactions, and friend connections
</div>

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo)
* [License](#license)
* [Contact](#contact)

## Installation
 
To install and run this API on your local machine, follow these steps:

1. Clone the repository to your local machine using the following command:
``` git clone https://github.com/marcusperdue/Social-Network-API.git ```

2. Navigate to the project's root directory.

3. Install the project dependencies using npm.

4. Ensure you have MongoDB installed and running on your local machine.

5. Start the Express.js server.

6. The API will be available at http://localhost:3001 by default.

7. You can use an API client like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to test the API endpoints.

## Usage

### Users

- **GET all users**: `/api/users`
- **GET a single user by ID**: `/api/users/:userId`
- **POST a new user**: `/api/users`
  ```json
  {
    "username": "exampleUser",
    "email": "user@example.com"
  }
  ```
- **PUT update a user by ID**:`/api/users/:userId`
- **DELETE remove a user by ID**: `/api/users/:userId`
 
### Thoughts
- **GET all thoughts**: `/api/thoughts`
- **PUT update a user by ID**:`/api/users/:userId`
- **GET a single thought by ID**: `/api/thoughts/:thoughtId`
- **PUT update a user by ID**:`/api/users/:userId`
- **PUT update a user by ID**:`/api/users/:userId`
- **POST create a new thought**:
```json

 {
  "thoughtText": "This is a new thought.",
  "username": "exampleUser",
  "userId": "user_id_here"
}
```
### Reactions
- **POST create a reaction to a thought**: `/api/thoughts/:thoughtId/reactions`
 ```json
{
  "reactionBody": "This is a reaction.",
  "username": "exampleUser"
}
```
- **DELETE remove a reaction by reaction ID**: `/api/thoughts/:thoughtId/reactions/:reactionId`

### Friends
- **POST add a friend**: `http://localhost:3001/api/:userId/friends/:friendId`
- **DELETE a friend**: `http://localhost:3001/api/:userId/friends/:friendId`


# Demo
[![Demo](/assets/images/screenshot.png)](https://drive.google.com/file/d/1UYF7nTwWMVYwAT6J4YKFZASeVGa9xqQf/view)


Watch the [DEMO VIDEO](https://drive.google.com/file/d/1UYF7nTwWMVYwAT6J4YKFZASeVGa9xqQf/view) to see how the API works.

## License

[MIT License](https://opensource.org/licenses/MIT)

 

 ## Contact

<div style="margin: 0 15px;">
    <a href="https://github.com/marcusperdue">
      <img src="https://avatars.githubusercontent.com/marcusperdue?s=100" alt="marcusperdue's Avatar" width="100"  style="box-shadow: 3px 3px 3px black;">
    </a>
    <br>
    <a href="https://github.com/marcusperdue">marcusperdue</a>
</div>

</div>