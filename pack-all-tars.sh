echo "building components, this may take a moment"

out=$(npm run build:all)
es=$?
if ((es)); then
  echo >&2 "Build error: \"$out\""
  exit 1
else
  echo "components built successfully"
fi

echo "package tar filenames:"
cd ./packages/docs
echo "../ic-ui-kit/packages/docs/$(npm pack -s)"
cd ../fonts
echo "../ic-ui-kit/packages/fonts/$(npm pack -s)"
cd ../react
echo "../ic-ui-kit/packages/react/$(npm pack -s)"
cd ../web-components
echo "../ic-ui-kit/packages/web-components/$(npm pack -s)"
cd ../canary-react
echo "../ic-ui-kit/packages/canary-react/$(npm pack -s)"
cd ../canary-web-components
echo "../ic-ui-kit/packages/canary-web-components/$(npm pack -s)"
cd ../canary-docs
echo "../ic-ui-kit/packages/canary-docs/$(npm pack -s)"
cd ../../