const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  orderItems: [
    {
      institution: {
        type: mongoose.Schema.ObjectId,
        ref: "Institution",
        
      },
    //   student: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Student",
        
    //   },
    },
  ],
  moderator: {
    type: mongoose.Schema.ObjectId,
    ref: "Moderator",
    
  },
});

module.exports = mongoose.model("Order", orderSchema);