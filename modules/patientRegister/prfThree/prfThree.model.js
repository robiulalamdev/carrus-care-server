const mongoose = require("mongoose");

const prfThreeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      default: "nahid.muradabir@gmail.com",
      required: true,
    },
    prfTwo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PrfTwo",
      required: true,
    },
    effective_time_period: {
      day: {
        type: Number,
        required: true,
      },
      month: {
        type: Number,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
    },
    health_care_entity_authorized_information: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      fax: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zip_code: {
        type: String,
        required: true,
      },
    },

    include: {
      drug_alcohol_or_substance_abuse_record: {
        type: String,
        required: true,
      },
      genetic_information: {
        type: String,
        required: true,
      },
      hiv_aids_information: {
        type: String,
        required: true,
      },
      mental_health_record: {
        type: String,
        required: true,
      },
    },
    information_regarding_person: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      fax: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zip_code: {
        type: String,
        required: true,
      },
    },

    patient_information_for_authorization: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      date_of_birth: {
        type: Date,
        required: true,
      },
      email: {
        type: String,
        required: false,
      },
      full_name: {
        type: String,
        required: true,
      },
      other_name: {
        type: String,
        required: true,
      },
      phone: {
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
        required: true,
      },
      patient_representative_signature: {
        type: String,
        required: true,
      },
      patient_representative_signature_date: {
        type: Date,
        required: true,
      },
      signature_of_minor: {
        type: String,
        required: true,
      },
      signature_of_minor_date: {
        type: Date,
        required: true,
      },
      witness_signature: {
        type: String,
        required: true,
      },
      witness_signature_date: {
        type: Date,
        required: true,
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
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const PrfThree = mongoose.model("PrfThree", prfThreeSchema);
module.exports = PrfThree;
