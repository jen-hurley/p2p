import express from 'express'

import { getAllPatterns, addPattern } from '../db/db'

import { Pattern, PatternData } from '../../models/pattern'

const router = express.Router()

export default router

router.get('/', async (req, res) => {
  try {
    const patterns = await getAllPatterns()
    res.json(patterns)
  } catch (error) {
    res.status(500).json({
      error: 'There was and error trying to get the patterns from the database',
    })
    console.error(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const newPatternData = req.body as PatternData
    const newPattern = await addPattern(newPatternData)
    res.json(newPattern)
  } catch (error) {
    res.status(500).json({
      error: 'There was an error trying to add a new pattern to the database',
    })
    console.error(error)
  }
})
