module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'microdadosenem2',
      user:     'postgres',
      postgres: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
