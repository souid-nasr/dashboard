const mongoose = require("mongoose");

const institutionSchema = new mongoose.Schema({
	name: { type: String },
    degree: { type: String },
    subject:{type: String},
    category:{ type: String },
    country: { type: String },
    description1:{type: String},
    description2:{type: String},
    group:{type: String},
    courses:{type: String},
    logo: { type: String },
    logoInst: { type: String },
    groupLogo: { type: String },
	image: { type: String },
    creator: { type: String },
    Accounting:{ type: String },
    Art:{ type: String }
    ,Biology:{ type: String }
    ,Business:{ type: String }
    ,Chemistry:{ type: String }
    ,Computing:{ type: String }
    ,Counselling:{ type: String }
    ,Criminology:{ type: String }
    ,Design:{ type: String }
    ,Economics:{ type: String }
    ,Education:{ type: String }
    ,Engineering:{ type: String }
    ,English:{ type: String }
    ,Environment:{ type: String }
    ,Geography:{ type: String }
    ,Health:{ type: String }
    ,History:{ type: String }
    ,Languages:{ type: String }
    ,Law:{ type: String }
    ,Marketing:{ type: String }
    ,Mathematics:{ type: String }
    ,Music:{ type: String }
    ,Nursing:{ type: String }
    ,Philosophy:{ type: String }
    ,Physics:{ type: String }
    ,Politics:{ type: String }
    ,Psychology:{ type: String }
    ,Religious:{ type: String }
    ,Science:{ type: String }
    ,Sociology:{ type: String }
    ,Software:{ type: String }
    ,Sport:{ type: String }
    ,Statistics:{ type: String }
});
module.exports =  mongoose.model('Institution', institutionSchema)
