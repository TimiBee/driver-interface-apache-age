module.exports = {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'root',
      database: 'postgres',
    },
    migrations: {
      tableName: 'migrations',
      directory: './migrations',
    },
  };
  

