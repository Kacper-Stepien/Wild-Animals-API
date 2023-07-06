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

router.route("/:id").get(animalController.getAnimal);
//   .patch(animalController.updateAnimal)
//   .delete(animalController.deleteAnimal);

module.exports = router;
