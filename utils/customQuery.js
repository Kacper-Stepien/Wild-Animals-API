const lodash = require("lodash");

class CustomQuery {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const availableFilterFields = [
      "species", // Gatunek
      "location", // Lokalizacja
      "diet", // Dieta
      "lifestyle", // Tryb życia
      "min_population", // Minimalna populacja
      "max_population", // Maksymalna populacja
      "min_weight", // Minimalna waga
      "max_weight", // Maksymalna waga
      "min_speed", // Minimalna prędkość
      "max_speed", // Maksymalna prędkość
      "min_length", // Minimalna długość
      "max_length", // Maksymalna długość
      "max_height", // Maksymalna wysokość
      "min_height", // Minimalna wysokość
      "min_life_span", // Minimalna długość życia
      "max_life_span", // Maksymalna długość życia
    ];

    const filters = {};

    availableFilterFields.forEach((field) => {
      if (lodash.isArray(this.queryString[field])) {
        // Spłaszczamy wartość tablicy za pomocą flatMap()
        const flattenedValues = lodash.flatMap(this.queryString[field]);
        if (flattenedValues.length > 0) {
          filters[field] = { $in: flattenedValues };
        }
      } else if (this.queryString[field]) {
        if (field === "min_population") {
          filters["population"] = {
            $gte: this.queryString[field],
          };
        } else if (field === "max_population") {
          filters["population"] = {
            $lte: this.queryString[field],
          };
        } else if (field === "min_weight") {
          filters["max_weight"] = {
            $gte: this.queryString[field],
          };
        } else if (field === "max_weight") {
          filters["min_weight"] = {
            $lte: this.queryString[field],
          };
        } else if (field === "min_speed") {
          filters["max_speed"] = {
            $gte: this.queryString[field],
          };
        } else if (field === "max_speed") {
          filters["max_speed"] = {
            $lte: this.queryString[field],
          };
        } else if (field === "min_length") {
          filters["max_length"] = {
            $gte: this.queryString[field],
          };
        } else if (field === "max_length") {
          filters["min_length"] = {
            $lte: this.queryString[field],
          };
        } else if (field === "min_height") {
          filters["max_height"] = {
            $gte: this.queryString[field],
          };
        } else if (field === "max_height") {
          filters["min_height"] = {
            $lte: this.queryString[field],
          };
        } else if (field === "min_life_span") {
          filters["max_life_span"] = {
            $gte: this.queryString[field],
          };
        } else if (field === "max_life_span") {
          filters["min_life_span"] = {
            $lte: this.queryString[field],
          };
        } else {
          filters[field] = this.queryString[field];
        }
      }
    });

    this.query = this.query.find(filters);
    return this;
  }

  sort() {
    const { sort } = this.queryString;

    const availableSortFields = [
      "name",
      "-name",
      "species",
      "-species",
      "population",
      "-population",
      "location",
      "-location",
      "max_life_span",
      "-max_life_span",
      "max_weight",
      "-max_weight",
      "min_weight",
      "-min_weight",
      "max_speed",
      "-max_speed",
    ];

    if (sort) {
      const sortByFields = sort
        .split(",")
        .filter((field) => availableSortFields.includes(field));
      const filters = sortByFields.join(" ");
      this.query = this.query.sort(`${filters}`);
    } else {
      this.query = this.query.sort("-population");
    }

    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const perPage = this.queryString.per_page * 1 || 20;
    const skip = (page - 1) * perPage;

    this.query = this.query.skip(skip).limit(perPage);
    return this;
  }
}

module.exports = CustomQuery;
