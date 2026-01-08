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
    tags: [
        "Ohne Ofen"
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
    tags: [
        "Ohne Ofen"
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
    tags: [
        "Ohne Ofen"
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
    tags: [
    ]
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
        "Gyrogewürz /(Kreuzkümmel, Koriander, Paprikapulver, Thymian, Orgeano, Salz, Pfeffer, Curry)",
        "Arschwasser",
        "Reis",
        "Tofu",
        "Tomaten",
        "Petersilie"
    ],
    tags: [
        "Ohne Ofen"
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
        "Ei",
        "Quark"
    ],
    tags: [
        "Ohne Ofen"
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
    tags: [
        "Ohne Ofen"
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
    tags: [
        "Ohne Ofen"
    ]
  },
  {
    name: "Nudeln in Thunfischsauße",
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
    tags: [
        "Fisch", "Ohne Ofen"
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
    tags: [
        "Fisch"
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
    tags: [
    ]
  },
*/
