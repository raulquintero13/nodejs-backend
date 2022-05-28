require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

const cors = require('cors');
const corsOptions = {origin: "http://localhost:8080"};
app.use(cors(corsOptions));


// const testRoutes = require('./routes/tests');
// app.use('/tests', testRoutes);

app.use('/explorers', require('./routes/explorers'));
app.use('/mc', require('./routes/mc'));

app.get('/', (req, res) => {res.json({message: 'alive'});});


var server = app.listen(port, () => {console.log(`Listening to requests on port ${port}`);});

var handler = function() {
    console.log('close server');
    server.close();
};

module.exports = {app, handler};