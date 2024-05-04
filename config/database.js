module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: env("DATABASE_CLIENT", "mysql"),
        database: env("DATABASE_NAME", "librairie"),
        host: env("DATABASE_HOST", "strapiDB"),
        port: env.int("DATABASE_PORT", 3306),
        username: env("DATABASE_USERNAME", "librairie"),
        password: env("DATABASE_PASSWORD", "Pi0LvZRx6PhBxfegHeKM"),
      },
      options: {},
    },
  },
});
