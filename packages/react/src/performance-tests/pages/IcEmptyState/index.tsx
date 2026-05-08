// IcEmptyStatePage displays an example of an empty state for the purpose of performance testing of the IcEmptyState component.
import React from "react";
import {
  IcEmptyState,
  IcButton,
  IcLink,
  IcTypography,
  IcTheme,
} from "../../../components";
import { SlottedSVG } from "../../../react-component-lib/slottedSVG";

type PageProps = {
  theme: "light" | "dark";
};

const IcEmptyStatePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        <IcTypography variant="subtitle-small">
          <h1>Empty State Page</h1>
        </IcTypography>
        <div
          style={{
            width: "357px",
            border: "1px solid black",
          }}
        >
          <IcEmptyState
            heading="Empty state title"
            subheading="Empty state subtitle"
            body="Body of text that is truncated to two lines. Click the 'See more' link to expand the text, then click 'See less' to truncate the text once more!\nDripper caramelization java saucer grounds galão, mocha, and robusta kopi-luwak, percolator, instant, qui saucer latte in brewed café au lait. Con panna, cup, cream, body americano affogato cup espresso, rich milk seasonal saucer grinder spoon that cultivar strong redeye frappuccino barista extraction redeye mazagran. Grounds, french press dripper organic and foam id saucer, crema, black rich dark, grounds breve coffee steamed caramelization percolator."
            maxLines={2}
          >
            <SlottedSVG
              slot="image"
              style={{
                height: "326px",
                width: "326px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1600 900"
            >
              <rect fill="#ff7700" width="1600" height="1600" y="-350" />
              <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
              <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
              <polygon fill="#c50022" points="-60 900 398 662 816 900" />
              <polygon fill="#a3001b" points="337 900 398 662 816 900" />
              <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
              <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
              <polygon fill="#b80066" points="641 695 886 900 367 900" />
              <polygon fill="#960052" points="587 900 641 695 886 900" />
              <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
              <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
              <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
              <polygon fill="#880088" points="943 900 1210 900 971 687" />
            </SlottedSVG>
            <IcButton slot="actions">Action</IcButton>
            <IcLink href="/" slot="actions">
              Standalone link
            </IcLink>
          </IcEmptyState>
        </div>
      </div>
    </IcTheme>
  );
};

export default IcEmptyStatePage;
