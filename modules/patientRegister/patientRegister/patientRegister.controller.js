const PrfOne = require("../prfOne/prfOne.model");
const PrfThree = require("../prfThree/prfThree.model");
const PrfTwo = require("../prfTwo/prfTwo.model");

const getMyRegisters = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  try {
    let query = {};
    if (req.user?.email !== process.env.ADMIN_MAIL) {
      query = { email: req.user?.email };
    }
    const totalCount = await PrfOne.countDocuments(query);

    const result = await PrfOne.find(query)
      .sort({ _id: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .then(async function (resultItems) {
        const populatedRegisterInfos = await Promise.all(
          resultItems?.map(async (item) => {
            const prfTwoData = await PrfTwo.findOne({
              prfOne: item._id,
              ...query,
            });
            const prfThreeData = await PrfThree.findOne({
              prfOne: item._id,
              ...query,
            });
            return {
              prfOneData: item,
              prfTwoData,
              prfThreeData,
            };
          })
        );
        return populatedRegisterInfos;
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

const getMyRegister = async (req, res) => {
  try {
    const result = await PrfOne.find({ _id: req.params.id }).then(
      async function (resultItems) {
        const populatedRegisterInfos = await Promise.all(
          resultItems?.map(async (item) => {
            const prfTwoData = await PrfTwo.findOne({
              prfOne: item._id,
            });
            const prfThreeData = await PrfThree.findOne({
              prfOne: item._id,
            });
            return {
              prfOneData: item,
              prfTwoData,
              prfThreeData,
            };
          })
        );
        return populatedRegisterInfos;
      }
    );

    res.status(200).json({
      success: true,
      message: "Registers Retrieve Success",
      data: result,
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
  getMyRegister,
};
