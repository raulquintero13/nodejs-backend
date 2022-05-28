var express = require('express'),
    router = express.Router();

const ExplorerController = require("../controllers/ExplorerController")

router
    // .get('/',  (req, res) => {res.json({message: 'test route'});})
    .get("/", async (req, res) => { res.json(await(ExplorerController.getList())) })
    .get("/:id", async (req, res) => {res.json(await (ExplorerController.getById(req.params.id)))})
    .post("/", async (req, res) => {res.json(await (ExplorerController.create(req.body)))})
    .put("/:id", async (req, res) => {res.json(await (ExplorerController.update(req.params.id, req.body)))})
    .delete("/:id", async (req, res) => {res.json(await (ExplorerController.delete(req.params.id)))})
    
 

    
module.exports = router;