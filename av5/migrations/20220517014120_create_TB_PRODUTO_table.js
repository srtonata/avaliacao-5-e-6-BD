exports.up = function(knex) {
    return knex.schema.createTable('TB_PRODUTO', table => {
        table.increments('id').primary()
        table.integer('codigo').notNull()
        table.string('descricao').notNull()
        table.float('valor').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('TB_PRODUTO')
};
