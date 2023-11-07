const Marker = require("../models/marker");
const Comment = require("../models/comment");
const Image = require("../models/image");
const User = require("../models/user");

class MarkerController {
  constructor(options) {}
  async getMarkersAndCommentsByImageId(req, res) {
    try {
      const { imageId } = req.params;
      const markers = await Marker.findAll({
        where: { imageId: imageId },
        // include: [Comment],
      });
      res.status(200).json(markers);
    } catch (error) {
      console.error("Error fetching markers:", error);
      res.status(400).json(error);
    }
  }
  async findAll(req, res) {
    try {
      const markers = await Marker.findAll({});
      res.status(200).json(markers);
    } catch (error) {
      console.error("Error fetching markers:", error);
      res.status(400).json(error);
    }
  }
  async createMarker(req, res) {
    try {
      const newMarker = await Marker.create(req.body);
      res.status(200).json(newMarker);
    } catch (error) {
      console.error("Error creating marker:", error);
      res.status(400).json(error);
    }
  }
  async createImage(req, res) {
    try {
      const newMarker = await Image.create(req.body);
      res.status(200).json(newMarker);
    } catch (error) {
      console.error("Error creating marker:", error);
      res.status(400).json(error);
    }
  }
  async createComment(req, res) {
    try {
      const newMarker = await Comment.create(req.body);
      res.status(200).json(newMarker);
    } catch (error) {
      console.error("Error creating marker:", error);
      res.status(400).json(error);
    }
  }
  async deleteMarker(req, res) {
    try {
      const newMarker = await Marker.destroy({ where: { id: req.params.id } });
      res.status(200).json(newMarker);
    } catch (error) {
      console.error("Error deleting marker:", error);
      res.status(400).json(error);
    }
  }
  async fetchAllUser(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error deleting marker:", error);
      res.status(400).json(error);
    }
  }
}

module.exports = MarkerController;
