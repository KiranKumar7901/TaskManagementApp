import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllTasks from './pages/AllTasks'
import ImportantTasks from './pages/ImportantTask'
import CompletedTask from './pages/CompletedTask'
import InCompleteTask from './pages/InCompleteTask'

const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen p-2">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}>
          <Route index element={<AllTasks/>}></Route>
          <Route path='/importantTasks' element={<ImportantTasks/>}></Route>
          <Route path='/completedTasks' element={<CompletedTask/>}></Route>
          <Route path='/incompleteTasks' element={<InCompleteTask/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
