import React from "react";
import {
  IcDataList,
  IcDataRow,
  IcTypography,
  IcStatusTag,
  IcLink,
  IcButton,
  IcTextField,
} from "../../components";
import { SlottedSVG } from "../../react-component-lib/slottedSVG";

const TEXT_FIELD_SELECTOR = "ic-text-field";
const LARGE_SPACING_CSS = "var(--ic-space-lg)";

export const Default = () => {
  return (
    <IcDataList heading="Personal Details">
      <IcDataRow label="Name" value="Michael Johnson" />
      <IcDataRow label="Date of birth" value="16 October 1995" />
      <IcDataRow label="Telephone" value="07449 7654873" />
      <IcDataRow label="Email" value="mjohnson@coffee.gov" />
    </IcDataList>
  );
};

export const SlottedHeadingLabel = () => {
  return (
    <IcDataList>
      <IcTypography variant="h3" slot="heading">
        Personal details
      </IcTypography>
      <IcDataRow value="Michael Johnson">
        <IcTypography variant="subtitle-large" slot="label">
          Name
        </IcTypography>
      </IcDataRow>
      <IcDataRow value="16 October 1995">
        <IcTypography variant="subtitle-large" slot="label">
          Date of birth
        </IcTypography>
      </IcDataRow>
    </IcDataList>
  );
};

export const WithLinks = () => {
  return (
    <IcDataList heading="Order details">
      <IcDataRow label="Order name" value="Michael">
        <IcLink href="#" slot="end-component">
          Edit
        </IcLink>
      </IcDataRow>
      <IcDataRow label="Drink" value="Americano">
        <IcLink href="#" slot="end-component">
          Edit
        </IcLink>
      </IcDataRow>
      <IcDataRow label="Milk option" value="Soya milk">
        <IcLink href="#" slot="end-component">
          Edit
        </IcLink>
      </IcDataRow>
      <IcDataRow label="Price" value="£3.25">
        <IcLink href="#" slot="end-component">
          Edit
        </IcLink>
      </IcDataRow>
      <IcDataRow label="Payment method">
        <IcTypography variant="body" slot="value">
          VISA ending 5896
        </IcTypography>
        <IcLink href="#" slot="end-component">
          Edit
        </IcLink>
      </IcDataRow>
    </IcDataList>
  );
};

export const OneDataRow = () => {
  return (
    <IcDataList heading="Order details">
      <IcDataRow label="Order name" value="Michael">
        <IcLink href="#" slot="end-component">
          Edit
        </IcLink>
      </IcDataRow>
    </IcDataList>
  );
};

export const WithButton = () => {
  return (
    <IcDataList heading="Order details">
      <IcDataRow label="Download receipt" value="CoffeeOrder_X46w32.pdf">
        <IcButton variant="icon" aria-label="Download" slot="end-component">
          <SlottedSVG viewBox="0 0 24 24" height="24px" width="24px">
            <path
              d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
              fill="currentColor"
            />
          </SlottedSVG>
        </IcButton>
      </IcDataRow>
    </IcDataList>
  );
};

export const WithStatusTags = () => {
  return (
    <IcDataList heading="Order details">
      <IcDataRow label="Order name" value="Michael"></IcDataRow>
      <IcDataRow label="Drink" value="Americano">
        <IcStatusTag
          status="warning"
          label="In Progress"
          variant="filled"
          slot="end-component"
        />
      </IcDataRow>
      <IcDataRow label="Milk option" value="Soya milk"></IcDataRow>
      <IcDataRow label="Price" value="£3.25"></IcDataRow>
      <IcDataRow label="Payment method">
        <IcTypography variant="body" slot="value">
          VISA ending 5896
        </IcTypography>
        <IcStatusTag
          label="Not Confirmed"
          variant="filled"
          slot="end-component"
        />
      </IcDataRow>
    </IcDataList>
  );
};

export const Small = () => {
  return (
    <IcDataList heading="Personal details" size="small">
      <IcDataRow label="Name" value="Michael Johnson"></IcDataRow>
      <IcDataRow label="Date of birth" value="16 October 1995"></IcDataRow>
      <IcDataRow label="Telephone" value="07449 7654873"></IcDataRow>
      <IcDataRow label="Email" value="mjohnson@coffee.gov"></IcDataRow>
      <IcDataRow label="Address">
        <IcTypography variant="body" slot="value">
          383 Coffee Drive
          <br />
          London
          <br />
          SW7 988
          <br />
          United Kingdom
        </IcTypography>
      </IcDataRow>
    </IcDataList>
  );
};

export const Editable = () => {
  return (
    <>
      <IcDataList heading="Order details">
        <IcDataRow label="Order name">
          <IcTextField
            slot="value"
            label="Order name"
            value="Michael"
            hide-label
            full-width
          />
        </IcDataRow>
        <IcDataRow label="Drink" value="Americano">
          <IcTextField
            slot="value"
            label="Drink"
            value="Americano"
            hide-label
            full-width
          />
        </IcDataRow>
        <IcDataRow label="Milk option" value="Soya milk">
          <IcTextField
            slot="value"
            label="Milk option"
            value="Soya milk"
            hide-label
            full-width
          />
        </IcDataRow>
        <IcDataRow label="Price" value="£3.25">
          <IcTextField
            slot="value"
            label="Price"
            value="£3.25"
            hide-label
            full-width
          />
        </IcDataRow>
        <IcDataRow label="Payment method">
          <IcTextField
            slot="value"
            label="Payment method"
            value="VISA ending 5896"
            hide-label
            full-width
          />
        </IcDataRow>
      </IcDataList>
      <IcButton
        onClick={() => {
          const textFields = document.querySelectorAll(TEXT_FIELD_SELECTOR);
          textFields.forEach((textField) => {
            textField.setAttribute("readonly", "");
          });
        }}
        style={{
          marginRight: "var(--ic-space-md)",
          marginTop: LARGE_SPACING_CSS,
        }}
      >
        Confirm
      </IcButton>
      <IcButton
        onClick={() => {
          const textFields = document.querySelectorAll(TEXT_FIELD_SELECTOR);
          textFields.forEach((textField) => {
            textField.removeAttribute("readonly");
          });
        }}
        variant="secondary"
        style={{ marginTop: LARGE_SPACING_CSS }}
      >
        Edit
      </IcButton>
    </>
  );
};

export const EditableRow = () => {
  return (
    <>
      <IcDataList heading="Order details">
        <IcDataRow label="Order name">
          <IcTextField
            slot="value"
            label="Order name"
            value="Michael"
            hide-label
            full-width
          />
        </IcDataRow>
      </IcDataList>
      <IcButton
        onClick={() => {
          const textFields = document.querySelectorAll(TEXT_FIELD_SELECTOR);
          textFields.forEach((textField) => {
            textField.setAttribute("readonly", "");
          });
        }}
        style={{
          marginRight: "var(--ic-space-md)",
          marginTop: LARGE_SPACING_CSS,
        }}
      >
        Confirm
      </IcButton>
      <IcButton
        onClick={() => {
          const textFields = document.querySelectorAll(TEXT_FIELD_SELECTOR);
          textFields.forEach((textField) => {
            textField.removeAttribute("readonly");
          });
        }}
        variant="secondary"
        style={{ marginTop: LARGE_SPACING_CSS }}
      >
        Edit
      </IcButton>
    </>
  );
};
