const fs = require("fs");
const sharp = require("sharp");

const Animal = require("../models/animalModel");
const catchAsync = require("../utils/catchAsync");
const CustomQuery = require("../utils/customQuery");
const AppError = require("../utils/appError");
const upload = require("../utils/multer");

exports.uploadAnimalPhotos = upload.array("photos", 5);

exports.resizeAnimalPhotos = catchAsync(async (req, res, next) => {
  if (!req.files) return next();

  const photos = [];
  await Promise.all(
    req.files.map(async (file, i) => {
      const fileName = `animal-${req.body.name}-${Date.now()}-${i + 1}.jpeg`;
      await sharp(req.files[i].buffer)
        .resize(1920, 1080)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/animals/${fileName}`);
      photos.push(fileName);
    })
  );

  req.body.photos = photos;

  next();
});

exports.getAllAnimals = catchAsync(async (req, res, next) => {
  const query = Animal.find();
  const customQuery = new CustomQuery(query, req.query);

  const filteredQuery = customQuery.filter().query;
  const totalAnimals = await Animal.countDocuments(filteredQuery);
  const animals = await customQuery.paginate().sort().query;

  res.status(200).json({
    status: "success",
    results: animals.length,
    totalAnimals,
    data: {
      animals,
    },
  });
});

exports.getAnimal = catchAsync(async (req, res, next) => {
  const animal = await Animal.findById(req.params.id);

  if (!animal) {
    return next(new AppError("No animal found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      animal,
    },
  });
});

exports.createAnimalWithImage = catchAsync(async (req, res, next) => {
  if (!req.body.photos || req.body.photos.length === 0) {
    throw new AppError("Animal must have at least one photo", 400);
  }

  try {
    const animal = await Animal.create(req.body);
    animal.photos = req.body.photos;
    await animal.save();

    res.status(201).json({
      status: "success",
      data: {
        animal,
      },
    });
  } catch (err) {
    await Promise.all(
      req.body.photos.map(async (photo) => {
        await fs.promises.unlink(`public/images/animals/${photo}`);
      })
    );

    next(err);
  }
});

exports.deleteAnimal = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const animal = await Animal.findByIdAndDelete(id);

  if (!animal) {
    return next(new AppError("No animal found with that ID", 404));
  }

  await Promise.all(
    animal.photos.map(async (photo) => {
      await fs.promises.unlink(`public/images/animals/${photo}`);
    })
  );

  res.status(204).json({
    status: "success",
    data: null,
  });
});
