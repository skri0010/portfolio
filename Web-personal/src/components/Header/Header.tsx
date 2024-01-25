import { useState } from 'react';
import './Header.scss'
import linkedInIcon from '../../public/images/linkedin.svg'
import gitHubIcon from '../../public/images/github.svg'


function Header() {
    const [isNavMenuHidden, setNavMenuHidden] = useState(true);
    const linkedInLink = 'https://www.linkedin.com/in/suchit-krishna-9b269b1b2/';
    const gitHubLink = 'https://github.com/skri0010';
    const handleHamburgerClick = () => {
        setNavMenuHidden(!isNavMenuHidden);
    };


    return (
        <>
            <nav className='navbar'>
                <div className='logo'>
                    <h3>SK<span className='gold'>.</span></h3>
                </div>
                <div className='hamburger-menu' onClick={handleHamburgerClick}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className={`nav-blur ${isNavMenuHidden ? 'hide' : ''}`} ></div>
                <div className={`nav-menu ${isNavMenuHidden ? 'hide-nav' : ''}`}>
                    <a href="#">Home</a>
                    <a href="#">Skills</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                    <span className='v-line'></span>
                    <span className={`line`}></span>
                    <div className='socials'>
                        <a href={linkedInLink}><img src={linkedInIcon}></img></a>
                        <a href={gitHubLink}><img src={gitHubIcon}></img></a>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Header