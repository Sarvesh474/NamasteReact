import { useState } from 'react'
import { LOGO_URL } from '../Utils/constants'

const Header = () => {
  const [btnname, setBtnName] = useState("Login")
  
  return (
    <div className='header'>
      <div className='logo'>
        <img
          src={LOGO_URL}
          alt='' />
      </div>
      <div className='nav-items'>
        <ul className='nav nav-bar'>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className='login'
            onClick={() => {
              btnname === "Login"
              ? setBtnName("Logout")
              : setBtnName("Login");
            }}
          >{btnname}</button>
        </ul>
      </div>
    </div>
  )
}
export default Header;