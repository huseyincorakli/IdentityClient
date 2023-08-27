import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"



const Admin = () => {
  return (
    
    <>
    <Sidebar/>
    <div><Outlet/></div>
    </>
  )
}

export default Admin

