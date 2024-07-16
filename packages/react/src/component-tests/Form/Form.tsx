import React, { useState, useRef, useCallback } from "react";
import { defineCustomElements } from "@ukic/web-components/loader";
import "./Form.css";
import {
  IcCheckbox,
  IcCheckboxGroup,
  IcRadioGroup,
  IcRadioOption,
  IcSelect,
  IcTextField,
  IcButton,
  IcSectionContainer,
  IcPageHeader,
  IcChip,
  IcStepper,
  IcStep,
  IcTypography,
  IcBackToTop,
  IcToastRegion,
  IcToast,
  IcAlert,
} from "../../components";
import { IcDatePicker } from "../../../../canary-react/src/components";
import {
  grindOptions,
  sizeOptions,
  next,
  back,
  initialFormValues,
  initialFormSteps,
} from "./constants";
import { handleSteps } from "./methods";

defineCustomElements();

const Form: React.FC = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formSteps, setFormSteps] = useState(initialFormSteps);
  const [formValidation, setFormValidation] = useState(false);

  const handleNextStep = () => {
    let updatedFormSteps = { ...formSteps };

    if (formSteps.chooseCoffee.current) {
      const { variety, grind, size } = formValues.coffeeForm;
      if ([variety, grind, size].some((value) => value === "")) {
        setFormValidation(true);
        return;
      }
      setFormValidation(false);
      updatedFormSteps.chooseCoffee = {
        ...formSteps.chooseCoffee,
        active: true,
        completed: true,
        current: false,
      };
      updatedFormSteps.enterDetails = {
        ...formSteps.enterDetails,
        active: true,
        completed: false,
        current: true,
      };
    } else if (formSteps.enterDetails.current) {
      const { name, email, phone } = formValues.detailForm;
      if (
        [name, email, phone].some((value) => value === "") ||
        !email.includes("@")
      ) {
        setFormValidation(true);
        return;
      }
      setFormValidation(false);
      updatedFormSteps.chooseCoffee = {
        ...formSteps.chooseCoffee,
        active: true,
        completed: true,
        current: false,
      };
      updatedFormSteps.enterDetails = {
        ...formSteps.enterDetails,
        active: true,
        completed: true,
        current: false,
      };
      updatedFormSteps.checkout = {
        ...formSteps.checkout,
        active: true,
        completed: false,
        current: true,
      };
    } else {
      throw new Error("Invalid action");
    }
    setFormSteps(updatedFormSteps);
  };

  const handleBackStep = () => {
    let updatedFormSteps = { ...formSteps };

    if (formSteps.enterDetails.current) {
      updatedFormSteps.chooseCoffee = {
        ...formSteps.chooseCoffee,
        active: true,
        completed: false,
        current: true,
      };
      updatedFormSteps.enterDetails = {
        ...formSteps.enterDetails,
        active: true,
        completed: false,
        current: false,
      };
    } else if (formSteps.checkout.current) {
      updatedFormSteps.chooseCoffee = {
        ...formSteps.chooseCoffee,
        active: true,
        completed: true,
        current: false,
      };
      updatedFormSteps.enterDetails = {
        ...formSteps.enterDetails,
        active: true,
        completed: false,
        current: true,
      };
      updatedFormSteps.checkout = {
        ...formSteps.checkout,
        active: true,
        completed: false,
        current: false,
      };
    } else {
      throw new Error("Invalid action");
    }
    setFormSteps(updatedFormSteps);
  };

  const handleClick = useCallback(
    (ev: React.MouseEvent, action: string) => {
      ev.preventDefault();
      console.log(formValues);

      if (action === "next") {
        handleNextStep();
      } else if (action === "back") {
        handleBackStep();
      } else {
        throw new Error("Invalid action");
      }
    },
    [formSteps, formValues]
  );

  const handleChange = (
    formSection: string,
    formValue: string,
    eventDetail: string | string[] | Date
  ) => {
    setFormValues({
      ...formValues,
      [formSection]: {
        ...formValues[formSection],
        [formValue]: eventDetail,
      },
    });
  };

  const toastRegionEl = useRef<HTMLIcToastRegionElement | null>(null);
  const toastEl = useRef<HTMLIcToastElement | null>(null);

  const resetForm = () => {
    setFormValues(initialFormValues);
    setFormSteps(initialFormSteps);
  };

  const handleSubmit = () => {
    console.log(formValues);
    const { dateToStart, terms } = formValues.checkoutForm;
    if (
      [dateToStart, terms].some((value) => value === "" || value === "decline")
    ) {
      setFormValidation(true);
      return;
    }
    setFormValidation(false);
    if (toastRegionEl.current && toastEl.current) {
      toastRegionEl.current.openToast = toastEl.current;
    }
  };

  //* This app was originally intended to be used in testing guidance, hence no atomisation of components, keeping the app to a single file

  return (
    <>
      <IcPageHeader
        heading="Customise your coffee subscription"
        subheading="Choose your coffee, enter your details and checkout, easy as 1... 2... 3!"
        size="small"
        id="top"
        sticky
      >
        <IcChip slot="heading-adornment" label="V0.0.01" size="large" />
        <IcStepper slot="stepper">
          <IcStep
            stepTitle="Choose coffee"
            stepType={handleSteps(formSteps.chooseCoffee)}
          />
          <IcStep
            stepTitle="Enter Details"
            stepType={handleSteps(formSteps.enterDetails)}
          />
          <IcStep
            stepTitle="Checkout"
            stepType={handleSteps(formSteps.checkout)}
          />
        </IcStepper>
      </IcPageHeader>
      <IcBackToTop target="top" />
      <form onSubmit={handleSubmit}>
        {formSteps.chooseCoffee.current && (
          <IcSectionContainer>
            {formValidation && (
              <IcAlert
                variant="error"
                heading="Error"
                message="Please fill in all required fields"
                announced
              />
            )}
            <IcTypography variant="subtitle-large">
              Please choose your coffee
            </IcTypography>
            <IcTypography variant="body" maxLines={2}>
              Sip back and relax as we embark on a journey through the aromatic
              fields of coffee-inspired lorem ipsum. In the heart of a lush,
              verdant valley kissed by the golden hues of dawn, there lies a
              quaint little plantation where the beans of legend are nurtured.
              Each bean, a tiny vessel of dreams and whispers of faraway lands,
              cradled in the earth's embrace until it bursts forth with a
              promise of warmth and vigor.
            </IcTypography>
            <div className="input-container">
              <IcRadioGroup
                name="radio-group-1"
                label="What variety of coffee would you like?"
                helperText="House blend is the default option"
                size="small"
                required
                onIcChange={(ev) =>
                  handleChange("coffeeForm", "variety", ev.detail.value)
                }
                {...(formValidation &&
                  formValues.coffeeForm.variety === "" && {
                    validationText: "Please choose an option",
                    validationStatus: "error",
                  })}
              >
                <IcRadioOption
                  value="house"
                  label="House Blend"
                  selected={formValues.coffeeForm.variety === "house"}
                />
                <IcRadioOption
                  value="liberica"
                  label="Liberica"
                  selected={formValues.coffeeForm.variety === "liberica"}
                />
                <IcRadioOption
                  value="arabica"
                  label="Arabica"
                  selected={formValues.coffeeForm.variety === "arabica"}
                />
                <IcRadioOption
                  value="mundo"
                  label="Mundo Nova"
                  selected={formValues.coffeeForm.variety === "mundo"}
                />
              </IcRadioGroup>
            </div>
            <div className="input-container">
              <IcSelect
                label="Grind"
                helperText="Please select a grind type"
                name="grind-select"
                options={grindOptions}
                size="small"
                className="input"
                value={formValues.coffeeForm.grind}
                onIcChange={(ev) =>
                  handleChange("coffeeForm", "grind", ev.detail.value)
                }
                {...(formValidation &&
                  formValues.coffeeForm.grind === "" && {
                    validationText: "Please choose a grind size",
                    validationStatus: "error",
                  })}
              />
              <IcSelect
                label="Size"
                helperText="Please select a bag size"
                name="size-select"
                required
                options={sizeOptions}
                size="small"
                className="input"
                value={formValues.coffeeForm.size}
                onIcChange={(ev) =>
                  handleChange("coffeeForm", "size", ev.detail.value)
                }
                {...(formValidation &&
                  formValues.coffeeForm.size === "" && {
                    validationText: "Please choose a size",
                    validationStatus: "error",
                  })}
              />
            </div>
            <div className="input-container">
              <IcButton
                variant="primary"
                className="button"
                onClick={(ev) => handleClick(ev, next)}
              >
                Add to order
              </IcButton>
            </div>
          </IcSectionContainer>
        )}
        {formSteps.enterDetails.current && (
          <IcSectionContainer>
            {formValidation && (
              <IcAlert
                variant="error"
                heading="Error"
                message="Please fill in all required fields"
                announced
              />
            )}
            <IcTypography variant="subtitle-large">
              Please enter your details
            </IcTypography>
            <IcTypography variant="body">
              Nearly there, we just need a few more details. Purchases must be
              made by an adult over the age of 18. We will never share your
              details with fourth parties.
            </IcTypography>
            <div className="input-container">
              <IcTextField
                label="Name"
                name="name"
                required
                className="input"
                size="small"
                value={formValues.detailForm.name}
                onIcChange={(ev) =>
                  handleChange("detailForm", "name", ev.detail.value)
                }
                {...(formValidation &&
                  formValues.detailForm.name === "" && {
                    validationText: "Please enter your name",
                    validationStatus: "error",
                  })}
              />
              <IcTextField
                label="Email"
                name="email"
                type="email"
                required
                size="small"
                className="input"
                value={formValues.detailForm.email}
                onIcInput={(ev) =>
                  handleChange("detailForm", "email", ev.detail.value)
                }
                {...(formValidation &&
                  (formValues.detailForm.email === "" ||
                    !formValues.detailForm.email.includes("@")) && {
                    validationText: "Please enter an email",
                    validationStatus: "error",
                  })}
              />
              <IcTextField
                label="Phone"
                name="phone"
                type="number"
                required
                size="small"
                className="input"
                value={formValues.detailForm.phone}
                onIcInput={(ev) =>
                  handleChange("detailForm", "phone", ev.detail.value)
                }
                {...(formValidation &&
                  formValues.detailForm.phone === "" && {
                    validationText:
                      "Please enter a number on which we can contact you",
                    validationStatus: "error",
                  })}
              />
            </div>
            <div className="input-container">
              <IcCheckboxGroup
                name="signup"
                onIcChange={(ev) =>
                  handleChange("detailForm", "contact", ev.detail.value)
                }
                label="Sign up for notifications about future products?"
                className="input"
              >
                <IcCheckbox
                  label="SMS"
                  name="sms"
                  value="sms"
                  checked={formValues.detailForm.contact.includes("sms")}
                />
                <IcCheckbox
                  label="Email"
                  name="email"
                  value="email"
                  checked={formValues.detailForm.contact.includes("email")}
                />
              </IcCheckboxGroup>
            </div>
            <div className="input-container"></div>
            <div className="input-container">
              <IcButton
                variant="secondary"
                onClick={(ev) => handleClick(ev, back)}
                className="button"
              >
                Go Back
              </IcButton>
              <IcButton
                variant="primary"
                onClick={(ev) => handleClick(ev, next)}
                className="button"
              >
                Add to order
              </IcButton>
            </div>
          </IcSectionContainer>
        )}
        {formSteps.checkout.current && (
          <IcSectionContainer>
            {formValidation && (
              <IcAlert
                variant="error"
                heading="Error"
                message="Please fill in all required fields"
                announced
              />
            )}
            <IcTypography variant="subtitle-large">Last step!</IcTypography>
            <IcTypography variant="body">
              Please choose a start date for your subscription and agree to the
              terms and conditions.
            </IcTypography>
            <div className="input-container">
              <IcDatePicker
                label="When would you like your subscription to start?"
                className="input"
                disablePast
                required
                size="small"
                value={formValues.checkoutForm.dateToStart}
                onIcChange={(ev) =>
                  handleChange("checkoutForm", "dateToStart", ev.detail.value)
                }
                {...(formValidation &&
                  formValues.checkoutForm.dateToStart === "" && {
                    validationText: "Please choose a date",
                    validationStatus: "error",
                  })}
              />
              <IcRadioGroup
                label="Please agree to the terms and conditions"
                name="terms"
                required
                className="input"
                size="small"
                onIcChange={(ev) =>
                  handleChange("checkoutForm", "terms", ev.detail.value)
                }
                {...(((formValidation &&
                  formValues.checkoutForm.terms === "") ||
                  (formValidation &&
                    formValues.checkoutForm.terms === "decline")) && {
                  validationText: "Please agree to the terms and conditions",
                  validationStatus: "error",
                })}
              >
                <IcRadioOption
                  label="Agree"
                  name="agree"
                  value="agree"
                  selected={formValues.checkoutForm.terms === "agree"}
                />
                <IcRadioOption
                  label="Decline"
                  name="decline"
                  value="decline"
                  selected={formValues.checkoutForm.terms === "decline"}
                />
              </IcRadioGroup>
            </div>
            <div className="input-container">
              <IcButton
                variant="secondary"
                onClick={(ev) => handleClick(ev, back)}
                className="button"
              >
                Go Back
              </IcButton>
              <IcButton
                variant="primary"
                onClick={handleSubmit}
                className="button"
              >
                Submit order
              </IcButton>
              <IcToastRegion ref={toastRegionEl}>
                <IcToast
                  heading="Thanks for your order!"
                  ref={toastEl}
                  dismissMode="automatic"
                  autoDismissTimeout={3000}
                  variant="success"
                  onIcDismiss={() => resetForm()}
                />
              </IcToastRegion>
            </div>
          </IcSectionContainer>
        )}
      </form>
    </>
  );
};

export default Form;
