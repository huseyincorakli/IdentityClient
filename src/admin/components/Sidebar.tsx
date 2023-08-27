import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
//   const[menuIsOpEn,setMenuIsOpen]=useState(false)
  const showSettings = (event:any) => {
    event.preventDefault()
  }
// console.log(menuIsOpEn);
// const element: HTMLCollectionOf<Element> = document.getElementsByClassName('bm-burger-button');
// console.log(element[0]);



//   const handleOpen=()=>{
    
//     // setMenuIsOpen(false);
//   }
  return (
    <div className='flex' >
      <div className='mt-1' >
        <Menu >
          <NavLink  to={'/admin/add'}>add</NavLink>
          <a id='about' className='menu-item' href='/about'>
            About
          </a>
          <a id='contact' className='menu-item' href='/contact'>
            Contact
          </a>
          <a onClick={showSettings} className='menu-item--small' href=''>
            Settings
          </a>
        </Menu>
      </div>
      <div className='ml-[45px] text-xl mt-[1px]' >
        MENU
      </div>
     
    </div>
  )
}

export default Sidebar
