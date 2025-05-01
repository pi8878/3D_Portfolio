import React from 'react'

const NavBar = () => {
  return (
    <header className="navbar">
        <div className="inner">
            <a className="logo" href="#hero">
                Simangolwa
            </a>

            <nav className="desktop">

            </nav>

            <a href="#contact" className="contact-btn group">
                <div className="inner">
                    <span>Contact me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar