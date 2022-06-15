const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
	name: { type: String, },
    email: { type: String, },
	phoneNumber: { type: String, },
	nationality: { type: String, },
    country: { type: String, },
    studyLevel:{   type: String,
        // enum : ['Undergraduate','Postgraduate','Masters','PhD'],
        // default: 'PhD'
    },
    preferredInstitution:{
        type: String, 
    },
    subjectOfInterest:{
        type: String, 
    },
    programName:{
        type: String
    },
    intake:{type: String,
        // enum : ['January','March','September'],
        // default: 'January'
    },
    univLevelQualification:{
        type:String,
        
    },
engLanguageProof:{
    type:String,
    
},
creator:{
    type:String,
}

});

module.exports  = mongoose.model("Student", studentSchema);
