const db = require('../database/connect');

class Post {

    constructor({ post_id, post_title, post_content, post_date, post_category, post_author_id}) {
        this.id = post_id;
        this.title = post_title;
        this.content = post_content;
        this.category = post_category;
        this.author_id = post_author_id;
        this.post_date = post_date;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM posts");
        return response.rows.map(p => new Post(p));
    }

    static async getAllServices() {
        const response = await db.query("SELECT * From posts WHERE post_category = 'Services' ")
        return response.rows.map(p => new Post(p));
    }

    static async getAllEvents() {
        const response = await db.query("SELECT * From posts WHERE post_category = 'Events' ")
        return response.rows.map(p => new Post(p));
    }

    static async getAllJobs() {
        const response = await db.query("SELECT * From posts WHERE post_category = 'Jobs' ")
        return response.rows.map(p => new Post(p));
    }

        static async getAllVoluntary() {
        const response = await db.query("SELECT * From posts WHERE post_category = 'Voluntary Work' ")
        return response.rows.map(p => new Post(p));
    }

    static async getAllAnnouncements() {
        const response = await db.query("SELECT * From posts WHERE post_category = 'Announcements' ")
        return response.rows.map(p => new Post(p));
    }

    static async getAllClubs() {
        const response = await db.query("SELECT * From posts WHERE post_category = 'Clubs' ")
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
        const { title, content , category, author_id, post_date} = data;
        let response = await db.query("INSERT INTO posts (post_title, post_content, post_category, post_author_id, post_date) VALUES ($1, $2, $3, $4, $5) RETURNING post_id;",
            [title, content, category, author_id, post_date]);
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