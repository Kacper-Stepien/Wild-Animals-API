const express = require("express");
const animalController = require("../controllers/animalController");

const router = express.Router();

router
  .route("/")
  .get(animalController.getAllAnimals)
  .post(
    animalController.uploadAnimalPhotos,
    animalController.resizeAnimalPhotos,
    animalController.createAnimalWithImage
  );

router
  .route("/:id")
  .get(animalController.getAnimalByID)
  .delete(animalController.deleteAnimal);

router.route("/search/:name").get(animalController.searchAnimalsByName);

module.exports = router;
