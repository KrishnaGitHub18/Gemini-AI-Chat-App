const express = require('express');
const cors = require('cors');

const mongoDB=require('./database');
mongoDB();

const app = express();
const port = 5000;

app.use(express.json());

// CORS
app.use(cors());
app.use('/api', require('./routes/apiResponse'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});