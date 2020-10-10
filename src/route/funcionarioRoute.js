const express = require("express");
const router = express.Router();
const controller = require("../controller/livrariaController");

router.get("/", controller.getAll);
router.get("/funcionarios", controller.getAll);
router.get("/id", controller.getByIdFuncionarios);
router.post("/", controller.postFuncionario);
router.delete("/id", controller.deleteFuncionario);


module.exports = router;