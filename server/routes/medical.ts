import { Router } from 'express'

import * as db from '../db/functions/medical'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const medical = await db.getAllMedical()

    res.json(medical)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const medicalId = await db.getMedicalById(id)
    res.json(medicalId)
  } catch (error) {
    console.log(error)
    res.status(500).json({ messege: 'something wong with the data base' })
  }
})

export default router
