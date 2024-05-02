module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'librairie'),
        username: env('DATABASE_USERNAME', 'librairie'),
        password: env('DATABASE_PASSWORD', '02fAFeuD35GRXABVyNFt'),
      },
      options: {},
    },
  },
});