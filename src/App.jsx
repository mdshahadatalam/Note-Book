
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'

import { RootLayouts } from './RootLayouts/RootLayouts'
import { Home } from './pages/Home'
import { Notes } from './pages/Notes'
import { Contact } from './pages/Contact'
import 'react-toastify/dist/ReactToastify.css';

function App() {
 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<RootLayouts/>}>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/Notes' element={<Notes/>} ></Route>
      <Route path='/Contact' element={<Contact/>} ></Route>

      </Route>
    </Route>
  )
 )

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
