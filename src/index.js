const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// setup multer
// const multer = require('multer');
// const upload = multer({
//     dest: 'images'
// });
// app.post('/up', upload.single('ipload'), (req, res) => {
//     res.send();
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server running at ' + port);
});
