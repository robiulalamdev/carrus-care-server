const PatientRegister = require("./patientRegister.model");

const createPatientRegister = async (req, res) => {
  try {
    if (req.user?.email) {
      req.body["creator_email"] = req.user?.email;
    }
    const newPatientRegister = new PatientRegister(req.body);
    const result = await newPatientRegister.save();
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
  try {
    if (req.user?.role === "Ädmin") {
      const result = await PatientRegister.find({}).sort({ _id: -1 });
      res.status(200).json({
        success: true,
        message: "Patient Registers Retrieve Success",
        data: result,
      });
    } else {
      const result = await PatientRegister.find({
        creator_email: req.user?.email,
      }).sort({ _id: -1 });
      res.status(200).json({
        success: true,
        message: "Patient Registers Retrieve Success",
        data: result,
      });
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Patient Registers Retrieve Failed",
      error_message: error.message,
    });
  }
};

module.exports = {
  createPatientRegister,
  getMyPatientRegisters,
};
