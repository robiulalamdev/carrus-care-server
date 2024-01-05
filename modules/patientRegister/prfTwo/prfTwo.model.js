const mongoose = require("mongoose");

const prfTwoSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      default: "nahid.muradabir@gmail.com",
      required: false,
      // required: true,
    },
    prfOne: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PrfOne",
      required: false,
      // required: true,
    },
    patient_statement_signature: {
      type: String,
      required: false,
      // required: true,
    },
    patient_statement_signature_date: {
      type: Date,
      required: false,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PrfTwo = mongoose.model("PrfTwo", prfTwoSchema);
module.exports = PrfTwo;
