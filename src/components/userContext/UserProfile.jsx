import { useContext } from "react"
import { userContext } from './UserProvider'

const UserProfile = () => {

  const {userData} = useContext(userContext) //destructure
  
  return (
    <div className='UserProfile'>
      {userData && userData.map((user)=>{
        return (
          <ul key={user.id}>
            <li>name: {user.name}</li>
            <li>age: {user.age}</li>
            <li>email: {user.email}</li>
            <br/>
          </ul>
        )
      })}
    </div>
  )
}

export default UserProfile