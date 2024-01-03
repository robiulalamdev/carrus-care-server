const PrfThree = require("../prfThree/prfThree.model");

const getMyRegisters = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  try {
    let query = {};
    if (req.user?.email !== process.env.ADMIN_MAIL) {
      query = { userEmail: req.user?.email };
    }
    const totalCount = await PrfThree.countDocuments(query);

    const result = await PrfThree.find(query)
      .sort({ _id: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .populate({
        path: "prfTwo",
        populate: {
          path: "prfOne",
        },
      });

    res.status(200).json({
      success: true,
      message: "Registers Retrieve Success",
      data: result,
      pagination: {
        page,
        pageSize,
        totalCount,
        totalPages: Math.ceil(totalCount / pageSize),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Registers Retrieve Failed",
      error_message: error.message,
    });
  }
};

module.exports = {
  getMyRegisters,
};
