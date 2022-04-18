import { Step } from '@mui/material';
import React from 'react';
import { Logo } from '../logo/Logo';
import Steps from '../steps/Steps';
import './Nav.scss';

export const Nav = () => {
  return (
    <>
        <nav>
            <Logo />
            <Steps />
        </nav>
    </>
  )
}
