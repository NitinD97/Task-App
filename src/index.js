const express = require('express');
require('./db/mongoose');
require('./emails/account');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.get('', (req, res) => {
    res.send("<h3><a href='/api'>api</a></h3>");
});

app.get('/api', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});

app.listen(port, () => {
    console.log('Server running at ' + port);
});


