// .ice/type-defines.ts
function definePageConfig(pageConfig2) {
  if (typeof pageConfig2 !== "function") {
    return () => pageConfig2;
  } else {
    return pageConfig2;
  }
}

// src/pages/index.tsx
var pageConfig = definePageConfig(() => ({
  title: "fabritor, A creative editor based on fabricjs."
}));

// .ice/routes-config.ts
var routes_config_default = {
  "/": pageConfig
};
export {
  routes_config_default as default
};
