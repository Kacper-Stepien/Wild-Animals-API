const lodash = require("lodash");

class CustomQuery {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const availableFilterFields = [
      "species", // Gatunek
      "location", // Lokalizacja (kontynent)
      "diet", // Dieta
      "lifestyle", // Tryb życia
      "min_population", // Minimalna populacja
      "max_population", // Maksymalna populacja
      "min_weight", // Minimalna waga
      "max_weight", // Maksymalna waga
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
        filters[field] = this.queryString[field];
      }
    });

    this.query = this.query.find(filters);
    return this;
  }

  sort() {
    const { sort } = this.queryString;

    const availableSortFields = [
      "name",
      "species",
      "population",
      "location",
      "average_life_span",
    ];

    if (sort) {
      const sortByFields = sort
        .split(",")
        .filter((field) => availableSortFields.includes(field));
      const filters = sortByFields.join(" ");
      this.query = this.query.sort(filters);
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
