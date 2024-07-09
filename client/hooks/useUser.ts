import { useQuery } from '@tanstack/react-query'
import { getUser, getUserById, getUserInfo, getUserWithMedical } from '../apis/user'


export function useUsers() {
  const query = useQuery({
    queryKey: ['users'],
    queryFn: getUser,
  })
  return {...query}
}

// export function useUserById(id: number){
  
//   const query = useQuery({
//     queryKey: ['userById', id],
//     queryFn: () => getUserById(id)
//   })
//   return query
// }

export function useUserMeicalInfo(id: number){
  const query = useQuery({
    queryKey:['usermedical', id],
    queryFn: () => getUserInfo(id)
  })
  return query
}