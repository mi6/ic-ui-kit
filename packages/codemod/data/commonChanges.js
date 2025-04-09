const appearanceLight = {
  v2Name: `appearance=[{]?["']light['"][}]?`,
  v3Name: "monochrome",
  type: "absolute",
};

const appearanceDark = {
  v2Name: `appearance=[{]?["']dark['"][}]?`,
  v3Name: `theme="dark" monochrome`,
  type: "absolute",
};

const sizeDefault = {
  v2: `size=[{]?["']default['"][}]?`,
  v3: 'size="medium"',
  type: "absolute",
};

const sizeSmall = {
  v2: "small={true}",
  v3: "size={'small'}",
  type: "prop",
};
const sizeSmallAbsolute = {
  v2: `small\\b[^'"]`,
  v3: "size={'small'}",
  type: "absolute",
};

export {
  appearanceDark,
  appearanceLight,
  sizeDefault,
  sizeSmall,
  sizeSmallAbsolute,
};
