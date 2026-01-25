const RECIPES = [
  {
    name: "Pizza",
    vegetarian: true,
    vegan: false,
    glutenfree: true,
    time: 30,
    difficulty: "leicht",
    ingredients: [
     "Mehl",
     "Trockenhefe",
     "Olivenöl",
     "Salz",
     "1 TL Zucker",
     "Käse",
     "Mozzarella",
     "Paprika",
     "Tomatensauße / passierte Tomaten und Kräuter",
     "beliebige Belage"
    ],
    appliances:[
        "Ofen"
    ],
    tags: [
    ]
  },
  {
    name: "Strogidoof",
    vegetarian: true,
    vegan: false,
    glutenfree: true,
    time: 30,
    difficulty: "leicht",
    ingredients: [
      "Nudeln",
      "Champignons",
      "Saure Gurke",
      "Senf",
      "Sahne",
      "Mehl / Speisestärke",
      "Zwiebel",
      "Paprika"
    ],
    appliances:[
        "Herd"
    ],
    tags: [
    ]
  },
  {
    name: "Curry",
    vegetarian: true,
    vegan: true,
    glutenfree: true,
    time: 30,
    difficulty: "leicht",
    ingredients: [
        "Kokosmilch",
        "Erdnüsse (+ Erdnussbutter)",
        "Süßkartoffel / Kochbanane",
        "Brokkoli",
        "Zwiebeln",
        "Kichererbsen",
        "Curry-Paste",
        "Reis"
    ],
    appliances:[
        "Herd"
    ],
    tags: [
    ]
  },
  {
    name: "Spinat-Feta-Nudeln",
    vegetarian: true,
    vegan: false,
    glutenfree: true,
    time: 30,
    difficulty: "leicht",
    ingredients: [
        "Nudeln",
        "Spinat",
        "Feta",
        "Frühlingszwiebeln",
        "Zitronensaft",
        "Frischkäse"
    ],
    appliances:[
        "Herd"
    ],
    tags: [
    ]
  },
  {
    name: "Kleinigkeiten",
    vegetarian: true,
    vegan: false,
    glutenfree: true,
    time: 60,
    difficulty: "leicht",
    ingredients: [
        "Avocados",
        "Limettensaft",
        "Tahin",
        "Paprika (Dipp und Rohkost)",
        "Knoblauch",
        "Tomatenmark",
        "Joghurt",
        "Petersilie",
        "2TL Zucker",
        "Tomaten",
        "Basilikum",
        "Balsamico-Essig",
        "Gurken",
        "Mehl"
    ],
    appliances:[
        "Mixer"
    ],
  },
  {
    name: "Kartoffel-Spinat-Auflauf",
    vegetarian: true,
    vegan: false,
    glutenfree: true,
    time: 30,
    difficulty: "leicht",
    ingredients: [
        "Kartoffeln",
        "Spinat",
        "Zwiebel",
        "Knoblauch",
        "Muskatnuss",
        "Mehl",
        "Milch",
        "Margarine",
        "Feta"
    ],
    appliances:[
        "Ofen"
    ],
    tags: [
    ]
  },
  {
    name: "Gemüselasagne",
    vegetarian: true,
    vegan: false,
    glutenfree: true,
    time: 60,
    difficulty: "leicht",
    ingredients: [
       "Möhre",
       "Zucchini",
       "Sellerie",
       "Nudeln",
       "Champignons",
       "Passierte Tomaten",
       "Knoblauch",
       "Zwiebeln",
       "Käse",
       "Tomatenmark"
    ],
    appliances:[
        "Ofen"
    ],
    tags: [
    ]
  },
  {
    name: "Lasagne",
    vegetarian: false,
    vegan: false,
    glutenfree: false,
    time: 60,
    difficulty: "leicht",
    ingredients: [
       "Möhre",
       "Passierte Tomaten",
       "Knoblauch",
       "Zwiebeln",
       "Sellerie",
       "Tomatenmark",
       "Weißwein",
       "Hackfleisch",
       "Olivenöl",
       "Nudelplatten",
       "Mehl",
       "Milch",
       "Parmesan",
       "Muskat",
       "Butter",
       "Käse",
    ],
    appliances:[
        "Ofen"
    ],
    tags: [
    ]
  },
  {
    name: "Paprika-Tofu-Pfanne",
    vegetarian: true,
    vegan: true,
    glutenfree: true,
    time: 30,
    difficulty: "leicht",
    ingredients: [
        "Möhre",
        "Paprika",
        "Zwiebeln",
        "Knoblauch",
        "Gyrosgewürz /(Kreuzkümmel, Koriander, Paprikapulver, Thymian, Orgeano, Salz, Pfeffer, Curry)",
        "Arschwasser",
        "Reis",
        "Tofu",
        "Tomaten",
        "Petersilie"
    ],
    appliances:[
        "Herd"
    ],
    tags: [
    ]
  },
  {
    name: "Feuerbohneneintopf mit Quarkfladen",
    vegetarian: true,
    vegan: false,
    glutenfree: true,
    time: 30,
    difficulty: "leicht",
    ingredients: [
        "Zwiebeln",
        "Knoblauch",
        "Paprika",
        "Passierte Tomaten",
        "Baked Beans",
        "Kidneybohnen",
        "Mais",
        "dicke weiße Bohnen",
        "Kichererbsen",
        "Brühe",
        "Mehl",
        "Quark"
    ],
    appliances:[
        "Herd"
    ],
    tags: [
    ]
  },
  {
    name: "Vegetarische Burgerpatties",
    vegetarian: true,
    vegan: false,
    glutenfree: true,
    time: 30,
    difficulty: "leicht",
    ingredients: [
        "Zwiebeln",
        "Kidneybohnen",
        "Kichererbsen",
        "Ei",
        "Mehl"
    ],
    appliances:[
        "Herd",
        "Mixer"
    ],
    tags: [
    ]
  },
  {
    name: "Currywurst mit Pommes",
    vegetarian: false,
    vegan: false,
    glutenfree: true,
    time: 30,
    difficulty: "leicht",
    ingredients: [
        "Cola",
        "Apfelmus",
        "Curryketchup",
        "Currypulver",
        "Bratwürste",
        "Pommes",
        "Dick Majo"
    ],
    appliances:[
        "Herd",
        "Ofen"
    ],
    tags: [
    ]
  },
  {
    name: "Nudeln in Thunfischsoße",
    vegetarian: false,
    vegan: false,
    glutenfree: false,
    time: 30,
    difficulty: "leicht",
    ingredients: [
        "500g Nudeln/Gnocchi",
        "1 Dose Thunfisch",
        "200g Doppelrahmfrischkäse",
        "2 EL Zitronensaft",
        "Pfeffer",
        "100ml Nudelwasser",
        "200g Kirschtomaten"
    ],
    appliances:[
        "Herd"
    ],
    tags: [
        "Fisch"
    ]
  },
  {
    name: "Seelachsfilet in Bierteig",
    vegetarian: false,
    vegan: false,
    glutenfree: false,
    time: 30,
    difficulty: "leicht",
    ingredients: [
        "Seelachsfilet",
        "150g Weizenmehl (Type 405)",
        "Salz",
        "2 Eier (M)",
        "120ml Helles Bier"
    ],
    appliances:[
        "Herd"
    ],
    tags: [
        "Fisch"
    ]
  },
  {
    name: "Harissa Lachs mit Tahini Soße und Couscous",
    vegetarian: false,
    vegan: false,
    glutenfree: false,
    time: 90,
    difficulty: "mittel",
    ingredients: [
        "2 rote Zwiebeln",
        "1 Limette",
        "2 Karotten",
        "2 Paprikas",
        "1 Knolle Fenchel",
        "2 EL Harissa-Paste",
        "1 EL Honig",
        "4 Knoblauchzehen",
        "2 TL Ras el Hanout",
        "120g Couscous",
        "1 großer Brokkoli",
        "400g Lachsfilet",
        "3 EL Tahini",
        "1 Zitrone"
    ],
    appliances:[
        "Ofen"
    ],
    tags: [
        "Fisch"
    ]
  },
  {
    name: "Falafel-Wraps",
    vegetarian: true,
    vegan: false,
    glutenfree: false,
    time: 15,
    difficulty: "leicht",
    ingredients: [
        "Wraps",
        "Tomaten",
        "Eisbergsalat",
        "Gurken",
        "Zwiebeln",
        "Mais",
        "Feta / Hirtenkäse",
        "Joghurt Soße / Tsatsiki",
        "Falafel"
    ],
    appliances:[
    ],
    tags: [
    ]
  },
  {
    name: "Chili con Carne",
    vegetarian: false,
    vegan: false,
    glutenfree: true,
    time: 40,
    difficulty: "leicht",
    ingredients: [
        "2 Zwiebeln",
        "1 Knoblauchzehe",
        "3 Schalotten",
        "500g gemischtes Hackfleisch",
        "2 Lorberrblätter",
        "Tomatenmark",
        "1 Tasse schwarzer Kaffee",
        "200ml Rotwein",
        "2 Dosen passierte Tomaten",
        "1 Chilischote",
        "1 Dose Mais",
        "1 Dose Kidneybohnen",
        "4 Tomaten",
        "1 Prise Zucker",
        "1 Zitrone (Abrieb)",
        "2 Stangen Lauchzwiebeln"
    ],
    appliances:[
        "Herd"
    ],
    tags: [
    ]
  },
  {
    name: "Pasta aglio e olio",
    vegetarian: true,
    vegan: true,
    glutenfree: false,
    time: 30,
    difficulty: "leicht",
    ingredients: [
        "Nudeln",
        "Getrocknete Tomaten",
        "Knoblauch",
        "Kirschtomaten",
        "Olivenöl",
        "Cayennepfeffer"
    ],
    appliances:[
        "Herd"
    ],
    tags: [
    ]
  },
  {
    name: "Ho Chi Minh",
    vegetarian: true,
    vegan: false,
    glutenfree: true,
    time: 30,
    difficulty: "leicht",
    ingredients: [
        "2 1/2 Packungen Räuchertofu",
        "2 Speisestärke",
        "2 Paprika",
        "150g Cashewkerne",
        "Zwiebel",
        "Knoblauch",
        "Sojasoße",
        "Hoisinsoße",
        "Honig",
        "Zitronensaft",
        "Reis",
        "Koriander (auf Wunsch eines geschmackvollen Menschens zu entfernen)"
    ],
    appliances:[
        "Herd"
    ],
    tags: [
    ]
  },
  {
    name: "Pak Choi Pfanne",
    vegetarian: true,
    vegan: true,
    glutenfree: true,
    time: 30,
    difficulty: "leicht",
    ingredients: [
        "900g Pak Choi",
        "400g Champignons",
        "zwei handvoll Tomaten",
        "1 Zwiebel",
        "Teriyaki-Soße",
        "Sojasoße",
        "Reis"
    ],
    appliances:[
        "Herd"
    ],
    tags: [
    ]
  },
];



/*
  {
    name: "",
    vegetarian: true,
    vegan: true,
    glutenfree: true,
    time: 30,
    difficulty: "leicht",
    ingredients: [
    ],
    appliances:[
    ],
    tags: [
    ]
  },
*/
