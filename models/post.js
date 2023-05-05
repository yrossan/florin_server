const db = require('../database/connect');

class Post {

    constructor({ post_id, title, content, post_date, category, author_id}) {
        this.id = post_id;
        this.title = title;
        this.content = content;
        this.category = category;
        this.author_id = author_id;
        this.post_date = post_date;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM posts");
        return response.rows.map(p => new Post(p));
    }

    static async getAllServices() {
        const response = await db.query("SELECT * From posts WHERE category = 'Services' ")
        return response.rows.map(p => new Post(p));
    }

        static async getAllEvents() {
        const response = await db.query("SELECT * From posts WHERE category = 'Events' ")
        return response.rows.map(p => new Post(p));
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM posts WHERE post_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate post.")
        }
        return new Post(response.rows[0]);
    }

    static async create(data) {
        const { title, content } = data;
        let response = await db.query("INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING post_id;",
            [title, content]);
        const newId = response.rows[0].post_id;
        const newPost = await Post.getOneById(newId);
        return newPost;
    }

    async destroy() {
        let response = await db.query("DELETE FROM post WHERE post_id = $1 RETURNING *;", [this.id]);
        return new Post(response.rows[0]);
    }

}

module.exports = Post;