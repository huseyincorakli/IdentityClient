import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  const[menuIsOpEn,setMenuIsOpen]=useState(false)


  const handleOpen=()=>{
   setMenuIsOpen(false)
  }

  
  return (
    <div className='flex' >
      <div className='mt-1' >
        <Menu isOpen={menuIsOpEn} onOpen={()=>{setMenuIsOpen(true)}} onClose={()=>{setMenuIsOpen(false)}}>
          <NavLink onClick={handleOpen}  to={'/admin/'}>Dashboard</NavLink>
          <NavLink onClick={handleOpen}  to={'/admin/product'}>Product</NavLink>
          <NavLink to={'/admin/user'} onClick={handleOpen} >User</NavLink>
          <NavLink to={'/admin/auth'} onClick={handleOpen} >Auth</NavLink>
        </Menu>
      </div>
      <div className='ml-[45px] text-xl mt-[1px]' >
        MENU
      </div>
     
    </div>
  )
}

export default Sidebar
