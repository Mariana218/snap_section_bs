import { Header } from './components/Header'
import { Careers } from './pages/Careers'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <>
    
    <BrowserRouter>
    
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Careers' element={<Careers/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>


    </BrowserRouter>
  

    </>
  )
}
