export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('medical').del()

  // Inserts seed entries
  await knex('medical').insert([
    { id: 1, ashma: true , diabetes: false, repo: true},
    { id: 2, ashma: true , diabetes: false, repo: false},
    { id: 3, ashma: true , diabetes: true, repo: true},
    { id: 4, ashma: true , diabetes: false, repo: false},
    { id: 5, ashma: true , diabetes: true, repo: true},
    { id: 6, ashma: true , diabetes: false, repo: true},
    { id: 7, ashma: true , diabetes: false, repo: true},
    { id: 8, ashma: true , diabetes: false, repo: true},



   
  ])
}
