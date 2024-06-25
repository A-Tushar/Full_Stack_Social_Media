
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Registration from "./pages/registration/Registration"

const router = createBrowserRouter (
createRoutesFromElements(
  <Route>
    <Route path='/' element={<Registration/>} ></Route>
  </Route>
)
)


function App() {
 

  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}

export default App
