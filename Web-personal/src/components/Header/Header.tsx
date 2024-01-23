import { useState } from 'react';
import './Header.scss'
import reactIcon from '../../public/images/react.svg'

function Header() {
    const [isNavMenuHidden, setNavMenuHidden] = useState(true);

    const handleHamburgerClick = () => {
        setNavMenuHidden(!isNavMenuHidden);
    };


    return (
        <>
            <nav className='navbar section'>
                <div className='logo'>
                    <h3>SK<span className='dot'>.</span></h3>
                </div>
                <div className='hamburger-menu' onClick={handleHamburgerClick}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className={`nav-menu ${isNavMenuHidden ? 'hide' : ''}`}>
                    <a href="#">Home</a>
                    <a href="#">Career</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <span className='v-line'></span>
                    <div className='socials'>
                        <img src={reactIcon}></img>
                        <img src={reactIcon}></img>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Header