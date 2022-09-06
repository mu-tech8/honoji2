module.exports = {
  reactStrictMode: false,
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
  env: {
    NEXT_PUBLIC_SEND_GRID_API_KEY: process.env.NEXT_PUBLIC_SEND_GRID_API_KEY,
    API_KEY: process.env.API_KEY,
  },
};
