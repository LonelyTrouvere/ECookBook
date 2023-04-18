import menu from './icons/menu-white.png'
import user from './icons/user.png'
import mark from './icons/marked.png'
import add from './icons/plus.png'
import { useState } from 'react'
import './Navbar.css'

export default function Navbar () 
{

    const [open, setVisibility] = useState(false);

    const handleMenu = () =>{
        setVisibility(!open);
    }

    return (
        <nav className={open? 'navbar opend':'navbar'}>
           <button className='menu-button' onClick={handleMenu}> 
            <img src={menu} alt='menu'/>
            </button>
           <a href="#"><img className='icon' src={user}  alt='user'/><span className='menu-text'>{open && 'Profile'}</span></a>
           <a href="#"><img className='icon' src={mark}  alt='mark'/><span className='menu-text'>{open && 'Bookmark'}</span></a>
           <a href="#"><img className='icon' src={add} alt='add'/><span className='menu-text'>{open && 'Create'}</span></a>
        </nav>
    );
} 