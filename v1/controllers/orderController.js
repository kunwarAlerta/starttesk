const statusCode = require("../../utils/statusCodes");
const messages = require("../../utils/messages");
const sendRes = require("../../utils/response");
const { ValidationError } = require("../../middleware/errors/errors");
const orderService = require("../services/orderService");

async function getOrders(req, res, next) {
  try {
    var posts = await orderService.getAllBySearch(req.query);
    sendRes(req, res, statusCode.SUCCESS, "", posts);
  } catch (error) {
    next(error);
  }
}

async function getUserPosts(req, res, next) {
  try {
    req.query.user = req.user._id;
    var posts = await postService.getAllByUser(req.query);
    sendRes(req, res, statusCode.SUCCESS, "", posts);
  } catch (error) {
    next(error);
  }
}

async function createOrder(req, res, next) {
  try {

    var post = await orderService.create(req.body);
    sendRes(
      req,
      res,
      statusCode.SUCCESS,
      messages.ORDER_CREATED_SUCCESSFULLY,
      post
    );
  } catch (error) {
    next(error);
  }
}

async function updatePost(req, res, next) {
  try {
    var post = await postService.updateQuery({ _id: req.body._id }, req.body);
    sendRes(
      req,
      res,
      statusCode.SUCCESS,
      messages.POST_UPDATED_SUCCESSFULLY,
      post
    );
  } catch (error) {
    next(error);
  }
}

async function deletePost(req, res, next) {
  try {
    var post = await postService.remove(req.params.postid);
    sendRes(
      req,
      res,
      statusCode.SUCCESS,
      messages.POST_DELETED_SUCCESSFULLY,
      post
    );
  } catch (error) {
    next(error);
  }
}
module.exports.getOrders = getOrders;
module.exports.getUserPosts = getUserPosts;
module.exports.createOrder = createOrder;
module.exports.updatePost = updatePost;
module.exports.deletePost = deletePost;
