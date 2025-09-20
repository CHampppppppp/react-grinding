import { useEffect, useRef, useState } from "react"
import { message } from 'antd'
import { motion, useInView } from 'motion/react'
import './index.css'
import MouseSvg from './MouseSvg'

// 创建独立的TodoItem组件来处理每个项的动画
const TodoItem = ({ todo, onComplete, onDelete }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    threshold: 0.1,
    margin: "0px 0px -50px 0px"
  })

  const itemVariants = {
    hidden: {
      y: -20, 
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        staggerChildren: 0.05,
      }
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.1,
        staggerChildren: 0.05,
      }
    }
  }

  return (
    <motion.div 
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "exit"}
      className="todoContainer"
    >
      <li className={todo.completed ? 'completed' : ''}>{todo.text}</li>
      <button className="completeButton" onClick={() => onComplete(todo.id)}>{todo.completed?'undo':'complete'}</button>
      <button className="deleteButton" onClick={() => onDelete(todo.id)}>delete</button>
    </motion.div>
  )
}

const TodoList = () => {

  const [todos,setTodos] = useState([
    {id:crypto.randomUUID(),text:'workout',completed:false},
    {id:crypto.randomUUID(),text:'study',completed:false},
    {id:crypto.randomUUID(),text:'sleep',completed:false},
    {id:crypto.randomUUID(),text:'read',completed:false},
    {id:crypto.randomUUID(),text:'love piggy',completed:false},
    {id:crypto.randomUUID(),text:'love Camellia',completed:true},
  ])

  const [inputText, setInputText] = useState('')

  //只在第一次渲染的时候执行
  useEffect(()=>{
    const savedTodos = localStorage.getItem('todos')
    if(savedTodos){
      setTodos(JSON.parse(savedTodos))
    }
  },[])

    const handleClick = () =>{
    if(inputText.trim() === ''){
      // 使用antd的错误消息提示
      message.error('内容不能为空')
    }else{
      // 使用antd的成功消息提示
      message.success({
        content:'添加成功',
      })
      // 使用crypto.randomUUID()确保唯一ID
      const newId = crypto.randomUUID()
      const newTodos = [...todos,{id: newId, text:inputText, completed:false}]
      setTodos(newTodos)
      localStorage.setItem('todos',JSON.stringify(newTodos))
      setInputText('')
    }
  }

  const handleComplete = (id) =>{
    console.log('completed ' + id)
    const newTodos = todos.map((todo)=>{
      if(todo.id === id){
        return {...todo,completed:!todo.completed}
      }
      return todo
    })
    setTodos(newTodos)
    localStorage.setItem('todos',JSON.stringify(newTodos))
  }

  const handleDelete = (id) =>{
    console.log('deleted ' + id)
    const newTodos = todos.filter((todo)=>todo.id !== id)
    setTodos(newTodos)
    localStorage.setItem('todos',JSON.stringify(newTodos))
  }

  return (
    <div className='listContainer'>
      <h1 className="title">TodoList</h1>
      <div className="inputContainer">
        <input 
        type="text" 
        placeholder='Add a new todo' 
        className='input' 
        value={inputText} 
        onChange={(e)=>setInputText(e.target.value)} 
        onKeyDown={(e)=>{
          if(e.key === 'Enter'){
            handleClick()
          }
        }}
        />
        <button className='addButton' onClick={handleClick}>
          <span className="addButtonText">Add</span>
        </button>
      </div>
      <ul className="todoList">
        {todos.map((todo)=>(
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onComplete={handleComplete} 
            onDelete={handleDelete} 
          />
        ))}
        <MouseSvg />
      </ul>
    </div>
  ) 
}

export default TodoList