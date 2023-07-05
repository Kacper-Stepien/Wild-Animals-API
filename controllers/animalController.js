const fs = require("fs");

const Animal = require("../models/animalModel");
const catchAsync = require("../utils/catchAsync");
const CustomQuery = require("../utils/customQuery");
const upload = require("../utils/multer");

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

exports.getAnimal = catchAsync(async (req, res, next) => {
  const animal = await Animal.findById(req.params.id);

  if (!animal) {
    return next(new AppError("Nie znaleziono zwierzęcia o podanym ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      animal,
    },
  });
});

exports.createAnimal = catchAsync(async (req, res, next) => {
  const animal = await Animal.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      animal,
    },
  });
});
