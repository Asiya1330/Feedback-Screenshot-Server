const express = require("express");
const router = express.Router();
const MarkerController = new (require("./controllers/markerController"))();

// Markers Routes
router.post("/marker", MarkerController.createMarker);
router.post("/image", MarkerController.createImage);
router.post("/comment", MarkerController.createComment);
router.delete("/marker/:id", MarkerController.deleteMarker);
router.get("/user", MarkerController.fetchAllUser);

module.exports = router;
