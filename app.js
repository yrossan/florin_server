const express = require("express");
const cors = require("cors");
const logger = require('morgan')

// Router
const userRouter = require("./routers/users");
const postRouter = require('./routers/posts');
const commentsRouter = require('./routers/comments')



const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'))



app.get("/", (req, res) => {
    res.send('Welcome to Florin County API');
});

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/comments', commentsRouter)


module.exports = app;
