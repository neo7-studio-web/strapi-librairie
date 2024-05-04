module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: `https://strapi.librairie-chretienne-angers.fr/`,
  admin: {
    url: "/dashboard",
  },
});
