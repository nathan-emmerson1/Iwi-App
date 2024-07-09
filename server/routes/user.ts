import { Router } from 'express'

import * as db from '../db/functions/user'

const router = Router()

router.get('/', async (req, res) => {
  console.log('hitting user end point')
  try {
    const users = await db.getAllUsers()

    res.json(users)
    // console.log(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})


// router.get('/medical/info', async (req, res) => {
//   try {
//     const data = await db.getUserWithMedicalInfo()
//     console.log(data)
//     res.json(data)
//   } catch (error) {
//     console.log(error)
//     console.log('hitting error')
//     res.status(500)
//   }
// })

// router.get('/medical', async (req, res) => {
//   console.log('hitting medical end point')
//   try {
//     const data = await db.getUserWithMedical()
//     console.log(data)
//     res.json(data)
//   } catch (error) {
//     console.log(error)
//     console.log('hitting error')
//     res.status(500).json({ messege: 'couldnt get the records g' })
//   }
// })


// router.get('/:id', async (req, res) => {
//   console.log('hitting by id')
//   try {
//     const id = Number(req.params.id)
//     const userById = await db.getUserById(id)
//     res.json(userById)
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ messege: 'couldnt grap by id' })
//   }
// })

router.get('/:id', async (req, res) => {
  console.log('hitting medical end point')
  try {
    const id = Number(req.params.id)
    const data = await db.getUserWithMedicalById(id)
    console.log(data)
    res.json(data)
  } catch (error) {
    console.log(error)
    console.log('hitting error')
    res.status(500).json({ messege: 'to this is the error' })
  }
})


export default router
