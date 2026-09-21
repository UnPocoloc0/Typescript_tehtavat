

const postControllers = require("../controllers/postControllers");
const express = require('express');
const router = express.Router();

router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost);

router
  .route("/:id")
  .get(postControllers.getPostById)
  .put(postControllers.updatePost)
  .delete(postControllers.deletePost);

module.exports = router;
