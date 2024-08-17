import React from 'react';
import './Appbar.css';
import { ReactComponent as Logo } from '../../../Assets/Images/betsson_logo.svg';

function Appbar() {
  return (
    <div className='appbar__container'>
        <div className='toolbar__container'>
            <div className='logo__container'>
                <Logo />
            </div>
            <div className='tools_container'>
                <h3>Eimai malkas</h3>
            </div>
        </div>
        
        
        <div className='navigation__container'>
            <h1>APPBAR</h1>
        </div>
    </div>
  )
}

export default Appbar;