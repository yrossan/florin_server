DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tokens;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE tokens (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES users("user_id")
);

CREATE TABLE posts (
    post_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (100) NOT NULL,
    content VARCHAR (500) NOT NULL,
    post_date DATE NOT NULL,
    category VARCHAR(20) NOT NULL,
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES users("user_id"),
    PRIMARY KEY (post_id)
);

INSERT INTO users (username, password) VALUES ('Chris', 'jkl');
INSERT INTO posts (title, content, post_date, category, author_id) VALUES ('First', 'Post', '2023-05-05', 'Services', 1);
INSERT INTO posts (title, content, post_date, category, author_id) VALUES ('Second', 'Post', '2023-05-05', 'Services', 1);
INSERT INTO posts (title, content, post_date, category, author_id) VALUES ('Third', 'Post', '2023-05-05', 'Announcements', 1);
INSERT INTO posts (title, content, post_date, category, author_id) VALUES ('Fourth', 'Post', '2023-05-05', 'Announcements', 1);
INSERT INTO posts (title, content, post_date, category, author_id) VALUES ('First', 'Post', '2023-05-05', 'Events', 1);
INSERT INTO posts (title, content, post_date, category, author_id) VALUES ('Second', 'Post', '2023-05-05', 'Events', 1);
INSERT INTO posts (title, content, post_date, category, author_id) VALUES ('First', 'Post', '2023-05-05', 'Jobs', 1);
INSERT INTO posts (title, content, post_date, category, author_id) VALUES ('Second', 'Post', '2023-05-05', 'Jobs', 1);
INSERT INTO posts (title, content, post_date, category, author_id) VALUES ('First', 'Post', '2023-05-05', 'Voluntary Work', 1);
INSERT INTO posts (title, content, post_date, category, author_id) VALUES ('Second', 'Post', '2023-05-05', 'Voluntary Work', 1);
INSERT INTO posts (title, content, post_date, category, author_id) VALUES ('First', 'Post', '2023-05-05', 'Clubs', 1);
INSERT INTO posts (title, content, post_date, category, author_id) VALUES ('Second', 'Post', '2023-05-05', 'Clubs', 1);
INSERT INTO posts (title, content, post_date, category, author_id) VALUES ('First', 'Post', '2023-05-05', 'Services', 1);
INSERT INTO posts (title, content, post_date, category, author_id) VALUES ('Second', 'Post', '2023-05-05', 'Services', 1);