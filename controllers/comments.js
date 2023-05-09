const Comment = require('../models/Comment')

async function show(req, res) {
    try {
        const postId = parseInt(req.params.id)
        const comments = await Comment.getByPostId(postId)
        res.status(200).json(comments)
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

module.exports = {
    show
}