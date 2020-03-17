// Update with your config settings.

module.exports = {

  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      database: "my_db",
      user: "manny",
      password: "123456"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      host: "ec2-52-86-33-50.compute-1.amazonaws.com",
      database: "dbm3mm62muhqc",
      user: "rxcmwmienkfhfn",
      password: "53d10be3ff0fbedb296af97057863efefa47d2c415d1e142301afc9e096edca8"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

};
