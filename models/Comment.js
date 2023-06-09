const db = require('../database/connect')

class Comment {
    constructor({comment_id, comment_content, post_id, comment_author_id, comment_date}) {
        this.id = comment_id;
        this.comment = comment_content;
        this.post_id = post_id;
        this.author_id = comment_author_id;
        this.comment_date = comment_date;
    }

    static async getByPostId(postId) {
        const comments = await db.query('SELECT * FROM comments WHERE post_id = $1 ORDER BY comment_date DESC;', [postId])
        return comments.rows.map(c => new Comment(c))
    }

}

module.exports = Comment