import { Router } from 'express'

import * as db from '../db/functions/user'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await db.getAllUsers()

    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const userById = await db.getUserById(id)
    res.json(userById)
  } catch (error) {
    console.log(error)
    res.status(500).json({ messege: 'couldnt grap by id' })
  }
})

router.get('/', async (req, res) => {
  try {
    const data = await db.getUserWithMedical()
    
    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ messege: 'couldnt get the records g' })
  }
})

router.get('/')
export default router