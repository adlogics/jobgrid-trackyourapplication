import { navItems } from '../constants'
import logo from '../assets/Vector 51.png'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [openMenuDrawer, setopenMenuDrawer] = useState(false)
  const toggleNavbar = ()=>{
    setopenMenuDrawer(!openMenuDrawer)
  }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-sm border-b-2 border-neutral-700/80 ">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className='w-6 h-6' src={logo} alt="logo"/>
            <span className='text-xl tracking-tight'>JobGrid</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index)=>(
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end "><button onClick={toggleNavbar}>{openMenuDrawer?<X/>:<Menu/>}</button></div>
        </div>
        {openMenuDrawer &&(
          <div className="fixed right-0 bg-neutral-900 w-full p-12 flex flex-col justify-center lg:hidden items-center">
            <ul>
              {navItems.map((item, index)=>(
                <li key={index} className='py-4'>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar