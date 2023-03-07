import { newSpecPage } from "@stencil/core/testing";
import { MenuGroup } from "./ic-menu-group";
import { MenuItem } from "../ic-menu-item/ic-menu-item";

describe("menu group", () => {
  it("should render a menu group with a label", async () => {
    const page = await newSpecPage({
      components: [MenuGroup, MenuItem],
      html: `<ic-menu-group label="Menu item label">
            <ic-menu-item label="Button">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item label="Button">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Button"
              href="#"
              description="This button has a href and so it behaves like a link"
            >
            </ic-menu-item>
          </ic-menu-group>`,
    });

    expect(page.root).toMatchSnapshot();

    const ariaLabel = page.root.getAttribute("aria-label");
    expect(ariaLabel).toMatch(page.rootInstance.label);
  });

  it("should render a menu group without a label", async () => {
    const page = await newSpecPage({
      components: [MenuGroup, MenuItem],
      html: `<ic-menu-group>
            <ic-menu-item label="Button">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item label="Button">
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
            </ic-menu-item>
            <ic-menu-item
              label="Button"
              href="#"
              description="This button has a href and so it behaves like a link"
            >
            </ic-menu-item>
          </ic-menu-group>`,
    });

    expect(page.root).toMatchSnapshot();

    const ariaLabel = page.root.getAttribute("aria-label");
    expect(ariaLabel).toBeNull();
  });
});
