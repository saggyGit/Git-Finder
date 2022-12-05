import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {NavLink } from 'react-router-dom'


function Navbar({ title }) {
    return (
        <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'style={{height:"40px"}}>
            <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                    <FaGithub className='inline pr-2 text-3xl'/>
                    <NavLink exact to='/' className='text-lg font-bold align-middle'>{title}</NavLink>
                </div>
                <div className="flex-1px-2mx-2">
                  <div className=" flex justify-end ">                
                <NavLink exact to='/'  className='btn btn-ghost btn-sm rounded-btn'>Home</NavLink>
                <NavLink exact to='/about'className='btn btn-ghost btn-sm rounded-btn'>About</NavLink>
                </div>
                </div>

            </div>
            
        </nav>
    )
}


Navbar.defaultProps = {
    title: "Github Finder"
}

export default Navbar
