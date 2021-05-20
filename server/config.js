const env = process.env;

const config = {
  db: {
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'hangtt',
    password: env.DB_PASSWORD || '1',
    database: env.DB_NAME || 'manageAccount',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;