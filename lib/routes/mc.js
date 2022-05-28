var express = require('express'),
    router = express.Router();

const MCController = require("../controllers/MCController")

router.get("/", async (req, res) => { res.json(await(MCController.getList())) });
router.get("/:id", async (req, res) => {res.json(await (MCController.getById(req.params.id)))});
router.post("/", async (req, res) => {res.json(await (MCController.create(req.body)))});
router.put("/:id", async (req, res) => {res.json(await (MCController.update(req.params.id, req.body)))});
router.delete("/:id", async (req, res) => {res.json(await (MCController.delete(req.params.id)))});
 

    
module.exports = router;