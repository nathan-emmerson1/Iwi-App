import request from "superagent";

const rootUrl = '/api/v1'

export async function getAllMedical() {
  return request.get(rootUrl + '/medical').then((res) => {
    return res.body
  })
}

export async function getMedicalById(id: number) {
  return request.get(rootUrl + `/medical/${id}`).then((res) => {
    return res.body
  })
}
