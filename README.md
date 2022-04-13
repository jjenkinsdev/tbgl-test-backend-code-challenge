# Code challenge APP

MVP ask is to create a RESTful API with full CRUD functionality around a User object using a Node.js. For this project we used express as the backend framework which uses mongoose ODM to interact with a MongoDB instance. 

# Example User model
```
{
  "id": "xxx",                  // user ID 
  "name": "test",               // user name
  "dob": "",                    // date of birth
  "address": "",                // user address
  "description": "",            // user description
  "createdAt": ""               // user created date
}
```
## Requirements
Node 16
## Common Setup
```
git clone https://github.com/jjenkinsdev/tbgl-test-backend-code-challenge.git
cd my-app
```
```
npm install
```
## Run app locally
This command will need to be ran in the projects root directory
```
node server.js
```
## POST
create a user using **curl** /user
```
curl --location --request POST 'localhost:3000/user/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "1",
    "name":"Bob",
    "dob": "2022-01-01",
    "address": "123 park lane",
    "description": "test description"
}'
```
## GET
get a list of all users using **curl** /users
```
curl --location --request GET 'localhost:3000/users/' \
--data-raw ''
```
## PATCH
update a record using **curl** /user/{_id}

you will need to copy _id from the response body after making a POST like the above POST.

ex. 6256680396da71c92b3ae3e9
```
curl --location --request PATCH 'localhost:3000/user/62566a6596da71c92b3ae3ec' \
--header 'Content-Type: application/json' \
--data-raw '{
    "UD":1
    "address": "123 park lane update"
}'
```
## DELETE
Delete a user using **curl** /users/{_id}

```
curl --location --request DELETE 'localhost:3000/user/62566a6596da71c92b3ae3ec' \
--data-raw ''
```