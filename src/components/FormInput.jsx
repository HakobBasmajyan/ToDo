import React, {useState,useContext,useRef} from 'react'
import { DataContext } from './DataProvider'



export default function FormInput() {
  const [todos,setTodos] = useContext(DataContext)
  const [todoName, setTodoName] = useState("")
  const todoInput = useRef()

  const addTodo = e => {
    e.preventDefault()
    setTodos([...todos, {name: todoName, complete: false}])
    setTodoName('')
    todoInput.current.focus()
  }



  return (
    <div>
        <form autoComplete='off' onSubmit={addTodo}>
            <input type="text" name='todos' id='todos' ref={todoInput}
            required placeholder='Add Task...'
            value={todoName} onChange={e => setTodoName(e.target.value)} />

            <button type='submit'>Create</button>
      </form>
    </div>
  )
}