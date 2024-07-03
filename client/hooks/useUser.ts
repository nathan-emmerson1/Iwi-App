import { useQuery } from '@tanstack/react-query'
import { getUser, getUserById } from '../apis/user'


export function useUsers() {
  const query = useQuery({
    queryKey: ['users'],
    queryFn: getUser,
  })
  return query
}

export function useUserById(id: number){
  
  const query = useQuery({
    queryKey: ['userById', id],
    queryFn: () => getUserById(id)
  })
  return query
}