const mongoose = require("mongoose");

const prfThreeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      default: "nahid.muradabir@gmail.com",
      // required: true,
      required: false,
    },
    prfOne: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PrfOne",
      // required: true,
      required: false,
    },
    effective_time_period: {
      day: {
        type: Number,
        // required: true,
        required: false,
      },
      month: {
        type: Number,
        // required: true,
        required: false,
      },
      year: {
        type: Number,
        // required: true,
        required: false,
      },
    },
    health_care_entity_authorized_information: {
      address: {
        type: String,
        // required: true,
        required: false,
      },
      city: {
        type: String,
        // required: true,
        required: false,
      },
      fax: {
        type: String,
        // required: true,
        required: false,
      },
      name: {
        type: String,
        // required: true,
        required: false,
      },
      phone: {
        type: String,
        // required: true,
        required: false,
      },
      state: {
        type: String,
        // required: true,
        required: false,
      },
      zip_code: {
        type: String,
        // required: true,
        required: false,
      },
    },

    include: {
      drug_alcohol_or_substance_abuse_record: {
        type: String,
        // required: true,
        required: false,
      },
      genetic_information: {
        type: String,
        // required: true,
        required: false,
      },
      hiv_aids_information: {
        type: String,
        // required: true,
        required: false,
      },
      mental_health_record: {
        type: String,
        // required: true,
        required: false,
      },
    },
    information_regarding_person: {
      address: {
        type: String,
        // required: true,
        required: false,
      },
      city: {
        type: String,
        // required: true,
        required: false,
      },
      fax: {
        type: String,
        // required: true,
        required: false,
      },
      name: {
        type: String,
        // required: true,
        required: false,
      },
      phone: {
        type: String,
        // required: true,
        required: false,
      },
      state: {
        type: String,
        // required: true,
        required: false,
      },
      zip_code: {
        type: String,
        // required: true,
        required: false,
      },
    },

    patient_information_for_authorization: {
      address: {
        type: String,
        // required: true,
        required: false,
      },
      city: {
        type: String,
        // required: true,
        required: false,
      },
      date_of_birth: {
        type: Date,
        // required: true,
        required: false,
      },
      email: {
        type: String,
        required: false,
      },
      full_name: {
        type: String,
        // required: true,
        required: false,
      },
      other_name: {
        type: String,
        // required: true,
        required: false,
      },
      phone: {
        type: String,
        // required: true,
        required: false,
      },
      state: {
        type: String,
        // required: true,
        required: false,
      },
      zip: {
        type: String,
        // required: true,
        required: false,
      },
    },

    reason_for_release_information: {
      treatment_medical_care: {
        type: Boolean,
        required: false,
      },
      personal_use: {
        type: Boolean,
        required: false,
      },
      billing_or_claims: {
        type: Boolean,
        required: false,
      },
      insurance: {
        type: Boolean,
        required: false,
      },
      legal_purposes: {
        type: Boolean,
        required: false,
      },
      disability_determination: {
        type: Boolean,
        required: false,
      },
      school: {
        type: Boolean,
        required: false,
      },
      employment: {
        type: Boolean,
        required: false,
      },
      other: {
        type: Object,
        status: Boolean,
        message: String,
        required: false,
      },
    },
    signatures: {
      legal_representative_relationship_to_patient_signature: {
        type: String,
        // required: true,
        required: false,
      },
      patient_representative_signature: {
        type: String,
        // required: true,
        required: false,
      },
      patient_representative_signature_date: {
        type: Date,
        // required: true,
        required: false,
      },
      signature_of_minor: {
        type: String,
        // required: true,
        required: false,
      },
      signature_of_minor_date: {
        type: Date,
        // required: true,
        required: false,
      },
      witness_signature: {
        type: String,
        // required: true,
        required: false,
      },
      witness_signature_date: {
        type: Date,
        // required: true,
        required: false,
      },
    },
    specific_information: {
      medical_record_from_date: {
        type: Date,
        required: false,
      },
      medical_record_to_date: {
        type: Date,
        required: false,
      },
      other_value: {
        type: String,
        required: false,
      },
      type: {
        type: String,
        // required: true,
        required: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

const PrfThree = mongoose.model("PrfThree", prfThreeSchema);
module.exports = PrfThree;
