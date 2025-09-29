
import './App.css'
import Array from './components/Array/Array'
import StyleCard from './components/styleCard/StyleCard'
import TodoList from './components/todo/TodoList'
import { IconCloudContainer } from './components/uiContainer/IconCloudContainer'
import UserProvider from './components/userContext/UserProvider'
import Weather from './components/weather/Weather'
import LoadingBar from './components/loadingBar/LoadingBar'

function App() {

  return (
    <>
      {/* <Weather temperature={2} /> */}
      {/* <StyleCard /> */}
      {/* <Array /> */}
      {/* <TodoList /> */}
      {/* <UserProvider /> */}
      <LoadingBar />
    </>
  )
}

export default App
