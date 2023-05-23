import React, { useState } from 'react'
import logoImg from "../../assest/images/logo.svg";
import "../../assest/css/header.css";
import
{
  BiPhoneCall,
  BiEnvelope,
  BiMap,
  BiRightArrowAlt,
  BiMenu
} from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
const Header = () =>
{
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <section className='container header_top'>
        <div className='logo'>
          <img src={logoImg} alt={logoImg} />
        </div>
        <div className='reach_out_wrap'>
          <div className='contact_dt_card'>
            <span>
              <BiPhoneCall />
            </span>
            <div>
              <p>Call Anytime 24/7</p>
              <Link>(+91 8607013464)</Link>
            </div>
          </div>
          <div className='contact_dt_card'>
            <span>
              <BiEnvelope />
            </span>
            <div>
              <p>Mail Us for support</p>
              <Link>info@gmail.com</Link>
            </div>
          </div>
          <div className='contact_dt_card'>
            <span>
              <BiMap />
            </span>
            <div>
              <p>office Address</p>
              <Link>Sector 14, Gurgaon</Link>
            </div>
          </div>
        </div>
      </section>
      <section className='container menu_wrapper'>
        <nav className='navbar_desk'>
          <BiMenu onClick={() => setToggle(!toggle)} className='toggle_icon' />
          <ul className={!toggle ? "main_links" : "mobile_links"}>
            <div className='mobile_logo'>
              <img src={logoImg} alt={logoImg} />
            </div>
            <li>
              <NavLink className="nav_item"  to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="nav_item"  to="/team">Team</NavLink>
            </li>
            <li className='dropdown'>
              <button className="nav_item" >Services</button>
              <div className="dropdown-content">
                <NavLink to="/project/details" >Website Design</NavLink>
                <NavLink to="/project/details" >Digital Marketing</NavLink>
                <NavLink to="/project/details" >Affilate  Marketing</NavLink>
                <NavLink to="/project/details" >SEO Optimization</NavLink>
              </div>
            </li>

            <li>
              <NavLink className="nav_item"  to="/">Project</NavLink>
            </li>
            <li className='dropdown'>
              <button className="nav_item" >Plan</button>
              <div className="dropdown-content">
                <NavLink to="/project/details" >Website Design Plan</NavLink>
                <NavLink to="/project/details" >Digital Marketing Plan</NavLink>
                <NavLink to="/project/details" >Affilate  Marketing Plan</NavLink>
                <NavLink to="/project/details" >SEO Optimization Plan</NavLink>
              </div>
            </li>
            <li>
              <NavLink className="nav_item"  to="/">About Us</NavLink>
            </li>
            <li>
              <NavLink className="nav_item"  to="/">Contact Us</NavLink>
            </li>
          </ul>
          <Link className="cta">
            <span>Get In Touch</span>
            <BiRightArrowAlt />
          </Link>
        </nav>
      </section>
    </>

  )
}

export default Header