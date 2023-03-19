import React, {useContext,useEffect}from 'react'
import ListItem from './ListItem'
import { DataContext } from './DataProvider'

export default function List( props ) {
  const [todos,setTodos] = useContext(DataContext)
  const {filtered, setFiltered} = props
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

  useEffect(()=>{
    setFiltered(todos)
  })

  return (
        <ul>
          {
               filtered.map((todo,index) => (
                <ListItem todo={todo} key={index} id={index}
                checkComplete={switchComplete} handleEditTodos={handleEditTodos} />
              ))
            }
      </ul>
  )
}
