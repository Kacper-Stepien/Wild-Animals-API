const Animal = require("../models/animalModel");
const catchAsync = require("../utils/catchAsync");
const CustomQuery = require("../utils/customQuery");

exports.getAllAnimals = catchAsync(async (req, res, next) => {
  console.log(req.query);
  const query = Animal.find();
  const customQuery = new CustomQuery(query, req.query);

  const animals = await customQuery.filter().paginate().sort().query;

  res.status(200).json({
    status: "success",
    results: animals.length,
    data: {
      animals,
    },
  });
});
