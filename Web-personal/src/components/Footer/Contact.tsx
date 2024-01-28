import './Contact.scss'
import ContactButton from './ContactButton';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
    return (
        <div className='contacts section' id='contacts'>
            <div className='text-area'>
                <h4>CONTACT ME</h4>
                <h2>Ways To Contact Me</h2>
                <p>If you find my profile intriguing, please don't hesitate to reach out. I welcome connections through any of the following channels.</p>
            </div>

            <div className='mediums'>
                <ContactButton>
                    <a href="mailto:suchit.skrishna@gmail.com"><MdOutlineMail size={30} className='icon'/>Gmail: suchit.skrishna</a>
                </ContactButton>
                <ContactButton>
                    <a href="tel:+918484090481"><FaPhoneAlt size={22} className='icon'/>(+91) 8484090481</a>
                </ContactButton>
            </div>
        </div>
    )
}

export default Contact;