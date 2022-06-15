const studentRouter = require("express").Router();
const Student = require("../models/studentModel");
const asyncHandler = require("express-async-handler");
studentRouter.post("/", async (req, res) => {
	try {
		const student = await Student.findOne({ email: req.body.email });
		if (student)
			return res
				.status(409)
				.send({ message: "student with given email already Exist!" });
		await new Student.save();
		res.status(201).send({ message: "Student created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

// get all 
studentRouter.get("/all", async (req, res) => {
	try {
	  let data = await Student.find()
	  res
	  .status(200)
	  .send({ msg: "All Students", data });
	  if (!data) {
	  res.status(400).send({ msg: "None found", error });
	  }
	} catch (error) {
	  res.status(500).send({ msg: "Server error", error });
	}
	});

	studentRouter.get("/:id",async (req, res) => {
		try {
		  const student = await Student.findById(req.params.id);
		  res.status(200).json(student);
		} catch (err) {
		  res.status(500).json(err);
		}
		});

		//Delete
studentRouter.delete("/:id", async (req, res) => {

	try {
	  await Student.findByIdAndDelete(req.params.id);
	  res.status(200).json("The Student has been deleted...");
	} catch (err) {
	  res.status(500).json(err);
	}
  });
// update
studentRouter.put("/:id",  asyncHandler(async (req, res) => {  
const {
	name,
	email,
	phoneNumber,
	nationality,
	country,
	studyLevel,
	preferredInstitution,
	subjectOfInterest,
	intake,
	univLevelQualification,
	engLanguageProof,
  }=req.body
  const student = await Student.findById(req.params.id);
  if (student) {
	student.name=name||student.name
	student.email=email||student.email
	student.phoneNumber=phoneNumber||student.phoneNumber
	student.nationality=nationality||student.nationality
	student.country=country||student.country
	student.studyLevel=studyLevel||student.studyLevel
	student.preferredInstitution=preferredInstitution||student.preferredInstitution
	student.subjectOfInterest=subjectOfInterest||student.subjectOfInterest
	student.intake=intake||student.intake
	student.univLevelQualification=univLevelQualification||student.univLevelQualification
	student.engLanguageProof=engLanguageProof||student.engLanguageProof
	const updatedStudent = await student.save();
	res.json(updatedStudent);
  } else {
	res.status(404);
	throw new Error("student not found");
  }
  } ));

// CREATE Student
studentRouter.post("/new", async (req, res) => {

	const newStudent = new Student(req.body);
	try {
	  const savedStudent = await newStudent.save();
	  res.status(201).json(savedStudent);
	} catch (err) {
	  res.status(500).json(err);
	}
  });




module.exports = studentRouter;