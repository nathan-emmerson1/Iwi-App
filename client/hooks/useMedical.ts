import { useQuery } from '@tanstack/react-query'
import { getAllMedical,getMedicalById } from '../apis/medical'

export function useMedical() {
  const query = useQuery({
    queryKey: ['medical'],
    queryFn: getAllMedical
  })
  return query
}

export function useMedicalById(id: number) {
  const query = useQuery({
    queryKey: ['medicalById', id],
    queryFn: () => getMedicalById
  })
  return query
}