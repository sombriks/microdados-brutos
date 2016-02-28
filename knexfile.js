module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'microdadosenem',
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
