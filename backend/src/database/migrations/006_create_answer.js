exports.up = function(knex) {
    return knex.schema.createTable('answers', (table) => {
        table.increments('id').primary();
        table.string('ds_answer',500).notNullable();

        table.integer('id_questions').unsigned();

        table.foreign('id_questions')
            .references('id')
            .inTable('questions')
            .onDelete('CASCADE')
            .onUpdate('NO ACTION');


    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('answer');
};