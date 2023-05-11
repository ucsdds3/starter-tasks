
# Backend Task One
This task is to create a simple server in JavaScript that handles `GET`, `POST`,  and `DELETE` request methods. These methods are the basics of any CRUD application. To see a working example of this task follow the [setup](#setup-of-example-of-task ) below.

## Table of Contents
- [Task](#task)
- [Getting Started](#getting-started)
- [HTTP Methods](#http-methods)
	- [`GET`](#get)
	- [`POST`](#post)
	- [`DELETE`](#delete)
- [Setup of Example of Task](#setup-of-example-of-task)

## Task
You will create a CRUD application in JavaScript using [Express.js](https://expressjs.com/), an easy way to handle HTTP commands. You will interface and perform reads, deletes, and updates with a dummy database in the form of a `database.json` file. Below are the following requests and their expected responses. All requests will be to the `/` or "root" endpoint.

## Getting Started
These steps should point you in the right direction to get your environment setup.
1. Create a GitHub repository. Clone and `cd` into it.
```bash
$ git clone https://github.com/jonathanlo411/temp.git
Cloning into 'temp'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.
$ cd temp
```
2. Install  [Node.js](https://nodejs.org/en) if you do not already have it. Create your express app following the steps [here](https://expressjs.com/en/starter/generator.html).

```bash
$ npx express-generator

  warning: the default view engine will not be jade in future releases
  warning: use `--view=jade' or `--help' for additional options

destination is not empty, continue? [y/N] y

   create : public\
   create : public\javascripts\
   create : public\images\
   create : public\stylesheets\
   create : public\stylesheets\style.css
   create : routes\
   create : routes\index.js
   create : routes\users.js
   create : views\
   create : views\error.jade
   create : views\index.jade
   create : views\layout.jade
   create : app.js
   create : package.json
   create : bin\
   create : bin\www

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=temp:* npm start

$ npm install
npm WARN deprecated transformers@2.1.0: Deprecated, use jstransformer
npm WARN deprecated constantinople@3.0.2: Please update to at least constantinople 3.1.1
npm WARN deprecated jade@1.11.0: Jade has been renamed to pug, please install the latest version of pug instead of jade

added 99 packages, and audited 100 packages in 3s

1 package is looking for funding
  run `npm fund` for details

8 vulnerabilities (1 low, 4 high, 3 critical)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```
3. (Optional) If you would like to set up [hot-reloading](https://hashnode.com/post/what-is-hot-reloading-exactly-is-it-just-another-fancy-term-for-live-reloading-cirvu9avg0c8mmk53b5zxr3ga),  use Nodemon and setup the script by adding `nodemon` before the `node ./bin/www` in the `package.json`. An example is shown below
```bash
npm install --save-dev nodemo
```
```json
// package.json
{
  "name": "temp",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "nodemon node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "morgan": "~1.9.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
```
4. Start a local environment using `npm start`. This will open a connection on port 3000. Access it under `127.0.0.1:3000` or `localhost:3000`.
5. Install the "database" JSON file and move it to the root of the project directory. You can download if from [here](https://github.com/ucsdds3/starter-tasks-backend-1/blob/main/database.json).
6. Edit the router in `/routes/index.js`. Use the [Express.js documentation](https://expressjs.com/en/4x/api.html#req).
7. For testing use Postman to send requests and receive responses. An example is show below.
![postmanex](https://cdn.discordapp.com/attachments/942218891952783421/1106029460962148423/image.png)

## HTTP Methods
### `GET`
- **Request Details**
	- Query Parameters: None
	- Headers: None
	- Body: None
```json
// Response
{
    "success": 1,
    "message": "Get Request Recieved",
    "data": [
        {
            "title": "Fahrenheit 451",
            "author": "Ray Bradbury",
            "score": 7.1
        },
        {
            "title": "Iliad",
            "author": "Homer",
            "score": 3.2
        },
        {
            "title": "Macbeth",
            "author": "William Shakespeare",
            "score": 5.8
        },
        {
            "title": "Lord of the Flies",
            "author": "William Golding",
            "score": 5.1
        },
        {
            "title": "Brave New World",
            "author": "Aldous Huxley",
            "score": 6.3
        }
    ]
}
```

### `POST`
- **Request Details**
	- Query Parameters: 
		- `key`: `sample_key`
	- Headers:
		- `Content-Type`: `application/json`
	- Body: 
		- `raw`: *see below*
```json
// Body Request
{
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "score": 9.2
}
```
```json
// Response
{
    "success": 1,
    "message": "Post Successful",
    "data": [
        {
            "title": "Fahrenheit 451",
            "author": "Ray Bradbury",
            "score": 7.1
        },
        {
            "title": "Iliad",
            "author": "Homer",
            "score": 3.2
        },
        {
            "title": "Macbeth",
            "author": "William Shakespeare",
            "score": 5.8
        },
        {
            "title": "Lord of the Flies",
            "author": "William Golding",
            "score": 5.1
        },
        {
            "title": "Brave New World",
            "author": "Aldous Huxley",
            "score": 6.3
        },
        {
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "score": 9.2
        },
        {
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "score": 9.2
        }
    ]
}
```

### `DELETE`
- **Request Details**
	- Query Parameters: 
		- `key`: `sample_key`
		- `title`: *title of target deletion* (`Brave New World`)
	- Headers:  None
	- Body: None
```json
// Response
{
    "success": 1,
    "message": "Delete Successful",
    "data": [
        {
            "title": "Fahrenheit 451",
            "author": "Ray Bradbury",
            "score": 7.1
        },
        {
            "title": "Iliad",
            "author": "Homer",
            "score": 3.2
        },
        {
            "title": "Macbeth",
            "author": "William Shakespeare",
            "score": 5.8
        },
        {
            "title": "Lord of the Flies",
            "author": "William Golding",
            "score": 5.1
        }
    ]
}
```

### Failure
If any of the requests fail, there should be a JSON response as show below with the status code of 403.
```json
// Response
{
    "success": 0,
    "message": "<method> Unsuccessful"
}
```


## Setup of Example of Task
**Note: This is a completed version of the task and should only be used to make comparisons when confused on the task. You can also use it to test various responses against it. The example, however, is NOT something your should copy from.*
1. Clone the [repository](https://github.com/ucsdds3/starter-tasks-backend-1).
```bash
git clone https://github.com/ucsdds3/starter-tasks-backend-1
```
2. Install [Node.js](https://nodejs.org/en).
3. `cd` into the directory and install.
```bash
cd starter-tasks-backend-1
npm install
```
4. Run the server. [Nodemon](https://nodemon.io/) is setup for hot reloading.
```bash
npm start
// or
nodeman node ./bin/www
```
5. Use Postman or an API client of your choice to test the example methods.