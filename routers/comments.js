const { Router } = require('express')

const commentsController = require('../controllers/comments')

const commentsRouter = Router()

commentsRouter.get('/:id', commentsController.show)

module.exports = commentsRouter