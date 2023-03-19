import React,{useContext,useState} from 'react'
import {DataContext} from "./DataProvider"
import List from './List'

export function Footer() {
  const [checkAll,setCheckAll] = useState(false)
  const [todos,setTodos] = useContext(DataContext)
  const [filtered,setFiltered] = useState(DataContext)

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

  return (
      <>
        <List 
          filtered={filtered}
          setFiltered={setFiltered}
        />
      {todos.length === 0 ? (
        <h1 className="h1">Nothing To Do!</h1>
        ) : (
          <div className="container">
          <div className="row">
            <label htmlFor="all">
              <input type="checkbox" name="all" id="all" onChange={handleCheckAll} checked={checkAll}/>
              ALL
            </label>
            <p>You Have {todos.length} to do</p>
            <button id="delete" onClick={deleteTodo}>
              Delete
            </button>
          </div>
          <div className="filter">
            <button className='all' onClick={filterTodo("all")}>All</button>
            <button className='complete' onClick={filterTodo(true)}>Complete</button>
            <button className='uncomplete' onClick={filterTodo(false)}>Uncomplete</button>
          </div>
        </div>
      )}
      </>
  );
}