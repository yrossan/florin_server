DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tokens;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    is_admin INT DEFAULT 0 NOT NULL,
    is_business INT DEFAULT 0 NOT NULL,
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
    post_title VARCHAR (100) NOT NULL,
    post_content VARCHAR (500) NOT NULL,
    post_date DATE NOT NULL,
    post_category VARCHAR(20) NOT NULL,
    post_author_id INT NOT NULL,
    FOREIGN KEY (post_author_id) REFERENCES users("user_id"),
    PRIMARY KEY (post_id)
);

CREATE TABLE comments (
    comment_id INT GENERATED ALWAYS AS IDENTITY,
    comment_content VARCHAR(600) NOT NULL,
    post_id INT NOT NULL,
    comment_author_id INT NOT NULL,
    comment_date DATE NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts("post_id"),
    FOREIGN KEY (comment_author_id) REFERENCES users("user_id"),
    PRIMARY KEY (comment_id)
);

INSERT INTO users (username, password) VALUES ('Chris', 'jkl'), ('Yaas', 'jkl'), ('Avni', 'jkl');

INSERT INTO posts (post_title, post_content, post_date, post_category, post_author_id)
VALUES
    ('Romeo', 'Romeo is kinda mean', '2023-05-12', 'Services', 1),
    ('Need recommendations for a reliable electrician', 'Im looking for an electrician to fix some wiring issues in my house. Any suggestions?', '2023-05-09', 'Services', 1),
    ('Best local cleaning services', 'Share your experiences and recommendations for local cleaning services in the area.', '2023-05-10', 'Services', 1),
    ('Community event postponed', 'Due to unforeseen circumstances, the community event scheduled for this weekend has been postponed. Stay tuned for updates on the new date.', '2023-05-08', 'Announcements', 1),
    ('New community garden initiative', 'We are starting a new community garden project. Join us in creating a beautiful green space for everyone to enjoy!', '2023-05-07', 'Announcements', 1),
    ('Local music festival coming up', 'Get ready for an amazing music festival happening next month in our community. Dont miss out on the fun!', '2023-05-05', 'Events', 1),
    ('Sports tournament registration now open', 'Calling all sports enthusiasts! The registration for the community sports tournament is now open. Sign up today!', '2023-05-06', 'Events', 1),
    ('Job opportunity: Part-time receptionist', 'A local business is looking for a part-time receptionist. If you are interested, check out the job details and apply!', '2023-05-05', 'Jobs', 1),
    ('Volunteer position: Tutoring program', 'We are seeking volunteers to join our tutoring program and help local students with their studies. Make a difference in the community!', '2023-05-06', 'Jobs', 1),
    ('Help needed: Community clean-up day', 'Join us for a community cle+an-up day this weekend. Lets work together to keep our neighborhood clean and beautiful!', '2023-05-05', 'Voluntary Work', 1),
    ('Volunteer opportunity: Meals on Wheels', 'Become a volunteer for Meals on Wheels program and make a positive impact by delivering meals to seniors in need.', '2023-05-06', 'Voluntary Work', 1),
    ('Join our book club', 'Were starting a new book club in the community. If you love reading, come and join us!', '2023-05-05', 'Clubs', 1),
    ('Calling all photography enthusiasts', 'Are you passionate about photography? Join our photography club and share your skills and experiences.', '2023-05-06', 'Clubs', 1),
    ('First meeting of the hiking club', 'Get ready for our first hiking club meeting this weekend. Lace up your boots and join us for an adventure!', '2023-05-07', 'Clubs', 1),
    ('Art club exhibition', 'Visit our art club exhibition showcasing the talents of local artists. Support the arts in our community!', '2023-05-05', 'Clubs', 1);


INSERT INTO comments (comment_content, post_id, comment_author_id, comment_date) VALUES 
    ('Yeah I heard he doesnt even like pandas', 1, 1, '2023-05-05'),
    ('but theyre so cute, how can you not like pandas', 1, 1, '2023-05-06'),
    ('Nah hes not mean he just wants us to be awesome so he holds us to a high standard', 1, 2, '2023-05-07'),
    ('I dont know about that he gets a little to joyful about picking holes in our work', 1, 2, '2023-05-08'),
    ('Great job on this post! I found it very informative.', 2, 1, '2023-05-05'),
    ('I completely agree with your points. Well said!', 2, 1, '2023-05-05'),
    ('This is a thought-provoking comment. It made me reconsider my perspective.', 2, 2, '2023-05-05'),
    ('Thank you for sharing your insights. I learned something new from your comment.', 3, 2, '2023-05-05'),
    ('I appreciate your contribution to the discussion. Your comment adds valuable context.', 3, 3, '2023-05-05'),
    ('Your comment resonated with me. It captures the essence of the topic perfectly.', 3, 3, '2023-05-05'),
    ('Great job on this post! I found it very informative.', 4, 1, '2023-05-05'),
    ('I completely agree with your points. Well said!', 4, 1, '2023-05-05'),
    ('This is a thought-provoking comment. It made me reconsider my perspective.', 4, 2, '2023-05-05'),
    ('Thank you for sharing your insights. I learned something new from your comment.', 5, 2, '2023-05-05'),
    ('I appreciate your contribution to the discussion. Your comment adds valuable context.', 5, 3, '2023-05-05'),
    ('Your comment resonated with me. It captures the essence of the topic perfectly.', 5, 3, '2023-05-05'),
    ('Great job on this post! I found it very informative.', 6, 1, '2023-05-05'),
    ('I completely agree with your points. Well said!', 7, 1, '2023-05-05'),
    ('This is a thought-provoking comment. It made me reconsider my perspective.', 8, 2, '2023-05-05'),
    ('Thank you for sharing your insights. I learned something new from your comment.', 9, 2, '2023-05-05'),
    ('I appreciate your contribution to the discussion. Your comment adds valuable context.', 10, 3, '2023-05-05'),
    ('Your comment resonated with me. It captures the essence of the topic perfectly.', 11, 3, '2023-05-05'),
    ('Great job on this post! I found it very informative.', 12, 1, '2023-05-05'),
    ('I completely agree with your points. Well said!', 13, 1, '2023-05-05'),
    ('This is a thought-provoking comment. It made me reconsider my perspective.', 14, 2, '2023-05-05');





