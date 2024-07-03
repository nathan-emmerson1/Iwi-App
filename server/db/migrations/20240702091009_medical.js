export async function up(knex) {
  return knex.schema.createTable('medical', (table) => {
    table.increments('id').primary()
    table.boolean('ashma')
    table.boolean('diabetes')
    table.boolean('repo')

  })
}

export async function down(knex) {
  return knex.schema.dropTable('medical')
}
