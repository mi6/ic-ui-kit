import { InputLabel } from "../../ic-input-label";
import { newSpecPage } from "@stencil/core/testing";

describe("ic-input-label", () => {
  it("should render", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label"></ic-input-label>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render required variant", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" required=true></ic-input-label>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render disabled variant", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" required=true disabled=true></ic-input-label>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render readonly variant", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" required=true readonly=true></ic-input-label>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render error variant", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" status="error"></ic-input-label>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with helpertext", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label for="test-input-id" label="Test label" required=true helper-text="Some helper text"></ic-input-label>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it("should render with label text not wrapped in label tag", async () => {
    const page = await newSpecPage({
      components: [InputLabel],
      html: `<ic-input-label label="Test label" required=true helper-text="Some helper text" use-label-tag=false></ic-input-label>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
