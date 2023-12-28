const mongoose = require("mongoose");

const patientRegisterSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    patient_information: {
      first_name: {
        type: String,
        required: true,
      },
      middle_name: String,
      last_name: {
        type: String,
        required: true,
      },
      salutation: {
        type: String,
        required: true,
      },
      street_address: {
        type: String,
        required: true,
      },
      city_state_zip: {
        type: String,
        required: true,
      },
      phone_number: {
        type: String,
        required: true,
      },
      preferred_method: {
        type: String,
        required: true,
      },
      pharmacy_address: {
        type: String,
      },
      pharmacy_phone: {
        type: String,
      },
      preferred_pharmacy: {
        type: String,
      },
      primary_care_physician: {
        type: String,
      },
      primary_phone_number: {
        type: String,
      },
      social_security_no: {
        type: String,
      },
    },
    patient_information_for_authorization: {
      full_name: {
        type: String,
        required: true,
      },
      date_of_birth: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      other_name: {
        type: String,
        required: true,
      },
    },
    patient_signature: {
      type: String,
      required: true,
    },
    patient_signature_date: {
      type: String,
      required: true,
    },
    reason_for_visit: {
      type: String,
      required: true,
    },
    creator_email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PatientRegister = mongoose.model(
  "PatientRegister",
  patientRegisterSchema
);
module.exports = PatientRegister;
