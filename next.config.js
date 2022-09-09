module.exports = {
  reactStrictMode: false,
  env: {
    SENDGRID_API_KEY: process.env.NEXT_PUBLIC_SEND_GRID_API_KEY,
    API_KEY: process.env.API_KEY,
    BCC_MAIL: process.env.BCC_MAIL,
    FROM_MAIL: process.env.FROM_MAIL,
  },
};
