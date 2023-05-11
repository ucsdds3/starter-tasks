
# Backend Task Two
This task is to create a simple server in Python that handles `GET`, `POST`,  and `DELETE` request methods. These methods are the basics of any CRUD application. To see a working example of this task follow the [setup](#setup-of-example-of-task ) below.

## Table of Contents
- [Task](#task)
- [Getting Started](#getting-started)
- [HTTP Methods](#http-methods)
	- [`GET`](#get)
	- [`POST`](#post)
	- [`DELETE`](#delete)
- [Setup of Example of Task](#setup-of-example-of-task)

## Task
You will create a CRUD application in Python using [Flask](https://flask.palletsprojects.com/en/2.3.x/), an easy way to handle HTTP commands. You will interface and perform reads, deletes, and updates with a dummy database in the form of a `database.json` file. Below are the following requests and their expected responses. All requests will be to the `/` or "root" endpoint.

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
2. If you do not yet have Python, install it from [here](https://www.python.org/downloads/). At the time of writing, I am using "Python 3.11.0". Create a Python virtual environment using `venv` and activate it.    
```bash
python3 -m venv venv
source venv/Scripts/activate

// Sometimes setup is different 
source venv/bin/activate
```
3. Install Flask into your virtual environment.
```bash
pip install Flask 
```
4. Install the "database" JSON file and move it to the root of the project directory. You can download if from [here](https://github.com/ucsdds3/starter-tasks-backend-1/blob/main/database.json).
5. Create your server file. You can name it whatever you want but in this case, I use `server.py`. 
6. Inside your Python file, import Flask and JSON as depicted in the code block. In addition, initialize your Flask app.
```python
# Imports
from flask import Flask, request
from json import load, dump

# Init Flask app
app = Flask(__name__)
```
7. Start your Flask server and begin to edit your file using the [Flask documentation](https://flask.palletsprojects.com/en/2.3.x/api/).
```bash
flask --app <your_py_file.py> --debug run
```
9. For testing use Postman to send requests and receive responses. An example is show below.
![postmanex](https://cdn.discordapp.com/attachments/942218891952783421/1106093606042869790/image.png)

## HTTP Methods
### `GET`
The `GET` method will query the database and return all items. Authentication is not required.
- **Request Details**
	- Query Parameters: None
	- Headers: None
	- Body: None
```json
// Response
{
    "data": [
        {
            "author": "Ray Bradbury",
            "score": 7.1,
            "title": "Fahrenheit 451"
        },
        {
            "author": "Homer",
            "score": 3.2,
            "title": "Iliad"
        },
        {
            "author": "William Shakespeare",
            "score": 5.8,
            "title": "Macbeth"
        },
        {
            "author": "William Golding",
            "score": 5.1,
            "title": "Lord of the Flies"
        },
        {
            "author": "Aldous Huxley",
            "score": 6.3,
            "title": "Brave New World"
        }
    ],
    "message": "GET Request Recieved",
    "success": 1
}
```

### `POST`
The `POST` method will add an additional item to the database. Authentication is required in the form of a query parameter of `key`. The value should be set to `sample_key` and if it is not, should return an error. The JSON data of the additional item to be added will be put into the body (see example below). In addition, the `Content-Type` in the headers should be set to `application/json`.
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
    "data": [
        {
            "author": "Ray Bradbury",
            "score": 7.1,
            "title": "Fahrenheit 451"
        },
        {
            "author": "Homer",
            "score": 3.2,
            "title": "Iliad"
        },
        {
            "author": "William Shakespeare",
            "score": 5.8,
            "title": "Macbeth"
        },
        {
            "author": "William Golding",
            "score": 5.1,
            "title": "Lord of the Flies"
        },
        {
            "author": "Aldous Huxley",
            "score": 6.3,
            "title": "Brave New World"
        },
        {
            "author": "Harper Lee",
            "score": 9.2,
            "title": "To Kill a Mockingbird"
        }
    ],
    "message": "POST Request Recieved",
    "success": 1
}
```

### `DELETE`
The `DELETE` method will remove all entries of books with the provided title. Authentication is required in the form of a query parameter of `key`. The value should be set to `sample_key` and if it is not, should return an error. An additional query parameter of `title` should be present in the request. The value will be set to the target of deletion.
- **Request Details**
	- Query Parameters: 
		- `key`: `sample_key`
		- `title`: *title of target deletion* (`Brave New World`)
	- Headers:  None
	- Body: None
```json
// Response
{
    "data": [
        {
            "author": "Ray Bradbury",
            "score": 7.1,
            "title": "Fahrenheit 451"
        },
        {
            "author": "Homer",
            "score": 3.2,
            "title": "Iliad"
        },
        {
            "author": "William Shakespeare",
            "score": 5.8,
            "title": "Macbeth"
        },
        {
            "author": "William Golding",
            "score": 5.1,
            "title": "Lord of the Flies"
        },
        {
            "author": "Aldous Huxley",
            "score": 6.3,
            "title": "Brave New World"
        }
    ],
    "message": "DELETE Request Recieved",
    "success": 1
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
1. Clone the [repository](https://github.com/ucsdds3/starter-tasks-backend-2) and `cd` into it.
```bash
git clone https://github.com/ucsdds3/starter-tasks-backend-2
cd starter-tasks-backend-2
```
2. Create a virtual environment and activate it. In addition, install the requirements via the `requirements.txt`.
```bash
python3 -m venv venv
source venv/Scripts/activate
pip install -r requirements.txt
```
3. Start the Flask server.
```bash
flask --app server run
```
5. Use Postman or an API client of your choice to test the example methods.