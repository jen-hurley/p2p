import connection from './connection'

import { Pattern, PatternData } from '../../models/pattern'

export async function addPattern(
  data: PatternData,
  db = connection
): Promise<Pattern> {
  const [newPattern] = await db('pattern')
    .insert({ pattern_data: JSON.stringify(data) })
    .returning('*')

  return newPattern
}

export async function getAllPatterns(db = connection): Promise<Pattern[]> {
  const allPatterns = await db('pattern').select('*')

  return allPatterns
}
