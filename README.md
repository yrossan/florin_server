# Florin County API

## Description
This project is an API built for our solution to [this brief](https://gist.github.com/rom-30/81fb9447b48abf3b6d72aff121014296) 

# Installation & Usage
## Installation
1. Open up ```GitBash``` terminal and navigate to the directory you wish to store the project in
2. Clone the repo to your folder using this command
```
git clone git@github.com:yrossan/florin_server.git
```
3. Navigate to the ```florin-server``` folder using this command
```
cd florin_server/
```
4. Install required packages using this command
```
npm install
```
5. Create a ```SQL``` database and and get the connection URL we would recommend ```elephantSQL``` but you can use another method
6. Open your code editor by running this command in your GitBash terminal
```
code .
```
7. Create a ```.env``` file in the ```florin_server/``` add your connection URL in a ```DB_URL``` variable and the port you wish the server to listen on in a ```PORT``` variable as shown below
```js

DB_URL='postgres://username:password@horton.db.elephantsql.com/dbname'
PORT=3000

```
7. Setup the database with mock data by running this command in your GitBash terminal
```
npm run setup-db
```
8. Now you can run the server with this command
```
npm run dev
```
9. You are now ready to start using the API endpoints


## Usage
### API Endpoints
### posts/
- ```GET /posts``` = All posts
- ```GET /posts/:id``` = Find post by id
- ```GET /posts/services``` = All posts with ‘Services’ category
- ```GET /posts/events``` = All posts with ‘Events’ category
- ```GET /posts/jobs``` = All posts with ‘Jobs’ category
- ```GET /posts/voluntary``` = All posts with ‘Voluntary Work’ category
- ```GET /posts/announcements``` = All posts with ‘Announcements’ category
- ```GET /posts/clubs``` = All posts with ‘Clubs’ category
#### Requires authentication
- ```DELETE /posts/:id``` = delete a post by id 
- ```POST /posts``` = create a new post with POST request

#### POST /posts required request body to create new post
```js 
 {
    "title": "Title", // Post title
    "content": "Main content for post", // Main section of the post
    "category": "Services", // must be one of preset categories from GET/posts/... routes
    "author_id": 1, // must be user_id of current user
    "post_date": "2023-05-11" // must be in YYY-MM-DD format
  }

```
### users/
- ```POST /users/register``` = register user
#### POST /users/register required request body to to register a user
```js
{
    "username": "User1", // The users username
    "password": form.get("password"), // The users password
    "isAdmin": isAdminResult, // Optional must be 1 or 0 for true and false respectively
    "isBusiness": isBusinessResult, // Optional must be 1 or 0 for true and false respectively
}
```
- ```POST /users/login``` = login user
#### POST /users/register required request body to to register a user
```js
{
      "username": "username", // The users Username
      "password": "password", // The users password
}
```
### Requires authentication
- ```DELETE /users/logout``` = removes all tokens from database where user_id matches current users token user_id
### comments/
- ```GET /comments/:id``` = All comments with post_id = id

# Technologies
### Dependencies
- express
- bcrypt
- cors
- dotenv
- morgan
- pg
- uuid
### Dev Dependencies
- jest
- nodemon
- supertest

# Bugs
- No known bugs



# License

MIT License:  see [the `LICENSE` file](https://github.com/PiroAvni/Lab1_GeoStory_Server/blob/main/LICENSE).