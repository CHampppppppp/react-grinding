import { useEffect, useRef, useState } from "react"
import { message } from 'antd'
import { motion, useInView } from 'motion/react'
import './todoList.css'
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
      <li className={todo.completed ? 'completed' : ''}>{todo.id}. {todo.text}</li>
      <button className="completeButton" onClick={() => onComplete(todo.id)}>complete</button>
      <button className="deleteButton" onClick={() => onDelete(todo.id)}>delete</button>
    </motion.div>
  )
}

const TodoList = () => {

  const [todos,setTodos] = useState([
    {id:1,text:'workout',completed:false},
    {id:2,text:'study',completed:false},
    {id:3,text:'sleep',completed:false},
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
        content:'添加成功'
      })
      const newTodos = [...todos,{id:todos.length+1,text:inputText,completed:false}]
      setTodos(newTodos)
      localStorage.setItem('todos',JSON.stringify(newTodos))
      setInputText('')
    }
  }

  const handleComplete = (id) =>{
    console.log('completed ' + id)

  }

  const handleDelete = (id) =>{
    console.log('deleted ' + id)
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
        />
        <button className='addButton' onClick={handleClick} 
        onKeyDown={(e)=>{
          if(e.key === 'Enter'){
            handleClick()
          }
        }}>
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
      </ul>
      <MouseSvg />
    </div>
  ) 
}

export default TodoList