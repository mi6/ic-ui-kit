/* eslint-disable sonarjs/no-duplicate-string */

export const coffeeOptions = [
  { label: "Espresso", value: "espresso" },
  { label: "Double Espresso", value: "doubleespresso" },
  { label: "Flat White", value: "flatwhite" },
  { label: "Cappuccino", value: "cappuccino" },
  { label: "Americano", value: "americano" },
  { label: "Mocha", value: "mocha" },
];

export const coffeeOptionsDescriptions = [
  {
    label: "Cappuccino",
    value: "cappuccino",
    description: "Coffee frothed up with pressurised steam",
  },
  {
    label: "Americano",
    value: "americano",
    description: "Espresso coffee diluted with hot water",
  },
  { label: "Mocha", value: "mocha", description: "Coffee with chocolate" },
];

export const coffeeDisabledOption = [
  { label: "Americano", value: "americano", disabled: true },
  { label: "Cappuccino", value: "cappuccino" },
  { label: "Latte", value: "latte", disabled: true },
  { label: "Mocha", value: "mocha" },
];

export const coffeeCustomElements = [
  {
    label: "Cappuccino",
    value: "Cap",
  },
  {
    label: "Latte",
    value: "Lat",
    element: {
      component: `<ic-status-tag label="Neutral status"></ic-status-tag>`,
      ariaLabel: "Neutral status tag",
    },
  },
  {
    label: "Americano",
    value: "Ame",
    icon: `<svg aria-labelledby="warning-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><g id="warning"><path id="Vector" d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" /></g></svg>`,
  },
];

export const groupCoffeeOption = [
  {
    label: "Fancy",
    children: [
      { label: "Cappuccino", value: "Cap" },
      { label: "Flat white", value: "Flat" },
    ],
  },
  {
    label: "Boring",
    children: [
      { label: "Filter", value: "Fil" },
      { label: "Latte", value: "Lat" },
    ],
  },
];

export const groupAndDescriptionCoffeeOption = [
  {
    label: "Fancy",
    children: [
      {
        label: "Cappuccino",
        description: "Coffee frothed up with pressurised steam",
        value: "Cap",
      },
      { label: "Flat white", value: "Flat" },
    ],
  },
  {
    label: "Boring",
    children: [
      { label: "Filter", value: "Fil" },
      { label: "Latte", value: "Lat" },
    ],
  },
];

export const recommendedCoffeeOption = [
  { label: "Espresso", value: "espresso" },
  { label: "Double Espresso", value: "doubleespresso", recommended: true },
  { label: "Flat White", value: "flatwhite" },
  { label: "Cappuccino", value: "cappuccino" },
  { label: "Americano", value: "americano", recommended: true },
  { label: "Mocha", value: "mocha" },
];

export const validationCoffeeOption = [
  { label: "Espresso", value: "espresso" },
  { label: "Double Espresso", value: "doubleespresso" },
  { label: "Flat White", value: "flatwhite" },
  { label: "Cappuccino", value: "cappuccino" },
  { label: "Americano", value: "americano" },
  { label: "Mocha", value: "mocha" },
];

export const searchableCoffeeOption = [
  { label: "Cappuccino", value: "Cap" },
  { label: "Latte", value: "Lat" },
  { label: "Americano", value: "Ame" },
  { label: "Flat white", value: "Fla" },
  { label: "Mocha", value: "Moc" },
  { label: "Macchiato", value: "Mac" },
  { label: "Café au lait", value: "Caf" },
  { label: "Espresso", value: "Esp" },
  { label: "Cortado", value: "Cor" },
  { label: "Latte macchiato", value: "Lam" },
];

export const searchableDescriptionsCoffeeOption = [
  {
    label: "Cappuccino",
    value: "Cap",
    description: "Coffee frothed up with pressurised steam",
  },
  {
    label: "Americano",
    value: "Ame",
    description: "Espresso coffee diluted with hot water",
  },
  { label: "Mocha", value: "Moc", description: "Coffee with chocolate" },
  {
    label: "Latte",
    value: "Lat",
    description: "Milky coffee with one or two shots of espresso",
  },
  {
    label: "Flat white",
    value: "Fla",
    description: "Coffee with frothed milk poured over espresso",
  },
  {
    label: "Macchiato",
    value: "Mac",
    description: "Espresso coffee topped with steamed milk",
  },
  {
    label: "Café au lait",
    value: "Caf",
    description: "Brewed coffee with steamed milk",
  },
  {
    label: "Espresso",
    value: "Esp",
    description: "Concentrated form of coffee",
  },
  { label: "Cortado", value: "Cor", description: "Coffee cut with milk" },
  {
    label: "Latte macchiato",
    value: "Lam",
    description: "Espresso coffee with milk and a spoonful of foamed milk",
  },
];

export const searchableGroupCoffeeOption = [
  {
    label: "Fancy",
    children: [
      { label: "Cappuccino", value: "Cap" },
      { label: "Flat white", value: "Flat" },
      { label: "Mocha", value: "Moc" },
      { label: "Macchiato", value: "Mac" },
      { label: "Cortado", value: "Cor" },
      { label: "Latte macchiato", value: "Lam" },
    ],
  },
  {
    label: "Boring",
    children: [
      { label: "Filter", value: "Fil" },
      { label: "Latte", value: "Lat" },
      { label: "Americano", value: "Ame" },
      { label: "Espresso", value: "Esp" },
    ],
  },
];

export const coffeeOptionsReadonly = [
  { label: "Espresso", value: "espresso", readonly: true },
  { label: "Double Espresso", value: "doubleespresso", readonly: true },
  { label: "Flat White", value: "flatwhite", readonly: true },
  { label: "Cappuccino", value: "cappuccino", readonly: true },
  { label: "Americano", value: "americano", readonly: true },
  { label: "Mocha", value: "mocha", readonly: true },
];
