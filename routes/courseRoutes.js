const winston = require("winston");
const  Course  = require("../models/course");
const Joi = require("joi");
const express = require("express");
const courseRouter = express.Router();

courseRouter.get("/", async (req, res) => {
  try {
    let data = await Course.find()
    res
    .status(200)
    .send({ msg: "All Courses", data });
    if (!data) {
    res.status(400).send({ msg: "None found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
  });

courseRouter.post("/", async (req, res) => {

  const newCourse = new Course(req.body);
  try {
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    res.status(500).json(err);
  }
});

courseRouter.put('/:id',(req,res) => {
  Course.findOneAndUpdate({
      _id : req.params.id
  },req.body,{
      new : true
  },(err,doc) => {
      if(err) console.log(err)
      res.json(doc)
  })
})

courseRouter.delete('/:id',(req,res) => {
  Course.findByIdAndDelete(req.params.id,(err,doc) => {
      if(err) console.log(err)
      res.json(doc)
  })
})
// router.put("/:id", async (req, res) => {
//   const schema = Joi.object({
//     name: Joi.string().min(3).required(),
//     author: Joi.string().min(3),
//     uid: Joi.string(),
//     isComplete: Joi.boolean(),
//     date: Joi.date(),
//   });

//   const { error } = schema.validate(req.body);

//   if (error) return res.status(400).send(result.error.details[0].message);

//   const todo = await Todo.findById(req.params.id);

//   if (!todo) return res.status(404).send("Todo not found...");

//   if (todo.uid !== req.user._id)
//     return res.status(401).send("Todo update failed. Not authorized...");

//   const { nameor, isComplete, date, uid } = req.body;

//   const updatedTodo = await Todo.findByIdAndUpdate(
//     req.params.id,
//     { nameor, isComplete, date, uid },
//     { new: true }
//   );

//   res.send(updatedTodo);
// });

// router.patch("/:id", async (req, res) => {
//   const todo = await Todo.findById(req.params.id);

//   if (!todo) return res.status(404).send("Todo not found...");

//   if (todo.uid !== req.user._id)
//     return res.status(401).send("Todo check/uncheck failed. Not authorized...");

//   const updatedTodo = await Todo.findByIdAndUpdate(
//     req.params.id,
//     {
//       isComplete: !todo.isComplete,
//     },
//     {
//       new: true,
//     }
//   );

//   res.send(updatedTodo);
// });

// router.delete("/:id", async (req, res) => {
//   const todo = await Todo.findById(req.params.id);

//   if (!todo) return res.status(404).send("Todo not found...");

//   if (todo.uid !== req.user._id)
//     return res.status(401).send("Todo deletion failed. Not authorized...");

//   const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

//   res.send(deletedTodo);
// });

module.exports = courseRouter;  