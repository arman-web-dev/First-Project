import Home from "./pages/Home"
import Layout from "./components/root/Layout"
import AboutPage from "./pages/AboutPage"
import {
  createBrowserRouter,createRoutesFromElements,RouterProvider,Route
} from 'react-router-dom'
import Feature from "./pages/Feature"
import Pricing from "./pages/Pricing"
import Blog from "./pages/BlogPage"
import Contact from "./pages/Contact"


function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route element= {<Layout />}>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/feature" element={<Feature/>}></Route>
      <Route path="/pricing" element={<Pricing/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>

    </Route>
  ))

  return (
   <>
   <RouterProvider router= {router} />
   </>
  )
}

export default App
