import { FormValues, FormSteps } from "./types";

export const grindOptions = [
  { value: "whole", label: "Whole Bean (default)" },
  {
    value: "filter",
    label: "Filter",
    description: "A medium grind ideal for drip and pour-over methods",
  },
  {
    value: "espresso",
    label: "Espresso",
    description: "The fine grind size ensures a slow, even extraction",
  },
  { value: "aeropress", label: "Aeropress" },
  {
    value: "cafetiere",
    label: "Cafetiere",
    description:
      "Coarse grinds work best for brewing methods like the French press and cold brew",
  },
];

export const sizeOptions = [
  { value: "250", label: "250g" },
  { value: "500", label: "500g" },
  { value: "1000", label: "1000g" },
];

export const next = "next";
export const back = "back";

export const initialFormValues: FormValues = {
  coffeeForm: {
    variety: "",
    grind: "whole",
    size: "",
  },
  detailForm: {
    name: "",
    email: "",
    phone: "",
    contact: ["", ""],
  },
  checkoutForm: {
    dateToStart: "",
    terms: "",
  },
};

export const initialFormSteps: FormSteps = {
  chooseCoffee: {
    active: true,
    completed: false,
    current: true,
    disabled: false,
  },
  enterDetails: {
    active: true,
    completed: false,
    current: false,
    disabled: false,
  },
  checkout: {
    active: true,
    completed: false,
    current: false,
    disabled: false,
  },
};
