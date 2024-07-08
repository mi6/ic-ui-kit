interface CoffeeForm {
  variety: string;
  grind: string;
  size: string;
}

interface DetailForm {
  name: string;
  email: string;
  phone: string;
  contact: string[];
}

interface CheckoutForm {
  dateToStart: string;
  terms: string;
}

export interface FormValues {
  coffeeForm: CoffeeForm;
  detailForm: DetailForm;
  checkoutForm: CheckoutForm;
}

interface chooseCoffee {
  active: boolean;
  completed: boolean;
  current: boolean;
  disabled: boolean;
}

interface enterDetails {
  active: boolean;
  completed: boolean;
  current: boolean;
  disabled: boolean;
}

interface checkout {
  active: boolean;
  completed: boolean;
  current: boolean;
  disabled: boolean;
}

export interface stepTypes {
  active: boolean;
  completed: boolean;
  current: boolean;
  disabled: boolean;
}

export interface FormSteps {
  chooseCoffee: chooseCoffee;
  enterDetails: enterDetails;
  checkout: checkout;
}
