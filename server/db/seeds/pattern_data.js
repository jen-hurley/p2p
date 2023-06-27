/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('pattern').del()
  await knex('pattern').insert({
    pattern_data: [
      ['#fff', '#fff', '#fff'],
      ['#fff', '#fff', '#fff'],
      ['#fff', '#fff', '#fff'],
    ],
  })
}
