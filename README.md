# Wild-Animals-API
This is a minimalist API built with Node.js, Express, and MongoDB to get data about wild animals. It offers endpoints for retrieving information on various animals and supports sorting and filtering based on different criteria.

## Table of contents
- [Technologies used in the project](#technologies-used-in-the-project)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Animal Model](#animal-model)
- [Filtering](#filtering)
- [Sorting](#sorting)
- [Pagination](#pagination)
- [Photos](#photos)
- [Example Complex Query](#example-complex-query)
- [Note](#note)
- [Contact](#contact)

## Technologies used in the project:
[![](https://skills.thijs.gg/icons?i=js,nodejs,express,mongo,&theme=dark)](https://skills.thijs.gg)

## Features:
- Retrieve information about various wild animals
- Sort animals based on different criteria such as name, species, population, location, maximum lifespan, and maximum weight
- Filter animals based on specific parameters
- Pagination support for browsing through large datasets
- Flexible and scalable solution for handling wild animal data

## API Endpoints
Retrieve a list of wild animals

    GET /api/v1/animals

Retrieve a specific animal by ID:

    GET /api/v1/animals/:id


## Animal Model
Each animal object returned will have the following fields:

- <b>_id</b>: The unique identifier of the animal.
- <b>name</b>: The name of the animal.
- <b>species<b/>: The species of the animal, which can be one of the following values:
  - "ssak",
  - "gad",
  - "ptak",
  - "ryba",
  - "płaz",
  - "owad",
  - "pająk",
  - "inny".
- <b>description</b>: A description of the animal.
- <b>location</b>: An array of locations where the animal can be found. Possible values include:
  - "europa",
  - "azja",
  - "afryka",
  - "ameryka północna",
  - "ameryka środkowa",
  - "ameryka południowa",
  - "australia",
  - "antarktyda",
  - "arktyka".
- <b>habitat</b>: An array of habitats where the animal lives.
- <b>population</b>: The population count of the animal.
- <b>diet</b>: The diet of the animal, which can be one of the following values:
  - "roślinożerne",
  - "mięsożerne",
  - "wszystkożerne",
  - "pasożyt",
  - "nektarożerne",
  - "padlinożerne",
  - "owadożerne",
  - "rybożerne",
  - "glonożerne",
  - "algożerne",
  - "miodożerne",
  - "karbożerne",
  - "aasfresser".
- <b>prey</b>: An array of prey animals that the animal hunts.
- <b>min_weight</b>: The minimum weight of the animal.
- <b>max_weight</b>: The maximum weight of the animal.
- <b>max_speed</b>: The maximum speed of the animal.
- <b>predators</b>: An array of predators that pose a threat to the animal.
- <b>gestation_period</b>: The gestation period of the animal.
- <b>average_litter_size</b>: The average litter size of the animal.
- <b>age_of_weaning</b>: The age at which the animal is weaned.
- <b>lifestyle</b>: The lifestyle of the animal, which can be one of the following values:
  - "w stadzie",
  - "samotnik",
  - "w parach",
  - "w rodzinie",
  - "w grupie".
- <b>min_life_span</b>: The minimum lifespan of the animal.
- <b>max_life_span</b>: The maximum lifespan of the animal.
- <b>skin_type</b>: The type of skin or covering the animal has, which can be one of the following values:
  - "sierść",
  - "pióra",
  - "łuski",
  - "skóra",
  - "futro",
  - "pancerz",
  - "chityna",
  - "inne".
- <b>min_length</b>: The minimum length of the animal.
- <b>max_length</b>: The maximum length of the animal.
- <b>min_height</b>: The minimum height of the animal.
- <b>max_height</b>: The maximum height of the animal.
- <b>color</b>: An array of colors associated with the animal.
- <b>photos</b>: An array of photo URLs of the animal.
- <b>trivia</b>: Additional trivia or interesting facts about the animal.

These fields provide comprehensive information about each animal and their characteristics.

## Sorting
The API supports sorting animals based on different criteria. When making a request to retrieve a list of animals, you can include the sort parameter in the query string to specify the sorting criteria. The available sorting fields include:

- name (ascending)
- -name (descending)
- species (ascending)
- -species (descending)
- population (ascending)
- -population (descending)
- location (ascending)
- -location (descending)
- max_life_span (ascending)
- -max_life_span (descending)
- max_weight (ascending)
- -max_weight (descending)
- min_weight (ascending)
- -min_weight (descending)
- max_speed (ascending)
- -max_speed (descending)

For example, to retrieve a list of animals sorted by population in descending order, you can make a request to 
                    
    GET /api/v1/animals?sort=-population

## Filtering
The API supports filtering animals based on various parameters. When making a request to retrieve a list of animals, you can include different filter parameters in the query string to narrow down the results. The available filter fields include:

- species: Filter animals by species. Possible values: "ssak", "gad", "ptak", "ryba", "płaz", "owad", "pająk", "inny".
- location: Filter animals by location. Possible values: "europa", "azja", "afryka", "ameryka północna", "ameryka środkowa", "ameryka południowa", "australia", "antarktyda", "arktyka".
- diet: Filter animals by diet. Possible values: "roślinożerne", "mięsożerne", "wszystkożerne", "pasożyt", "nektarożerne", "padlinożerne", "owadożerne", "rybożerne", "glonożerne", "algożerne", "nektarożerne", "miodożerne", "karbożerne", "aasfresser",
- lifestyle: Filter animals by lifestyle.
- min_population and max_population: Filter animals by population range.
- min_weight and max_weight: Filter animals by weight range.
- min_speed and max_speed: Filter animals by speed range.
- min_length and max_length: Filter animals by length range.
- min_height and max_height: Filter animals by height range.
- min_life_span and max_life_span: Filter animals by lifespan range.

For example, to retrieve a list of animals with a species of "ssak" and a location of "afryka" or of "europa", you can make a request to 

    GET /api/v1/animals?species=ssak&location=afryka&location=europa

## Pagination
The API supports pagination to retrieve a subset of animal data at a time. To paginate the results, include the following query parameters in your request:

<b>page</b>: The page number of the results (default: 1).<br>
<b>per_page</b>: The number of items to display per page (default: 20).

For example to retrieve the second page of results with 3 items per page, you can make the following request:

    GET /api/v1/animals?page=2&per_page=3

The response request will include additional information <b>totalAnimals</b> to facilitate client-side pagination. Here is an example response for the given request:

    {
    "status": "success",
    "results": 3,
    "totalAnimals": 10,
    "data": {
        "animals": [
            {
                "_id": "64a827ce8fcb9788c00063be",
                "name": "Wilk",
                "species": "ssak",
                "description": "Wilk jest jednym z najbardziej rozpoznawalnych drapieżników zamieszkujących półkule północne. Są to socjalne zwierzęta, żyjące w grupach zwanych watahami. Wilki są zwinne, dobrze zbudowane i wyposażone w ostre zęby i pazury. Ich futro jest gęste i zmiennego odcienia szarości, a oczy mają charakterystyczny żółty lub złocisty kolor. Wilki są drapieżnikami, a ich dieta opiera się głównie na mięsie, polując na duże ssaki jak jelenie, łosie oraz mniejsze zwierzęta.",
                "location": [
                    "europa",
                    "azja",
                    "ameryka północna",
                    "ameryka południowa"
                ],
                "habitat": [
                    "równiny trawiaste",
                    "lesisty teren"
                ],
                "population": 220000,
                "diet": "mięsożerne",
                "prey": [
                    "jelenie",
                    "jelenie kanadyjskie",
                    "łosie"
                ],
                "min_weight": 36,
                "max_weight": 68,
                "max_speed": 74,
                "predators": [
                    "człowiek"
                ],
                "gestation_period": "około 63 dni",
                "average_litter_size": 4,
                "age_of_weaning": "5 - 8 tygodni",
                "lifestyle": "w stadzie",
                "min_life_span": 10,
                "max_life_span": 12,
                "skin_type": "futro",
                "min_length": 100,
                "max_length": 160,
                "min_height": 60,
                "max_height": 90,
                "color": [
                    "brązowy",
                    "szary",
                    "czarny",
                    "biały"
                ],
                "photos": [
                    "animal-Wilk-1688741837959-4.jpeg",
                    "animal-Wilk-1688741837958-3.jpeg",
                    "animal-Wilk-1688741837957-2.jpeg",
                    "animal-Wilk-1688741837955-1.jpeg"
                ],
                "trivia": [
                    "Wilk jest doskonale przystosowany do chłodnych warunków klimatycznych.",
                    "Komunikacja w watahach odbywa się za pomocą szerokiej gamy dźwięków i gestów.",
                    "Przeciętny wilk ma łącznie 42 zęby w swojej paszczy. Ich zęby mogą mieć długość do 6,35 centymetra."
                ],
                "__v": 0
            },
            {
                "_id": "64a7d9176d9b8a7b8a9c4966",
                "name": "Krokodyl Nilowy",
                "species": "gad",
                "description": "Krokodyl nilowy to jedno z największych i najgroźniejszych gadów na świecie. Zamieszkuje głównie rejon rzeki Nil w Afryce. Posiada silne szczęki, które umożliwiają mu skuteczne polowanie na swoje ofiary. Krokodyle nilowe są drapieżnikami i ich dieta składa się głównie z ryb, ptaków, ssaków i innych zwierząt, które podejdą zbyt blisko brzegu rzeki. Są znane z swojej niezwykłej siły i zwinności w wodzie, gdzie polują na swoje ofiary.",
                "location": [
                    "afryka"
                ],
                "habitat": [
                    "bagna namorzynowe",
                    "rzeki",
                    "bagna słodkowodne"
                ],
                "population": 65000,
                "diet": "mięsożerne",
                "prey": [
                    "ryby",
                    "zebry",
                    "ptaki"
                ],
                "min_weight": 226,
                "max_weight": 748,
                "max_speed": 35,
                "predators": [
                    "kłusownicy"
                ],
                "gestation_period": "84 - 90 dni",
                "average_litter_size": 63,
                "age_of_weaning": "zaraz po wykluciu",
                "lifestyle": "w stadzie",
                "min_life_span": 40,
                "max_life_span": 52,
                "skin_type": "łuski",
                "min_length": 487,
                "max_length": 609,
                "min_height": 400,
                "max_height": 1300,
                "color": [
                    "zielony",
                    "brązowy"
                ],
                "photos": [
                    "animal-Krokodyl Nilowy-1688721687476-2.jpeg",
                    "animal-Krokodyl Nilowy-1688721687477-3.jpeg",
                    "animal-Krokodyl Nilowy-1688721687473-1.jpeg"
                ],
                "trivia": [
                    "Krokodyle nilowe potrafią być bardzo agresywne i niebezpieczne dla człowieka.",
                    "Ich skóra jest bardzo cenna i często wykorzystywana do produkcji wyrobów skórzanych."
                ],
                "__v": 0
            },
            {
                "_id": "64a8308ff0f6f03c69eeb4a2",
                "name": "Niedźwiedź Polarny",
                "species": "ssak",
                "description": "Niedźwiedź Polarne to duży i potężny ssak zamieszkujący arktyczne regiony na północnych obszarach Ziemi. Posiada białą, gęstą sierść, która pomaga mu w kamuflażu w środowisku o pokrywie lodowej. Niedźwiedzie Polarne są doskonale przystosowane do życia w ekstremalnie zimnych warunkach. Są mięsożercami i polują głównie na foki, ryby morskie i inne morskie ssaki. Są również znane z ich zdolności do pływania na długie dystanse.",
                "location": [
                    "arktyka"
                ],
                "habitat": [
                    "lód morski",
                    "wyspy arktyczne"
                ],
                "population": 25000,
                "diet": "mięsożerne",
                "prey": [
                    "foki",
                    "ryby",
                    "morskie ssaki"
                ],
                "min_weight": 350,
                "max_weight": 700,
                "max_speed": 40,
                "predators": [
                    "brak"
                ],
                "gestation_period": "około 8 miesięcy",
                "average_litter_size": 2,
                "age_of_weaning": "6 - 8 miesięcy",
                "lifestyle": "samotnik",
                "min_life_span": 20,
                "max_life_span": 30,
                "skin_type": "sierść",
                "min_length": 220,
                "max_length": 290,
                "min_height": 100,
                "max_height": 150,
                "color": [
                    "biały"
                ],
                "photos": [
                    "animal-Niedźwiedź Polarny-1688744079252-1.jpeg",
                    "animal-Niedźwiedź Polarny-1688744079254-3.jpeg",
                    "animal-Niedźwiedź Polarny-1688744079254-4.jpeg",
                    "animal-Niedźwiedź Polarny-1688744079254-2.jpeg"
                ],
                "trivia": [
                    "Niedźwiedzie Polarne prowadzą większość swojego życia na lodzie morskim.",
                    "Zagrożeniem dla niedźwiedzi polarnych jest topnienie lodowców spowodowane zmianami klimatycznymi."
                ],
                "__v": 0
            }
        ]
      }
    }

## Photos
The API provides a collection of photo URLs for each animal. The photo URLs are stored in an array called photos for each animal object. To view a specific photo, you can append the photo URL to the base URL by using the following format:

    /images/animals/{photo_filename}

For example, to open one of the photos of the African Buffalo (Bawół Afrykański), you would use the following URL:

    /images/animals/animal-Bawół Afrykański-1688743581922-3.jpeg

## Example Complex Query:

    /api/v1/animals?location=afryka&location=europa&diet=mięsożerne&page=2&_per_page=4&sort=-max_life_span

In this example, we have a complex query that combines multiple parameters to retrieve a specific set of animal data. Let's break down what each parameter does:
- <b>location=afryka&location=europa</b>: This parameter filters animals that can be found in either Africa or Europe. We are specifying multiple values for the location parameter using the same parameter name.
- <b>diet=mięsożerne</b>: This parameter filters animals based on their diet, specifically selecting animals that are carnivores.
- <b>page=2&_per_page=4</b>: These parameters enable pagination and indicate that we want to retrieve the second page of results with four animals per page.
- <b>sort=-max_life_span</b>: This parameter sorts the animals based on their maximum lifespan in descending order. The - sign before max_life_span indicates a descending sort.

## Note
Currently, the API provides only a limited set of animal data. However, we plan to continuously add new data to expand the collection of available information about wild animals. Please check back regularly as we will be updating our database and adding more animal species.

## Contact
If you have any questions or feedback, please contact me at kacper2007x48@gmail.com
