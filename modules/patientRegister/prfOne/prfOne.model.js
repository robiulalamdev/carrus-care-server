const mongoose = require("mongoose");

const prfOneSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      default: "nahid.muradabir@gmail.com",
      required: false,
      // required: true,
    },
    patient_information: {
      Doctor_Office: {
        type: String,
        required: false,
        // required: true,
      },
      birth_date: {
        type: Date,
        required: false,
        // required: true,
      },
      city_state_zip: {
        type: String,
        required: false,
        // required: true,
      },
      employer: {
        type: String,
        required: false,
        // required: true,
      },
      family_member: {
        type: String,
        required: false,
        // required: true,
      },
      first_name: {
        type: String,
        required: false,
        // required: true,
      },
      last_name: {
        type: String,
        required: false, // old
      },
      law_firm: {
        type: String,
        required: false,
        // required: true,
      },
      middle_name: {
        type: String,
        required: false, // old
      },
      pharmacy_address: {
        type: String,
        required: false,
        // required: true,
      },
      pharmacy_phone: {
        type: String,
        required: false,
        // required: true,
      },
      phone_number: {
        type: String,
        required: false,
        // required: true,
      },
      preferred_method: {
        type: String,
        required: false,
        // required: true,
      },
      preferred_pharmacy: {
        type: String,
        required: false,
        // required: true,
      },
      primary_care_physician: {
        type: String,
        required: false,
        // required: true,
      },
      primary_phone_number: {
        type: String,
        required: false,
        // required: true,
      },
      martial_status: {
        type: String,
        required: false,
        // required: true,
      },
      service: {
        type: String,
        required: false,
        // required: true,
      },
      other_service: {
        type: String,
        required: false, // old
      },
      social_security_no: {
        type: String,
        required: false,
        // required: true,
      },
      street_address: {
        type: String,
        required: false,
        // required: true,
      },
      picture: {
        type: String,
        required: false,
      },
    },
    accident_related: {
      adjuster_name: {
        type: String,
        required: false,
        // required: true,
      },
      city_state_zip: {
        type: String,
        required: false,
        // required: true,
      },
      claim_number: {
        type: String,
        required: false,
        // required: true,
      },
      company_address: {
        type: String,
        required: false,
        // required: true,
      },
      date_of_accident: {
        type: Date,
        required: false,
        // required: true,
      },
      name_of_insured: {
        type: String,
        required: false,
        // required: true,
      },
      name_of_worker: {
        type: String,
        required: false,
        // required: true,
      },
      insurance_phone_number: {
        type: String,
        required: false,
      },
      insurance_fax_number: {
        type: String,
        required: false,
      },
      policy_number: {
        type: String,
        required: false,
        // required: true,
      },
      report: {
        type: String,
        required: false,
        // required: true,
      },
      type_of_accident: {
        type: String,
        required: false,
        // required: true,
      },
      involvement_in_accident: {
        type: String,
        required: false, // old
      },
    },
    acknowledge_a: {
      type: String,
      required: false,
      // required: true,
    },
    acknowledge_b: {
      type: String,
      required: false,
      // required: true,
    },
    acknowledge_c: {
      type: String,
      required: false,
      // required: true,
    },
    acknowledge_d: {
      type: String,
      required: false,
      // required: true,
    },
    acknowledge_e: {
      type: String,
      required: false,
      // required: true,
    },
    acknowledge_f: {
      type: String,
      required: false,
      // required: true,
    },
    acknowledgement_patient_signature: {
      type: String,
      required: false,
      // required: true,
    },
    acknowledgement_patient_signature_date: {
      type: Date,
      required: false,
      // required: true,
    },
    date: {
      type: Date,
      required: false,
      // required: true,
    },

    in_case_of_emergency: {
      name_of_local_relative: {
        type: String,
        required: false,
        // required: true,
      },
      relationship_to_patient: {
        type: String,
        required: false,
        // required: true,
      },
      phone_number: {
        type: String,
        required: false,
        // required: true,
      },
    },

    insurance_information: {
      auto_accident: {
        type: String,
        default: "Yes",
        required: true,
      },
      front_picture: {
        type: String,
        required: false,
      },
      back_picture: {
        type: String,
        required: false,
      },
      group_number: {
        type: String,
        required: false,
        // required: true,
      },
      member_id_number: {
        type: String,
        required: false,
        // required: true,
      },
      patient_relationship_subscriber: {
        type: String,
        required: false,
        // required: true,
      },
      patient_relationship_subscriber_other: {
        type: String,
        required: false,
        // required: true,
      },
      primary_insurance: {
        type: String,
        required: false,
        // required: true,
      },
      other_primary_insurance: {
        type: String,
        required: false, // old
      },
      subscriber_first_name: {
        type: String,
        required: false,
        // required: true,
      },
      subscriber_last_name: {
        type: String,
        required: false,
        // required: true,
      },
      subscriber_phone: {
        type: String,
        required: false,
        // required: true,
      },
      subscriber_social_security: {
        type: String,
        required: false,
        // required: true,
      },
    },
    patient_signature: {
      type: String,
      required: false,
      // required: true,
    },
    patient_signature_date: {
      type: Date,
      required: false,
      // required: true,
    },
    reason_for_visit: {
      type: String,
      required: false,
      // required: true,
    },
    relationship_to_patient: {
      type: String,
      required: false,
      // required: true,
    },
    responsible_party_witness_signature: {
      type: String,
      required: false,
      // required: true,
    },
    responsible_party_witness_signature_date: {
      type: Date,
      required: false,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PrfOne = mongoose.model("PrfOne", prfOneSchema);
module.exports = PrfOne;
