const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser());

const posts ={};

app.get('/post', (req, res) => {
    res.send(posts);
});

app.post('/posts', (res, req) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    post[id] = {
        id, title
    };

    res.statusCode(201).send(posts[id]);

});

app.listen(4000, () => {
    console.log('Listening on 4000');
});