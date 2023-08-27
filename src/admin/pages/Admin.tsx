import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Admin = () => {
  return (
    <>
      <Sidebar />
      <div className= ' flex justify-center items-center bg-white p-2 rounded-lg shadow-md mx-5'>
        <h1 className='text-2xl font-bold '>Hoş Geldiniz, Admin!</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Admin
