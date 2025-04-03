const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/actions');


app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/',router);

app.listen(8000, () => {
    console.log('server is running on port 8000');
})
