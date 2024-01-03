const mongoose = require("mongoose");

const prfOneSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      default: "nahid.muradabir@gmail.com",
      required: true,
    },
    patient_information: {
      Doctor_Office: {
        type: String,
        required: true,
      },
      birth_date: {
        type: Date,
        required: true,
      },
      city_state_zip: {
        type: String,
        required: true,
      },
      employer: {
        type: String,
        required: true,
      },
      family_member: {
        type: String,
        required: true,
      },
      first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: false,
      },
      law_firm: {
        type: String,
        required: true,
      },
      middle_name: {
        type: String,
        required: false,
      },
      pharmacy_address: {
        type: String,
        required: true,
      },
      pharmacy_phone: {
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
      preferred_pharmacy: {
        type: String,
        required: true,
      },
      primary_care_physician: {
        type: String,
        required: true,
      },
      primary_phone_number: {
        type: String,
        required: true,
      },
      salutation: {
        type: String,
        required: true,
      },
      service: {
        type: String,
        required: true,
      },
      other_service: {
        type: String,
        required: false,
      },
      social_security_no: {
        type: String,
        required: true,
      },
      street_address: {
        type: String,
        required: true,
      },
    },
    accident_related: {
      adjuster_name: {
        type: String,
        required: true,
      },
      city_state_zip: {
        type: String,
        required: true,
      },
      claim_number: {
        type: String,
        required: true,
      },
      company_address: {
        type: String,
        required: true,
      },
      date_of_accident: {
        type: Date,
        required: true,
      },
      name_of_insured: {
        type: String,
        required: true,
      },
      name_of_worker: {
        type: String,
        required: true,
      },
      policy_number: {
        type: String,
        required: true,
      },
      report: {
        type: String,
        required: true,
      },
      type_of_accident: {
        type: String,
        required: true,
      },
      involvement_in_accident: {
        type: String,
        required: false,
      },
    },
    acknowledge_a: {
      type: String,
      required: true,
    },
    acknowledge_b: {
      type: String,
      required: true,
    },
    acknowledge_c: {
      type: String,
      required: true,
    },
    acknowledge_d: {
      type: String,
      required: true,
    },
    acknowledge_e: {
      type: String,
      required: true,
    },
    acknowledge_f: {
      type: String,
      required: true,
    },
    acknowledgement_patient_signature: {
      type: String,
      required: true,
    },
    acknowledgement_patient_signature_date: {
      type: Date,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },

    in_case_of_emergency: {
      name_of_local_relative: {
        type: String,
        required: true,
      },
      relationship_to_patient: {
        type: String,
        required: true,
      },
    },

    insurance_information: {
      auto_accident: {
        type: Boolean,
        required: true,
      },
      group_number: {
        type: String,
        required: true,
      },
      member_id_number: {
        type: String,
        required: true,
      },
      patient_relationship_subscriber: {
        type: String,
        required: true,
      },
      primary_insurance: {
        type: String,
        required: true,
      },
      other_primary_insurance: {
        type: String,
        required: false,
      },
      subscriber_first_name: {
        type: String,
        required: true,
      },
      subscriber_last_name: {
        type: String,
        required: true,
      },
      subscriber_phone: {
        type: String,
        required: true,
      },
      subscriber_social_security: {
        type: String,
        required: true,
      },
    },
    patient_signature: {
      type: String,
      required: true,
    },
    patient_signature_date: {
      type: Date,
      required: true,
    },
    reason_for_visit: {
      type: String,
      required: true,
    },
    relationship_to_patient: {
      type: String,
      required: true,
    },
    responsible_party_witness_signature: {
      type: String,
      required: true,
    },
    responsible_party_witness_signature_date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PrfOne = mongoose.model("PrfOne", prfOneSchema);
module.exports = PrfOne;
