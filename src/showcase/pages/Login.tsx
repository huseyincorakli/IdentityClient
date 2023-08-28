import {  useEffect } from 'react'
import { UserHttpService } from '../../http/user-http/userHttpService'
import { userObjects } from '../../entity/userObject'
import { useAuth } from '../../contexts/AuthContext'
import { NavLink } from 'react-router-dom'


const Login = () => {
const {token,setToken}=useAuth()
const newUser:userObjects= new userObjects()
    newUser.userNameOrEmail='crklih';
    newUser.password='123';
  useEffect(()=>{
  
     console.log('login',token);
     
  },[token])

const login=async()=>{
  await UserHttpService.login(newUser,()=>{
    setToken('abc')
   })
}

  return (
    <>
    <NavLink to={'/admin'}>Admin</NavLink>
      <div className='grid-cols-12 mx-4 mt-8'>
        <div className='flex items-center justify-center'>
          <div className=" grid-cols-3"></div>
          <div className=' grid-cols-6'>
          <form>
          <div className='mb-4'>
            <label htmlFor='email' className='block mb-2 text-sm font-medium'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              className='w-full p-2 border rounded'
            />
          </div>
          <button
          onClick={login}
            type='button'
            className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
          >
            Login
          </button>
        </form>
          </div>
          <div className="grid-cols-3"></div>
        </div>
      </div>
    </>
  )
}

export default Login
