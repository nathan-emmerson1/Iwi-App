
import { useMedical } from "../hooks/useMedical"

export function Medical() {
  const { data: medical ,isPending,isError} = useMedical()
  if(isPending) return <p>Loading...</p>
  if(isError) return <p>There was a error</p>
  console.log(medical)
  return (
    <div>
      <div>This is the mediccal component</div>
      {medical.map((data) => (
        <ul key={data.id}>
        <p>{data.ashma}</p>
        </ul>
      ))}
      <div></div>
      <div></div>
    </div>
  )
}
