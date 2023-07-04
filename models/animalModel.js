const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Zwierzę musi mieć imię"],
    unique: true,
  },
  species: {
    type: String,
    enum: ["Ssak", "Gad", "Ptak", "Ryba", "Płaz", "Owad", "Pająk", "Inny"],
    required: [true, "Zwierzę musi mieć gatunek"],
  },
  description: {
    type: String,
    required: [true, "Zwierzę musi mieć opis"],
  },
  location: {
    type: [String],
    enum: [
      "Eurpa",
      "Azja",
      "Afryka",
      "Ameryka Północna",
      "Ameryka Południowa",
      "Australia",
      "Antarktyda",
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
      "Roślinożerne",
      "Mięsożerne",
      "Wszystkożerne",
      "Pasożyt",
      "Nektarożerne",
      "Padlinożerne",
      "Owadożerne",
      "Rybożerne",
      "Glonożerne",
      "Algożerne",
      "Nektarożerne",
      "Miodożerne",
      "Karbożerne",
      "Aasfresser",
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
  gestation_period: {
    type: String,
    required: [true, "Zwierzę musi mieć okres ciąży"],
  },
  lifestyle: {
    type: String,
    enum: ["W stadzie", "Samotnik", "W parach", "W rodzinie", "W grupie"],
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
    enum: ["Sierść", "Pióra", "Łuski", "Skóra", "Pancerz", "Chityna", "Inne"],
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
