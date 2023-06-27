import request from 'superagent'

import { Pattern } from '../../models/pattern'

export async function addPatternData(data: string[][]): Promise<void> {
  await request.post('api/v1/pattern').send({ data })
}

export async function getAllPatterns(): Promise<Pattern[]> {
  const response = await request.get('/api/v1/pattern')

  return response.body as Pattern[]
}
