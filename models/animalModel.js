const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Zwierzę musi mieć imię"],
    unique: true,
  },
  species: {
    type: String,
    enum: ["ssak", "gad", "ptak", "ryba", "płaz", "owad", "pająk", "inny"],
    required: [true, "Zwierzę musi mieć gatunek"],
  },
  description: {
    type: String,
    required: [true, "Zwierzę musi mieć opis"],
  },
  location: {
    type: [String],
    enum: [
      "europa",
      "azja",
      "afryka",
      "ameryka północna",
      "ameryka południowa",
      "australia",
      "antarktyda",
    ],
    required: [true, "Zwierzę musi mieć miejsce pobytu"],
  },
  habitat: {
    type: [String],
    required: [true, "Zwierzę musi mieć środowisko życia"],
  },
  population: {
    type: Number,
    required: [true, "Zwierzę musi mieć populację"],
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
    required: [true, "Zwierzę musi mieć dietę"],
  },
  min_weight: {
    type: Number,
    required: [true, "Zwierzę musi mieć minimalną wagę"],
  },
  max_weight: {
    type: Number,
    required: [true, "Zwierzę musi mieć maksymalną wagę"],
  },
  max_speed: {
    type: Number,
    required: [true, "Zwierzę musi mieć maksymalną prędkość"],
  },
  predators: {
    type: [String],
    required: [true, "Zwierzę musi mieć drapieżników"],
  },
  average_litter_size: {
    type: Number,
    required: [true, "Zwierzę musi mieć średnią liczbę potomków"],
  },
  // average_litter_size: {
  //   type: String,
  //   required: [true, "Zwierzę musi mieć okres ciąży"],
  // },
  lifestyle: {
    type: String,
    enum: ["w stadzie", "samotnik", "w parach", "w rodzinie", "w grupie"],
    required: [true, "Zwierzę musi mieć styl życia"],
  },
  average_life_span: {
    type: Number,
    required: [true, "Zwierzę musi mieć średnią długość życia"],
  },
  max_life_span: {
    type: Number,
    required: [true, "Zwierzę musi mieć maksymalną długość życia"],
  },
  skin_type: {
    type: String,
    enum: ["sierść", "pióra", "łuski", "skóra", "pancerz", "chityna", "inne"],
    required: [true, "Zwierzę musi mieć typ skóry"],
  },
  min_length: {
    type: Number,
    required: [true, "Zwierzę musi mieć minimalną długość"],
  },
  max_length: {
    type: Number,
    required: [true, "Zwierzę musi mieć maksymalną długość"],
  },
  min_height: {
    type: Number,
    required: [true, "Zwierzę musi mieć minimalną wysokość"],
  },
  max_height: {
    type: Number,
    required: [true, "Zwierzę musi mieć maksymalną wysokość"],
  },
  color: {
    type: [String],
    required: [true, "Zwierzę musi mieć kolor"],
  },
  photos: {
    type: [String],
    required: [true, "Zwierzę musi mieć zdjęcia"],
  },
  trivia: {
    type: [String],
  },
});

const Animal = mongoose.model("Animal", animalSchema);
module.exports = Animal;
