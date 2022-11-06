import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../App.css'

function NavBar() {
    const navigate = useNavigate();
  return (
    <div className='NavBar'>
    <div className="NavBar-Container">
        <div onClick={() => navigate('/')} className={window.location.pathname === '/' ? 'Effects h' : 'Norm'}>Home</div>
        <div  onClick={() => navigate('/skills')} className={window.location.pathname === '/skills' ? 'Effects s' : 'Norm'}>Skills</div>
        <div  onClick={() => navigate('/projects')} className={window.location.pathname === '/projects' ? 'Effects p' : 'Norm'}>Project</div>
        <div  onClick={() => navigate('/contact')} className={window.location.pathname === '/contact' ? 'Effects c' : 'Norm'}>Contact</div>
        <div  onClick={() => navigate('/about')} ><div className="Profile" /></div>
    </div>
    </div>
  )
}

export default NavBar