import React from 'react';
import logo from '../../assets/cruzverde.png';
import './Logo.scss'

export const Logo = () => {
  return (
    <>
        <section className='logo'>
            <img src={logo} alt="Logo" />
        </section>
    </>
  )
}
