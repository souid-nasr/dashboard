const moderatorRouter = require("express").Router();
const Moderator = require("../models/moderatorModel");
const Admin = require("../models/AdminModel");
const expressAsyncHandler = require("express-async-handler");
const { isAuth, isAdmin, generateToken } = require('../utils.js');

moderatorRouter.post(
    '/login',
    expressAsyncHandler(async (req, res) => {
      const user = await Moderator.findOne({ email: req.body.email });
      if (user) {
        if (user) {
          res.send({
            _id: user._id,
            email: user.email,
            moderator:user,
            token: generateToken(user),
          });
          return;
        }
      }
      res.status(401).send({ message: 'Invalid email or password' });
    })
  );

  module.exports = moderatorRouter;