import Home from "./pages/Home"
import Layout from "./components/root/Layout"
import AboutPage from "./pages/AboutPage"
import {
  createBrowserRouter,createRoutesFromElements,RouterProvider,Route
} from 'react-router-dom'


function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route element= {<Layout />}>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>

    </Route>
  ))

  return (
   <>
   <RouterProvider router= {router} />
   </>
  )
}

export default App
