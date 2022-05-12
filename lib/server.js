require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

const cors = require('cors');
const corsOptions = {origin: "http://localhost:8081"};
app.use(cors(corsOptions));

const ExplorerController = require("./controllers/ExplorerController")
const MCController = require("./controllers/MCController")



app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get("/explorers", async (req, res) => { res.json(await(ExplorerController.getList())) });
app.get("/explorers/:id", async (req, res) => {res.json(await (ExplorerController.getById(req.params.id)))});
app.post("/explorers", async (req, res) => {res.json(await (ExplorerController.create(req.body)))});
app.put("/explorers/:id", async (req, res) => {res.json(await (ExplorerController.update(req.params.id, req.body)))});
app.delete("/explorers/:id", async (req, res) => {res.json(await (ExplorerController.delete(req.params.id)))});

app.get("/mc", async (req, res) => { res.json(await(MCController.getList())) });
app.get("/mc/:id", async (req, res) => {res.json(await (MCController.getById(req.params.id)))});
app.post("/mc", async (req, res) => {res.json(await (MCController.create(req.body)))});
app.put("/mc/:id", async (req, res) => {res.json(await (MCController.update(req.params.id, req.body)))});
app.delete("/mc/:id", async (req, res) => {res.json(await (MCController.delete(req.params.id)))});



var server = app.listen(port, () => {console.log(`Listening to requests on port ${port}`);});
var handler = function() {
    console.log('close server');
    server.close();
};
module.exports = {app, handler};