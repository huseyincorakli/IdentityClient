import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <div className='mx-auto max-w-screen-xl px-2 py-2 sm:px-1 sm:py-3 lg:px-2'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <div className='text-center sm:text-left'>
              <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
                Brand
              </h1>
            </div>
            <div className='navlink'>
              <ul className='flex justify-evenly gap-2 text-blue-400'>
                <li>
                  <a href=''>
                    <NavLink to={'/'} className='hover:underline'>
                      Products
                    </NavLink>
                  </a>
                </li>
                <li>
                  <a href=''>
                    <NavLink to={'login'} className='hover:underline'>
                      Login
                    </NavLink>
                  </a>
                </li>
                <li>
                  <a href=''>
                    <NavLink to={'signup'} className='hover:underline'>
                      SignUp
                    </NavLink>
                  </a>
                </li>
              </ul>
            </div>
            <div className='mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center'>
              <a className='block cursor-pointer  rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring'>
                <NavLink to={'/admin'}>Dashboard</NavLink>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
