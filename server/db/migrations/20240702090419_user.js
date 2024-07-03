export async function up(knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id')
    table.string('email')
    table.string('name')
    table.string('location')
    table.integer('medical_records_id').references('medical.id')
    table.string('house_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('user')
}
