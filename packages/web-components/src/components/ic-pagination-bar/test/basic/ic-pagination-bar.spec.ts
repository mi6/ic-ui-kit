import { PaginationBar } from "../../ic-pagination-bar";
import { Pagination } from "../../../ic-pagination/ic-pagination";
import { Button } from "../../../ic-button/ic-button";
import { Tooltip } from "../../../ic-tooltip/ic-tooltip";
import { TextField } from "../../../ic-text-field/ic-text-field";
import { DEVICE_SIZES } from "../../../../utils/helpers";
import { waitForTimeout } from "../../../../testspec.setup";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-pagination-bar", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [PaginationBar],
      html: `<ic-pagination-bar total-items="100"></ic-pagination-bar>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with items per page controls", async () => {
    const page = await newSpecPage({
      components: [PaginationBar],
      html: `<ic-pagination-bar total-items="100" show-items-per-page-control="true"></ic-pagination-bar>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with go to page controls", async () => {
    const page = await newSpecPage({
      components: [PaginationBar],
      html: `<ic-pagination-bar total-items="100" show-go-to-page-control="true"></ic-pagination-bar>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with data pagination type", async () => {
    const page = await newSpecPage({
      components: [PaginationBar],
      html: `<ic-pagination-bar total-items="100" pagination-type="data"></ic-pagination-bar>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with complex pagination controls", async () => {
    const page = await newSpecPage({
      components: [PaginationBar],
      html: `<ic-pagination-bar total-items="100" pagination-controls="complex"></ic-pagination-bar>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a custom page label", async () => {
    const page = await newSpecPage({
      components: [PaginationBar],
      html: `<ic-pagination-bar total-items="100" page-label="Sheets"></ic-pagination-bar>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a custom item label", async () => {
    const page = await newSpecPage({
      components: [PaginationBar],
      html: `<ic-pagination-bar total-items="100" pagination-type="data" item-label="Rows"></ic-pagination-bar>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with left alignment", async () => {
    const page = await newSpecPage({
      components: [PaginationBar],
      html: `<ic-pagination-bar total-items="100" alignment="left"></ic-pagination-bar>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with space between alignment", async () => {
    const page = await newSpecPage({
      components: [PaginationBar],
      html: `<ic-pagination-bar total-items="100" alignment="space-between"></ic-pagination-bar>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with light appearance", async () => {
    const page = await newSpecPage({
      components: [PaginationBar],
      html: `<ic-pagination-bar total-items="100" appearance="light"></ic-pagination-bar>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with dark appearance", async () => {
    const page = await newSpecPage({
      components: [PaginationBar],
      html: `<ic-pagination-bar total-items="100" apperance="dark"></ic-pagination-bar>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with custom items per page options", async () => {
    const page = await newSpecPage({
      components: [PaginationBar],
      html: `<ic-pagination-bar total-items="100" show-items-per-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    paginationBar.itemsPerPageOptions = [
      { label: "15", value: "15" },
      { label: "30", value: "30" },
      { label: "60", value: "60" },
      { label: "All", value: "100" },
    ];

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should only allow a maximum of 4 custom items per page options", async () => {
    const page = await newSpecPage({
      components: [PaginationBar],
      html: `<ic-pagination-bar total-items="150" show-items-per-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    paginationBar.itemsPerPageOptions = [
      { label: "25", value: "25" },
      { label: "50", value: "50" },
      { label: "75", value: "75" },
      { label: "100", value: "100" },
      { label: "All", value: "150" },
    ];

    page.rootInstance.trimItemsPerPageOptions();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should remove items per page options larger than the maximum number of items", async () => {
    const page = await newSpecPage({
      components: [PaginationBar],
      html: `<ic-pagination-bar total-items="100" show-items-per-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    paginationBar.itemsPerPageOptions = [
      { label: "25", value: "25" },
      { label: "50", value: "50" },
      { label: "150", value: "150" },
      { label: "All", value: "100" },
    ];

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it("should wrap pagination when the device size is small", async () => {
    const page = await newSpecPage({
      components: [PaginationBar, Pagination],
      html: `<ic-pagination-bar total-items="100" show-go-to-page-control="true"></ic-pagination-bar>`,
    });

    await page.rootInstance.runResizeObserver();

    await page.waitForChanges();

    await page.rootInstance.resizeObserverCallback(DEVICE_SIZES.S);

    await page.waitForChanges();

    await page.rootInstance.paginationShouldWrap();

    await page.waitForChanges();

    expect(page).toMatchSnapshot();

    await page.rootInstance.disconnectedCallback();
  });

  it("should adjust the total page count when items per page is changed", async () => {
    const page = await newSpecPage({
      components: [PaginationBar, Pagination],
      html: `<ic-pagination-bar total-items="100" show-items-per-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    const select = paginationBar.shadowRoot.querySelector("ic-select");

    const text = paginationBar.shadowRoot.querySelector(
      ".page-pagination-label"
    );

    expect(text.textContent).toEqual("Page 1 of 10");

    select.value = "25";

    page.rootInstance.changeItemsPerPage();

    page.rootInstance.setNumberPages();

    await page.waitForChanges();

    expect(select.value).toEqual("25");

    expect(text.textContent).toEqual("Page 1 of 4");
  });

  it("should change page when the pagination controls are clicked", async () => {
    const page = await newSpecPage({
      components: [PaginationBar, Pagination, Button],
      html: `<ic-pagination-bar total-items="100"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    const pagination = paginationBar.shadowRoot.querySelector("ic-pagination");

    const nextButton = pagination.shadowRoot.querySelector(
      "#next-page-button"
    ) as HTMLElement;

    const text = paginationBar.shadowRoot.querySelector(
      ".page-pagination-label"
    );

    expect(text.textContent).toEqual("Page 1 of 10");

    await nextButton.click();

    page.rootInstance.changePage(2);

    await page.waitForChanges();

    expect(text.textContent).toEqual("Page 2 of 10");
  });

  it("should change page when the go to page button is clicked", async () => {
    const page = await newSpecPage({
      components: [PaginationBar, Pagination, Tooltip],
      html: `<ic-pagination-bar total-items="100" show-go-to-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    const input = paginationBar.shadowRoot.querySelector("ic-text-field");

    const button = paginationBar.shadowRoot.querySelector("ic-button");

    const text = paginationBar.shadowRoot.querySelector(
      ".page-pagination-label"
    );

    const currentPage = page.rootInstance.currentPage;

    expect(text.textContent).toEqual("Page 1 of 10");

    expect(currentPage).toEqual(1);

    input.value = "3";

    button.click();

    await page.waitForChanges();

    expect(text.textContent).toEqual("Page 3 of 10");
  });

  it("should change page when enter is pressed on the go to page input", async () => {
    const page = await newSpecPage({
      components: [PaginationBar, Pagination, Tooltip],
      html: `<ic-pagination-bar total-items="100" show-go-to-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    const input = paginationBar.shadowRoot.querySelector("ic-text-field");

    const text = paginationBar.shadowRoot.querySelector(
      ".page-pagination-label"
    );

    const currentPage = page.rootInstance.currentPage;

    const event = new KeyboardEvent("keydown", { key: "Enter" });

    expect(text.textContent).toEqual("Page 1 of 10");

    expect(currentPage).toEqual(1);

    input.value = "3";

    input.focus();

    await page.rootInstance.handleKeydown(event);

    await waitForTimeout(100);

    await page.waitForChanges();

    expect(text.textContent).toEqual("Page 3 of 10");
  });

  it("should error immediately when an invalid page is entered before it is submitted", async () => {
    const page = await newSpecPage({
      components: [PaginationBar, Pagination, Tooltip],
      html: `<ic-pagination-bar total-items="100" show-go-to-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    const input = paginationBar.shadowRoot.querySelector("ic-text-field");

    expect(input.validationStatus).toBeUndefined();

    input.value = "15";

    input.focus();

    await page.rootInstance.handleInputChange();

    await page.waitForChanges();

    expect(input.validationStatus).toEqual("error");
  });

  it("should remain in error state if enter is pressed while in error state", async () => {
    const page = await newSpecPage({
      components: [PaginationBar, Pagination, Tooltip],
      html: `<ic-pagination-bar total-items="100" show-go-to-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    const input = paginationBar.shadowRoot.querySelector("ic-text-field");

    const event = new KeyboardEvent("keydown", { key: "Enter" });

    expect(input.validationStatus).toBeUndefined();

    input.value = "15";

    input.focus();

    await page.rootInstance.handleInputChange();

    await page.waitForChanges();

    expect(input.validationStatus).toEqual("error");

    page.rootInstance.handleKeydown(event);

    await waitForTimeout(100);

    await page.waitForChanges();

    expect(input.validationStatus).toEqual("error");
  });

  it("should not change page when the go to page button is clicked with an invalid page", async () => {
    const page = await newSpecPage({
      components: [PaginationBar, Pagination, TextField],
      html: `<ic-pagination-bar total-items="100" show-go-to-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    const input = paginationBar.shadowRoot.querySelector("ic-text-field");

    const button = paginationBar.shadowRoot.querySelector("ic-button");

    const text = paginationBar.shadowRoot.querySelector(
      ".page-pagination-label"
    );

    const currentPage = page.rootInstance.currentPage;

    expect(text.textContent).toEqual("Page 1 of 10");

    expect(currentPage).toEqual(1);

    input.value = "15";

    button.click();

    await page.waitForChanges();

    expect(text.textContent).toEqual("Page 1 of 10");
  });

  it("should not change page when enter is pressed on the go to page input with an invalid page", async () => {
    const page = await newSpecPage({
      components: [PaginationBar, Pagination, Tooltip, TextField],
      html: `<ic-pagination-bar total-items="100" show-go-to-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    const input = paginationBar.shadowRoot.querySelector("ic-text-field");

    const text = paginationBar.shadowRoot.querySelector(
      ".page-pagination-label"
    );

    const currentPage = page.rootInstance.currentPage;

    const event = new KeyboardEvent("keydown", { key: "Enter" });

    expect(text.textContent).toEqual("Page 1 of 10");

    expect(currentPage).toEqual(1);

    input.value = "15";

    input.focus();

    await page.rootInstance.handleKeydown(event);

    await waitForTimeout(100);

    await page.waitForChanges();

    expect(text.textContent).toEqual("Page 1 of 10");
  });

  it("should hide the tooltip when the input loses focus", async () => {
    const page = await newSpecPage({
      components: [PaginationBar, Pagination, Tooltip],
      html: `<ic-pagination-bar total-items="100" show-go-to-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    const input = paginationBar.shadowRoot.querySelector("ic-text-field");

    const tooltip = paginationBar.shadowRoot.querySelector("ic-tooltip");

    expect(tooltip.getAttribute("data-show")).toBeNull();

    input.focus();

    input.value = "15";

    tooltip.displayTooltip(true, false);

    await page.waitForChanges();

    input.blur();

    await page.waitForChanges();

    expect(tooltip.getAttribute("data-show")).toBeNull();
  });

  it("should remove the error status when the input loses focus if the value is not invalid", async () => {
    const page = await newSpecPage({
      components: [PaginationBar, Pagination, Tooltip],
      html: `<ic-pagination-bar total-items="100" show-go-to-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    const input = paginationBar.shadowRoot.querySelector("ic-text-field");

    input.focus();

    input.value = "";

    input.validationStatus = "error";

    await page.waitForChanges();

    input.blur();

    await page.waitForChanges();

    expect(input.validationStatus).toBe("");
  });

  it("should show the tooltip when the input is focussed if it is in an error state", async () => {
    const page = await newSpecPage({
      components: [PaginationBar, Pagination, Tooltip],
      html: `<ic-pagination-bar total-items="100" show-go-to-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    const input = paginationBar.shadowRoot.querySelector("ic-text-field");

    input.focus();

    input.value = "15";

    input.validationStatus = "error";

    await page.waitForChanges();

    input.blur();

    await page.waitForChanges();

    input.focus();

    await page.waitForChanges();

    expect(input.validationStatus).toBe("error");
  });

  it("should error when a non numeric value is entered", async () => {
    const page = await newSpecPage({
      components: [PaginationBar, Pagination, Tooltip],
      html: `<ic-pagination-bar total-items="100" show-go-to-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    const input = paginationBar.shadowRoot.querySelector("ic-text-field");

    const event = new KeyboardEvent("keydown", { key: "a" });

    expect(input.validationStatus).toBeUndefined();

    input.focus();

    await page.rootInstance.handleKeyUp(event);

    await page.waitForChanges();

    expect(input.validationStatus).toEqual("error");
  });

  it("should remove the non-numeric error when a number is entered", async () => {
    const page = await newSpecPage({
      components: [PaginationBar, Pagination, Tooltip],
      html: `<ic-pagination-bar total-items="100" show-go-to-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    const input = paginationBar.shadowRoot.querySelector("ic-text-field");

    const errorEvent = new KeyboardEvent("keydown", { key: "a" });

    const successEvent = new KeyboardEvent("keydown", { key: "5" });

    expect(input.validationStatus).toBeUndefined();

    input.focus();

    await page.rootInstance.handleKeyUp(errorEvent);

    await page.waitForChanges();

    expect(input.validationStatus).toEqual("error");

    await page.rootInstance.handleKeydown(successEvent);

    await waitForTimeout(100);

    await page.rootInstance.handleInputChange();

    await page.waitForChanges();

    expect(input.validationStatus).toEqual("");
  });

  it("should remove the error state when backspace is pressed", async () => {
    const page = await newSpecPage({
      components: [PaginationBar, Pagination, Tooltip],
      html: `<ic-pagination-bar total-items="100" show-go-to-page-control="true"></ic-pagination-bar>`,
    });

    const paginationBar = document.querySelector("ic-pagination-bar");

    const input = paginationBar.shadowRoot.querySelector("ic-text-field");

    const event = new KeyboardEvent("keydown", { key: "Backspace" });

    expect(input.validationStatus).toBeUndefined();

    input.focus();

    input.value = "15";

    input.validationStatus = "error";

    await page.waitForChanges();

    expect(input.validationStatus).toEqual("error");

    await page.rootInstance.handleKeydown(event);

    await waitForTimeout(100);

    await page.waitForChanges();

    expect(input.validationStatus).toEqual("");
  });
});
