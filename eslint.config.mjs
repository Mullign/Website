import nextConfig from "eslint-config-next";

/** Nested clone / other repos — not part of this Next app. */
const ignoreNested = [
  "Degroff/**",
];

const config = [{ ignores: ignoreNested }, ...nextConfig];

export default config;
