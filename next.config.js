module.exports = {
  reactStrictMode: false,
  env: {
    SENDGRID_API_KEY: process.env.NEXT_PUBLIC_SEND_GRID_API_KEY,
    API_KEY: process.env.API_KEY,
  },
};
