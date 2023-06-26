import request from 'superagent'

export async function addPatternData(data: string[][]): Promise<void> {
  await request.post('api/v1/pattern').send({ data })
}
