const { sendWelcomeMail } = require("../../utils/sendEmailHelpers");
const PatientRegister = require("./patientRegister.model");

const createPatientRegister = async (req, res) => {
  try {
    const newPatientRegister = new PatientRegister(req.body);
    const result = await newPatientRegister.save();
    await sendWelcomeMail(process.env.ADMIN_MAIL);
    await sendWelcomeMail("nahid.muradabir@gmail.com");
    res.status(200).json({
      success: true,
      message: "Register Create Success",
      data: result,
    });
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Register Create Failed",
      error_message: error.message,
    });
  }
};

const getMyPatientRegisters = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  try {
    let query = {};
    if (req.user?.email !== process.env.ADMIN_MAIL) {
      query = { userEmail: req.user?.email };
    }
    const totalCount = await PatientRegister.countDocuments(query);
    const totalPages = Math.ceil(totalCount / pageSize);
    const result = await PatientRegister.find(query)
      .sort({ _id: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    res.status(200).json({
      success: true,
      message: "Patient Registers Retrieve Success",
      data: result,
      pagination: {
        page,
        pageSize,
        totalCount,
        totalPages,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Patient Registers Retrieve Failed",
      error_message: error.message,
    });
  }
};
const getPatientRegisterById = async (req, res) => {
  try {
    let query = {};
    if (req.user?.email !== process.env.ADMIN_MAIL) {
      query = { userEmail: req.user?.email, _id: req.params.id };
    } else {
      query = { _id: req.params.id };
    }
    const result = await PatientRegister.findOne(query);
    res.status(200).json({
      success: true,
      message: "Patient Registers Retrieve Success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Patient Registers Retrieve Failed",
      error_message: error.message,
    });
  }
};

module.exports = {
  createPatientRegister,
  getMyPatientRegisters,
  getPatientRegisterById,
};
