import React,{useState} from 'react'
import {close, ExpertLogo, logo, menu} from '../assets'
import {navLinks} from '../constants'

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={ExpertLogo} alt="hoobank" className='object-cover bg-transparent rounded-md w-[270px]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flxe-1'>
        {
          navLinks.map((el, index)=>{
            return(
              <li key={el.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0':'mr-10'} text-white`}>
                <a href={`#${el.id}`}>
                  {el.title}
                </a>
              </li>
            )
          })
        }
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain"  onClick={()=>setToggle((prev)=>!prev)}/>

        <div className={`${ toggle ? 'flex': 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {
              navLinks.map((el, index)=>{
                return(
                  <li key={el.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0':'mb-4'} text-white`}>
                    <a href={`#${el.id}`}>
                      {el.title}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar