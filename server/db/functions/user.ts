import connection from '../connection.ts'
import { User, UserData } from '../../../models/user.ts'

const db = connection

export async function getAllUsers(): Promise<User[]> {
  return db('user').select('user.id as id',
  'user.email as email',
  'user.location as location',
  'user.medical_records_id as medicalRecordId'
  )
}

export async function getUserById(id: number): Promise<UserData> {
  const result = await db('user').where({ id }).first()
  console.log('getuser by id')
  return result
}

export async function getUserWithMedicalInfo(){
  console.log('hitting this function ')
  const result = await db('user')
  .join('medical', 'user.medical_records', '=', 'medical.id')
  .select()
  return result
}


export async function getUserWithMedical() {
  console.log('hitting this functtion')
  const result = await db('user')
    .join('medical', 'user.medical_records_id', '=', 'medical.id')
    .select(
    ).first()
  return result
}

// .select(
//       'user.id as id',
//       'user.email as email',
//       'user.name as name',
//       'user.location as location',
//       'user.medical_records_id as medicalRecordId',
//       'user.house_id as houseId',
//     )