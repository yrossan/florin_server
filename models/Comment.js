const db = require('../database/connect')

class Comment {
    constructor({comment_id, comment, post_id, author_id, comment_date}) {
        this.id = comment_id;
        this.comment = comment;
        this.post_id = post_id;
        this.author_id = author_id;
        this.comment_date = comment_date;
    }

    static async getByPostId(postId) {
        const comments = await db.query('SELECT * FROM comments WHERE post_id = $1;', [postId])
        return comments.rows.map(c => new Comment(c))
    }

}

module.exports = Comment