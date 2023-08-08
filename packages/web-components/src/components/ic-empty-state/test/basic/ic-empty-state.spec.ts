import { newSpecPage } from "@stencil/core/testing";
import { EmptyState } from "../../ic-empty-state";
import { Button } from "../../../ic-button/ic-button";

describe("ic-empty state", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [EmptyState],
      html: `<ic-empty-state heading="Empty state title"></ic-empty-state>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with subheading and body text", async () => {
    const page = await newSpecPage({
      components: [EmptyState],
      html: `<ic-empty-state heading="Empty state title" subheading="Empty state subtitle" body="Body text for empty state."></ic-empty-state>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with a slotted image", async () => {
    const page = await newSpecPage({
      components: [EmptyState],
      html: `<ic-empty-state heading="Empty state title">
                <svg slot="image" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    <title>close icon</title>
                </svg>
            </ic-empty-state>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with actions", async () => {
    const page = await newSpecPage({
      components: [EmptyState, Button],
      html: `<ic-empty-state heading="Empty state title">
            <ic-button slot="actions">Action</ic-button>
            </ic-empty-state>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render right aligned", async () => {
    const page = await newSpecPage({
      components: [EmptyState],
      html: `<ic-empty-state heading="Empty state title" subheading="Empty state subtitle" body="Body text for empty state." aligned="right"></ic-empty-state>`,
    });

    expect(page.rootInstance.aligned).toMatch("right");
    expect(page.root.classList.contains("right")).toBeTruthy();
  });

  it("should render centre aligned", async () => {
    const page = await newSpecPage({
      components: [EmptyState],
      html: `<ic-empty-state heading="Empty state title" subheading="Empty state subtitle" body="Body text for empty state." aligned="center"></ic-empty-state>`,
    });

    expect(page.rootInstance.aligned).toMatch("center");
    expect(page.root.classList.contains("center")).toBeTruthy();
  });

  it("should render with a small image size", async () => {
    const page = await newSpecPage({
      components: [EmptyState],
      html: `<ic-empty-state heading="Empty state title" subheading="Empty state subtitle" body="Body text for empty state." image-size="small">
                <svg slot="image" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    <title>close icon</title>
                </svg>
            </ic-empty-state>`,
    });

    expect(page.rootInstance.imageSize).toMatch("small");
    expect(page.root.classList.contains("image-small")).toBeTruthy();
  });

  it("should render with a large image size", async () => {
    const page = await newSpecPage({
      components: [EmptyState],
      html: `<ic-empty-state heading="Empty state title" subheading="Empty state subtitle" body="Body text for empty state." image-size="large">
                <svg slot="image" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    <title>close icon</title>
                </svg>
            </ic-empty-state>`,
    });

    expect(page.rootInstance.imageSize).toMatch("large");
    expect(page.root.classList.contains("image-large")).toBeTruthy();
  });
});
