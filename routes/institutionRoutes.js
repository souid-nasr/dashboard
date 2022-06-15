const institutionRoutes = require("express").Router();
const Institution  = require("../models/institutionModel.js");
const asyncHandler = require("express-async-handler");
// const multer = require('multer')
// const uuidv4 = require('uuid/v4')
// const DIR = './public/';
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, uuidv4() + '-' + fileName)
//     }
// });
// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });

// // GET ALL institution
// institutionRoutes.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const pageSize = 12;
//     const page = Number(req.query.pageNumber) || 1;
//     const keyword = req.query.keyword
//       ? {
//           name: {
//             $regex: req.query.keyword,
//             $options: "i",
//           },
//         }
//       : {};
//     const count = await Institution.countDocuments({ ...keyword });
//     const institutions = await Institution.find({ ...keyword })
//       .limit(pageSize)
//       .skip(pageSize * (page - 1))
//       .sort({ _id: -1 });
//     res.json({ institutions, page, pages: Math.ceil(count / pageSize) });
//   })
// );

// ADMIN GET ALL institution WITHOUT SEARCH AND PEGINATION
// institutionRoutes.get(
//   "/all",
//   asyncHandler(async (req, res) => {
//     const institutions = await Institution.find({})
//     res.json(institutions);
//   })
// );

 //GETALL
 institutionRoutes.get("/all", async (req, res) => {
  try {
    let data = await Institution.find()
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
  

// GET SINGLE institution
institutionRoutes.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const institution = await Institution.findById(req.params.id);
    if (institution) {
      res.json(institution);
    } else {
      res.status(404);
      throw new Error("institution not Found");
    }
  })
);



//Delete
institutionRoutes.delete("/:id", async (req, res) => {

  try {
    await Institution.findByIdAndDelete(req.params.id);
    res.status(200).json("The Institution has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});


institutionRoutes.post(
  '/add',
  asyncHandler(async (req, res) => {
    const { name, logo, instituteType, continent, country,countryImage,subject } = req.body
    const institution = new Institution({
      name,
      logo,
      instituteType,
      continent,
      country,
      countryImage,
      subject
    });
    const createdInstitution = await institution.save();
    res.send({ message: 'institution Created', institution: createdInstitution });
  })
);
// CREATE institution
institutionRoutes.post("/new", async (req, res) => {
  const newInstitution = new Institution(req.body);
  try {
    const savedInstitution = await newInstitution.save();
    res.status(201).json(savedInstitution);
  } catch (err) {
    res.status(500).json(err);
  }
});


// institutionRoutes.post(
//   "/",
//   asyncHandler(async (req, res) => {
//     const { name, logo, instituteType, continent, country,countryImage,subject } = req.body;
//     const institutionExist = await Institution.findOne({ name });
//     if (institutionExist) {
//       res.status(400);
//       throw new Error("institution name already exist");
//     } else {
//       const institution = new Institution({
//         name,
//         logo,
//         instituteType,
//         continent,
//         country,
//         countryImage,
//         subject
//       });
//       if (institution) {
//         const createdInstitution = await institution.save();
//         res.status(201).json(createdInstitution);
//       } else {
//         res.status(400);
//         throw new Error("Invalid institution data");
//       }
//     }
//   })
// );

// UPDATE institution
// institutionRoutes.put(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const { name, logo, category, degree, country,image,subject,description1,description2 } = req.body;
//     const institution = await Institution.findById(req.params.id);
//     if (institution) {
//       institution.name = name || institution.name;
//       institution.logo = logo || institution.logo;
//       institution.category = category || institution.category;
//       institution.degree = degree || institution.degree;
//       institution.country = country || institution.country;
//       institution.image = image || institution.countryImage;
//       institution.subject = subject || institution.subject;
//       institution.description1 = description1 || institution.description1;
//       institution.description2 = description2 || institution.description2;
//       const updatedInstitution = await institution.save();
//       res.json(updatedInstitution);
//     } else {
//       res.status(404);
//       throw new Error("institution not found");
//     }
//   })
// );



//edit institution

institutionRoutes.put("/:id", async (req, res) => {
  try {
    const updatedInstitution = await Institution.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedInstitution);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = institutionRoutes;