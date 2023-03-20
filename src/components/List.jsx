import React, {useContext,useEffect,useState} from 'react'
import ListItem from './ListItem'
import { DataContext } from './DataProvider'

export default function List() {
  const [todos,setTodos] = useContext(DataContext)
  const [checkAll,setCheckAll] = useState(false)
  const [filtered,setFiltered] = useState(todos)
  
  const switchComplete = id => {
    const newTodos = [...todos]
    newTodos.forEach((todo,index) => {
      if(index === id ){
        todo.complete = !todo.complete
      }
    })
    setTodos(newTodos)
  }
  
  const handleEditTodos = (editvalue,id)=>{
    const newTodos = [...todos]
    newTodos.forEach((todo,index) => {
      if(index === id){
        todo.name = editvalue
      }
    })
    setTodos(newTodos)
  }
  
  // FILTER COMPONENT ============================

  
  const handleCheckAll = () =>{
    const newTodos = [...todos]
    newTodos.forEach(todo=>{
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }
  
  
  const newTodosComplete = () => {
    return todos.filter(todo => todo.complete === false)
  }
  
  const deleteTodo = () =>{
    setTodos(newTodosComplete())
    setCheckAll(false)
  }
  
  const filterTodo = (status)=> {
    if(status === "all"){
      setFiltered(todos)
    }else{
      let newTodos = [...todos].filter(todo => todo.complete === status)
      setFiltered(newTodos)
    }
  }
  
  
  useEffect(()=>{
    setFiltered(todos)
  }, [todos])

  return (
    <>
    <ul>
          {      
                filtered?.map((todo,index) => (
                  <ListItem todo={todo} key={index} id={index}
                checkComplete={switchComplete} handleEditTodos={handleEditTodos} />
              ))
          }
    </ul>
             {(todos.length === 0 ? <h1 className="h1">Nothing To Do!</h1>
      : <div className="container">
          <div className="row">
            <label htmlFor="all">
              <input type="checkbox" name="all" id="all" onChange={handleCheckAll} checked={checkAll}/>
              ALL
            </label>
            <p>You Have {todos.filter((todo)=> todo.complete === false).length} to do</p>
            <button id="delete" onClick={deleteTodo}>
              Delete
            </button>
          </div>
          <div className="filter">
            <button className='all' onClick={()=>filterTodo("all")}>All</button>
            <button className='complete' onClick={()=>filterTodo(true)}>Complete</button>
            <button className='uncomplete' onClick={()=>filterTodo(false)}>Uncomplete</button>
          </div>
        </div>
)}
    </>
  )
}