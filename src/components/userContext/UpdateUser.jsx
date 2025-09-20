import { useContext, useState } from 'react'
import { userContext } from './UserProvider'

const UpdateUser = () => {
  const { updateUserName } = useContext(userContext)//引用函数
  const [inputValue, setInputValue] = useState('')
  const [userId, setUserId] = useState('')

  const handleClick = () => {
    if (userId && inputValue) {
      updateUserName(userId, inputValue)
      setInputValue('')
      setUserId('')
    }
  }

  return (
    <div className='UpdateUser'>
      <input 
        type="text" 
        placeholder='enter your id' 
        value={userId} 
        onChange={e => setUserId(e.target.value)}
      />
      <input 
        type="text" 
        placeholder='change your name here' 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e=>{if(e.key==='Enter'){handleClick()}}}
      />
      <button onClick={handleClick}>update name</button>
    </div>
  )
}

export default UpdateUser