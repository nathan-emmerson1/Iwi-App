import request from 'superagent'
import { User, UserData, UserWithMedical } from '../../models/user'

const rootUrl = '/api/v1'

export async function getUser(): Promise<User> {
  return request.get(rootUrl + '/users').then((res) => {
    return res.body
  })
}

// export async function getUserById(id: number): Promise<UserData> {
//   return request.get(rootUrl + `/users/${id}`).then((res) => {
//     return res.body
//   })

// }
export async function getUserInfo(id: number): Promise<UserWithMedical> {
  console.log('hiting user info')
  return request.get(rootUrl + `/users/${id}`).then((res) => {
    return res.body
  })

}