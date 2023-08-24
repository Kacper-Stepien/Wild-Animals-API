const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Animal must have a name"],
    unique: true,
  },
  species: {
    type: String,
    enum: ["ssak", "gad", "ptak", "ryba", "płaz", "owad", "pająk", "inny"],
    required: [true, "Animal must have a species"],
  },
  description: {
    type: String,
    required: [true, "Animal must have a description"],
  },
  location: {
    type: [String],
    enum: [
      "europa",
      "azja",
      "afryka",
      "ameryka północna",
      "ameryka środkowa",
      "ameryka południowa",
      "australia",
      "antarktyda",
      "arktyka",
    ],
    required: [true, "Animal must have a location"],
  },
  habitat: {
    type: [String],
    required: [true, "Animal must have a habitat"],
  },
  population: {
    type: Number,
    required: [true, "Animal must have a population"],
  },
  diet: {
    type: String,
    enum: [
      "roślinożerne",
      "mięsożerne",
      "wszystkożerne",
      "pasożyt",
      "nektarożerne",
      "padlinożerne",
      "owadożerne",
      "rybożerne",
      "glonożerne",
      "algożerne",
      "nektarożerne",
      "miodożerne",
      "karbożerne",
      "aasfresser",
    ],
    required: [true, "Animal must have a diet"],
  },
  prey: {
    type: [String],
    required: [true, "Animal must have a prey"],
  },
  min_weight: {
    type: Number,
    required: [true, "Animal must have a minimum weight"],
  },
  max_weight: {
    type: Number,
    required: [true, "Animal must have a maximum weight"],
  },
  max_speed: {
    type: Number,
    required: [true, "Animal must have a maximum speed"],
  },
  predators: {
    type: [String],
    required: [true, "Animal must have a predators"],
  },
  gestation_period: {
    type: String,
    required: [true, "Animal must have a gestation period"],
  },
  average_litter_size: {
    type: Number,
    required: [true, "Animal must have a average litter size"],
  },
  age_of_weaning: {
    type: String,
    required: [true, "Animal must have a age of weaning"],
  },
  lifestyle: {
    type: String,
    enum: [
      "w stadzie",
      "samotnik",
      "w parach",
      "w rodzinie",
      "w grupie",
      "w koloni",
    ],
    required: [true, "Animal must have a lifestyle"],
  },
  min_life_span: {
    type: Number,
    required: [true, "Animal must have a minimum life span"],
  },
  max_life_span: {
    type: Number,
    required: [true, "Animal must have a maximum life span"],
  },
  skin_type: {
    type: String,
    enum: [
      "sierść",
      "pióra",
      "łuski",
      "skóra",
      "futro",
      "pancerz",
      "chityna",
      "inne",
    ],
    required: [true, "Animal must have a skin type"],
  },
  min_length: {
    type: Number,
    required: [true, "Animal must have a minimum length"],
  },
  max_length: {
    type: Number,
    required: [true, "Animal must have a maximum length"],
  },
  min_height: {
    type: Number,
    required: [true, "Animal must have a minimum height"],
  },
  max_height: {
    type: Number,
    required: [true, "Animal must have a maximum height"],
  },
  color: {
    type: [String],
    required: [true, "Animal must have a color"],
  },
  photos: {
    type: [String],
    required: [true, "Animal must have at least one photo"],
  },
  trivia: {
    type: [String],
  },
});

const Animal = mongoose.model("Animal", animalSchema);
module.exports = Animal;
