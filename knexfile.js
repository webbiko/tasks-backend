
module.exports = {
	client: 'postgresql',
	connection: {
        user : 'postgres',
        password : '123456',
        database : 'tasks'
      },
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
