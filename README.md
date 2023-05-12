# florin_server
## description
This project is an API built for our solution to [this brief](https://gist.github.com/rom-30/81fb9447b48abf3b6d72aff121014296) 


# Usage
## API Endpoints
### posts/
- ```GET /posts``` = All posts
- ```GET /posts/:id``` = Find post by id
- ```GET /posts/services``` = All posts with ‘Services’ category
- ```GET /posts/events``` = All posts with ‘Events’ category
- ```GET /posts/jobs``` = All posts with ‘Jobs’ category
- ```GET /posts/voluntary``` = All posts with ‘Voluntary Work’ category
- ```GET /posts/announcements``` = All posts with ‘Announcements’ category
- ```GET /posts/clubs``` = All posts with ‘Clubs’ category
### Requires authentication
- ```POST /posts/``` = create a new post with POST request
- ```DELETE /posts/delete``` = delete a post by id 
### users/
- ```/users/register``` = register user
- ```/users/login``` = login user
### Requires authentication
- ```/users/logout``` = removes all tokens from database with current tokens user_id
### comments/
- ```/comments/:id``` = All comments with post_id = id









# License

MIT License:  see [the `LICENSE` file](https://github.com/PiroAvni/Lab1_GeoStory_Server/blob/main/LICENSE).