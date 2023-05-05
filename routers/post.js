const { Router } = require('express');

const postController = require('../controllers/post.js');
const authenticator = require('../middleware/authenticator.js')

const postRouter = Router();

postRouter.get("/", postController.index);
postRouter.get('/services', postController.getServices);
postRouter.get('/events', postController.getEvents)
postRouter.get("/:id", postController.show);
postRouter.post("/", authenticator, postController.create);
postRouter.delete("/:id", authenticator, postController.destroy);

module.exports = postRouter;