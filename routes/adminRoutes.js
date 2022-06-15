const userRouter = require("express").Router();
const Moderator = require("../models/moderatorModel");
const Admin = require("../models/AdminModel");
const expressAsyncHandler = require("express-async-handler");
const { isAuth, isAdmin, generateToken } = require('../utils.js');
const bcrypt = require("bcrypt");
userRouter.get("/", async (req, res) => {
  try {
    let data = await Moderator.find()
    res
    .status(200)
    .send({ msg: "All Insitutions", data });
    if (!data) {
    res.status(400).send({ msg: "None found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
  });
userRouter.get(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await Moderator.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

userRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await Moderator.findById(req.params.id);
    if (user) {
      user.firstName = req.body.firstName || user.firstName;
      user.lastName = req.body.lastName || user.lastName;
      user.email = req.body.email || user.email;
      user.role = req.body.role || user.role;
      user.password = req.body.password || user.password;
      const updatedUser = await user.save();
      res.send({ message: 'User Updated', user: updatedUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

// userRouter.delete(
//   '/:id',
//   isAuth,
//   isAdmin,
//   expressAsyncHandler(async (req, res) => {
//     const user = await Moderator.findById(req.params.id);
//     if (user) {
//       if (user.email === 'admin@example.com') {
//         res.status(400).send({ message: 'Can Not Delete Admin User' });
//         return;
//       }
//       await user.remove();
//       res.send({ message: 'User Deleted' });
//     } else {
//       res.status(404).send({ message: 'User Not Found' });
//     }
//   })
// );
userRouter.post(
  '/login',
  expressAsyncHandler(async (req, res) => {
    const user = await Admin.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          email: user.email,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);
userRouter.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    const {email, password } = req.body;
    try {
      let user = await Admin.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "user already exists" });
      }
      user = new Admin(req.body);
      //create salt
      const salt = 10; //recommended value
      //hash the password
      const hashedPassword = await bcrypt.hash(password, salt);
      //replace password with hashed password
      user.password = hashedPassword;
      //sign user
      const payload = {
        id: user._id,
      };
      //generate the token
    
      await user.save();
      res
        .status(200)
        .send({ msg: "user created successfully", user, token:generateToken(user) });
    } catch (error) {
      res.status(500).send({ msg: "Server error" });
    }
  }
)
)
userRouter.post(
  '/registermod',
  expressAsyncHandler(async (req, res) => {
    const newUser = new Moderator({
      firstName : req.body.firstName ,
      lastName : req.body.lastName,
      email: req.body.email,
      photo : req.body.photo ,
      password: req.body.password,
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      email: user.email,
      firstName : user.firstName ,
      lastName : user.lastName,
      password : user.password ,
      photo : user.photo ,
      token: generateToken(user),
    });
  })
);
userRouter.post("/registermoderator", async (req, res) => {

  const newModerator = new Moderator(req.body);
  try {
    const savedModerator = await newModerator.save();
    res.status(201).json(savedModerator);
  } catch (err) {
    res.status(500).json(err);
  }
});

userRouter.put(
  '/profile',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await Moderator.findById(req.user._id);
    if (user) {
      user.firstName = req.body.firstName || user.firstName;
      user.lastName = req.body.lastName || user.lastName;
      user.email = req.body.email || user.email;
      user.photo = req.body.photo || user.photo;
      user.password = req.body.password || user.password;
      const updatedUser = await user.save();
      res.send({
        email: updatedUser.email,
        firstName : updatedUser.firstName ,
        lastName : updatedUser.lastName,
        email : updatedUser.email ,
        photo : updatedUser.photo ,
        token: generateToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  })
);

userRouter.delete("/:id", async (req, res) => {

  try {
    await Moderator.findByIdAndDelete(req.params.id);
    res.status(200).json("The Moderator has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = userRouter;