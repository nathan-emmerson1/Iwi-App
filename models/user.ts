export interface User {
  id: number
  email: string
  name: string
  location: string
  medicalRecordsId: number
  houseId: number
}

export interface UserData {
  email: string
  name: string
  location: string
  medicalRecordsId: number
  houseId: number
}

export interface UserWithMedical {
  email: string
  name: string
  location: string
  medicalId: number
  houseId: number
  ashma: boolean
  diabetes: boolean
  repo: boolean

}
