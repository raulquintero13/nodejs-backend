require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

const cors = require('cors');
const corsOptions = {origin: "http://localhost:8081"};
app.use(cors(corsOptions));



app.get('/', (req, res) => {
  res.json({message: 'alive'});
});



app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});