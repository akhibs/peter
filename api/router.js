const express = require("express");
const controller = require("./controller/controller");
const router = express.Router();

router.post("/id-search", controller.idSearch);
router.post("/add-details", controller.addDetails);
router.post("/edit-details", controller.editDetails);
router.get("/test", controller.test);
router.get("/handshake", controller.handshake);
router.get("/image/:id", controller.getImage);

router.all("*", (req, res) => {
  res.send("404 Page not Found");
});

module.exports = router;
