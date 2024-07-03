export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user').del()

  // Inserts seed entries
  await knex('user').insert([
    { id: 1, email: 'banana', name: 'johnny', location: 'Tauranga', medical_records_id: 1 },
    { id: 2, email: 'banana', name: 'johnny', location: 'Tauranga', medical_records_id: 2 },
    { id: 3, email: 'banana', name: 'johnny', location: 'Tauranga', medical_records_id: 3 },
    { id: 4, email: 'banana', name: 'johnny', location: 'Tauranga', medical_records_id: 4 },
    { id: 5, email: 'banana', name: 'johnny', location: 'Tauranga', medical_records_id: 5 },
    { id: 6, email: 'banana', name: 'johnny', location: 'Tauranga', medical_records_id: 6 },
    { id: 7, email: 'banana', name: 'johnny', location: 'Tauranga', medical_records_id: 7 },
    { id: 8, email: 'banana', name: 'johnny', location: 'Tauranga', medical_records_id: 8 },

    
  ])
}