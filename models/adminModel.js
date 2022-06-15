const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    role: {
        type: String,
        default: "admin"
      },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
})

module.exports = Admin = mongoose.model('Admin', adminSchema)