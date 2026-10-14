import { useParams } from "react-router"



const UpdateItem = () => {
    const {id} = useParams();
  return (
    <div>UpdateItem : {id} </div>
  )
}

export default UpdateItem