import React from 'react'
import FormInput from './components/FormInput'
import List from './components/List'
import { Footer} from './components/Footer'
import { DataProvider } from './components/DataProvider'


export default function App() {
  return (
    <DataProvider>
    <div className='App'>
        <h1>To Do List</h1>
        <FormInput />
          <List />
        <Footer />
      </div>
    </DataProvider>
  )
}

