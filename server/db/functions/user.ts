import connection from '../connection.ts'
import { User, UserData } from '../../../models/user.ts'

const db = connection

export async function getAllUsers(): Promise<User[]> {
  return db('user').select('user.id as id',
  'user.email as email',
  'user.name as name',
  'user.house_id as houseId',
  'user.location as location',
  'user.medical_records_id as medicalRecordsId'
  )
}

export async function getUserById(id: number): Promise<UserData> {
  const result = await db('user').where({ id }).first()
  console.log('getuser by id')
  return result
}




export async function getUserWithMedicalById(id: number) {
  console.log('hitting this functtion')
  const result = await db('user')
    .join('medical', 'user.medical_records_id', '=', 'medical.id')
    .select( 'user.id as id',
    'user.name as name',
    'user.email as email',
    'user.location as location',
    'user.medical_records_id as medicalId',
    'medical.ashma as ashma',
    'medical.repo as repo',
    'medical.diabetes as diabetes'

    ).where('user.id', id).first()
  return result
}

