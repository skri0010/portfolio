import { useState } from 'react';
import './Header.scss'

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
                    <div className='socials'>
                        Hey
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Header