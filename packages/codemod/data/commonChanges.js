const appearanceLight = {
  v2: `appearance=[{]?["']light['"][}]?`,
  v3: `theme="dark" monochrome`,
  type: "absolute",
};

const appearanceDark = {
  v2: `appearance=[{]?["']dark['"][}]?`,
  v3: `monochrome`,
  type: "absolute",
};

const appearanceDarkNoMonochrome = {
  v2: `appearance=[{]?["']dark['"][}]?`,
  v3: `theme="light"`,
  type: "absolute",
};
const appearanceLightNoMonochrome = {
  v2: `appearance=[{]?["']light['"][}]?`,
  v3: `theme="dark"`,
  type: "absolute",
};

const appearanceLightDeprecated = {
  v2: `light\\b(?!'|")`,
  v3: `theme="dark"`,
  type: "absolute",
};

const appearanceDarkIncludesMonochrome = {
  v2: `appearance=[{]?["']dark['"][}]?`,
  v3: `theme="light" monochrome`,
  type: "absolute",
};
const appearanceOutlined = {
  v2: `appearance=[{]?["']outlined['"][}]?`,
  v3: `variant="outlined"`,
  type: "absolute",
};

const appearanceOutline = {
  v2: `appearance=[{]?["']outline['"][}]?`,
  v3: `variant="outlined"`,
  type: "absolute",
};

const appearanceFilled = {
  v2: `appearance=[{]?["']filled['"][}]?`,
  v3: `variant="filled"`,
  type: "absolute",
};

const appearanceDefault = {
  v2: `appearance=[{]?["']default['"][}]?`,
  v3: `theme="light"`,
  type: "absolute",
};

const sizeDefault = {
  v2: `size=[{]?["']default['"][}]?`,
  v3: 'size="medium"',
  type: "absolute",
};

const sizeSmall = {
  v2: "small={true}",
  v3: `size="small"`,
  type: "prop",
};
const sizeSmallAbsolute = {
  v2: `small\\b(?!'|"|=)`,
  v3: `size="small"`,
  type: "absolute",
};

export {
  appearanceDark,
  appearanceLight,
  appearanceLightNoMonochrome,
  appearanceDarkIncludesMonochrome,
  appearanceDarkNoMonochrome,
  appearanceLightDeprecated,
  appearanceDefault,
  appearanceOutlined,
  appearanceOutline,
  appearanceFilled,
  sizeDefault,
  sizeSmall,
  sizeSmallAbsolute,
};
