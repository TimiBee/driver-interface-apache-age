exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {user_id: 3, name: 'Jenny', age: 34, phone: NULL},
          {user_id: 2, name: 'Tom', age: 29, phone: '1-800-123-1234'},
          {user_id: 1, name: 'John', age: 28, phone: NULL}
        ]);
      });
  };
