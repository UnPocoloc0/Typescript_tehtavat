const Post = require("../models/Post");

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();
    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    let postId = Number(req.params.id);
    let [post, _] = await Post.findById(postId);
    res.status(200).json({ post: post[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewPost = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let post = new Post(title, body);
    post = await post.save();
    res.status(201).json({ message: "Post created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    let updateID = Number(req.params.id);
    let { body, title } = req.body;

    let [post, _] = await Post.update(updateID, title, body);
    res.status(200).json({ message: "Päivitetty"});

  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {

    let deleteID = Number(req.params.id);
    let [post, _] = await Post.delete(deleteID);
    res.status(200).json({ message: "Poisto onnistui"});
  } catch (e) {
    console.log(e);
    next(e);
  }

}