import { createContext, useState, useEffect } from 'react'
import { userContextData } from './userContextData'
import UserProfile from './UserProfile'
import UpdateUser from './UpdateUser'

export const userContext = createContext()

const UserProvider = () => {
  // 从 localStorage 读取数据，如果没有则使用默认数据
  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem('userContextData')
    return savedData ? JSON.parse(savedData) : userContextData
  })

  // 每次数据更新时保存到 localStorage
  useEffect(() => {
    localStorage.setItem('userContextData', JSON.stringify(userData))
  }, [userData])

  const updateUserName = (id, newName) => {
    setUserData(prevData => 
      prevData.map(user => 
        user.id === parseInt(id) ? { ...user, name: newName } : user
      )
    )
  }

  const contextValue = {
    userData,
    updateUserName
  }

  return (
    <userContext.Provider value={contextValue}>
      <UserProfile />
      <UpdateUser />
    </userContext.Provider>
  )
}

export default UserProvider