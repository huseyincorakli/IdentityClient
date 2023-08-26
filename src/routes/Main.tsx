import { Route, Routes } from 'react-router-dom'
import Products from '../showcase/pages/Products'
import Login from '../showcase/pages/Login'
import Admin from '../admin/pages/Admin'
import SignUp from '../showcase/pages/SignUp'

const Main = () => {
  return (
    <div className='min-h-[calc(100%-162px)]'>
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </div>
  )
}

export default Main
