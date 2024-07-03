import connection from '../connection.ts'
import { User, UserData } from '../../../models/user.ts'

const db = connection

export async function getAllUsers(): Promise<User[]> {
  return db('user').select()
}

export async function getUserById(id: number): Promise<UserData> {
  const result = await db('user').where({ id }).first()
  console.log(result)
  return result
}

export async function getUserWithMedical() {
  const result = await db('user')
    .join('medical', 'user.medical_record_id', 'medical.id')
    .select(
      'user.id as id',
      'user.email as email',
      'user.name as name',
      'user.location as location',
      'user.medical_record_id as medicalRecordId',
      'house_id as houseId',
    )
  return result
}
