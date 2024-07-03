import connection from '../connection.ts'
import { Medical, MedicalData } from '../../../models/medical.ts'

const db = connection

export async function getAllMedical(): Promise<Medical[]> {
  return db('medical').select()
}

export async function getMedicalById(id: number): Promise<MedicalData> {
  return db('medical').where({ id }).first()
}
