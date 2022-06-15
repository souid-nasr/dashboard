const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moderatorSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    photo:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqI4txTRkj4_pCfr3NlNdbCbLYgX-nqjMX8wHEfx_A6Q8luaudlecd84nMDGZ1a4nwA0&usqp=CAU",
    },
    password: {
        type: String,
    },
    profession: {
        type: String,
    },
    phone: {
        type: String,
    },
    nationality: {
        type: String,
    },
    birthday: {
        type: String,
    }
})

module.exports = Moderator = mongoose.model('Moderator', moderatorSchema)