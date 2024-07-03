import { useMedical } from "../hooks/useMedical"

export function Medical() {
  const { data: medical ,isPending,isError} = useMedical()
  if(isPending) return <p>Loading...</p>
  if(isError) return <p>There was a error</p>
  console.log(medical)
  return (
    <div>
      <div>This is the mediccal component</div>
      <div></div>
      <div></div>
    </div>
  )
}
