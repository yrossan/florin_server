const db = require('../database/connect');

class User {

    constructor({ user_id, username, password, is_admin , is_business}) {
        this.id = user_id;
        this.username = username;
        this.password = password;
        this.isAdmin = is_admin;
        this.isBusiness = is_business;
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM users WHERE user_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.");
        }
        return new User(response.rows[0]);
    }

    static async getOneByUsername(username) {
        const response = await db.query("SELECT * FROM users WHERE username = $1", [username]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.");
        }
        return new User(response.rows[0]);
    }

    static async create(data) {
        const { username, password, isAdmin , isBusiness} = data;
        let response;
        if (isBusiness  || isAdmin) {
            isBusiness = isBusiness === 1 ? 1 : 0;
            isAdmin = isAdmin === 1 ? 1 : 0;
            response = await db.query("INSERT INTO users (username, password, is_admin, is_business) VALUES ($1, $2, $3, $4) RETURNING user_id;",
            [username, password, isAdmin, isBusiness]);
        } else {
            response = await db.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING user_id;",
            [username, password]);
        }
        response = await db.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING user_id;",
            [username, password]);
        const newId = response.rows[0].user_id;
        const newUser = await User.getOneById(newId);
        return newUser;
    }
}

module.exports = User;