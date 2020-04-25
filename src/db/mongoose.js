const mongoose = require('mongoose');

const DB_URL = process.env.DATABASE_URL;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
