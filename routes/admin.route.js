const router = require("express").Router();
const { loginAdmin, getAdmin } = require("../controllers/admin.controller");

router.get("/:id", getAdmin);
router.post("/login", loginAdmin);
router.get("/", (req, res) => res.status(200).send("<h3>SHOP API - ADMIN SERVICE</h3>"));
module.exports = router;
