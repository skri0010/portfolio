import './Contact.scss'
import ContactButton from './ContactButton';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
    return (
        <div className='contacts section'>
            <div className='text-area'>
                <h4>CONTACT ME</h4>
                <h2>Ways To Contact Me</h2>
                <p>If you LOOOOOOOOVEEEE EAW What u See PLEASEPLEASEPLEASE CALL ME PLEASEPLEASEPLEASE</p>
            </div>

            <div className='mediums'>
                <ContactButton>
                    <a href="mailto:Hello@vinayaksingh.com"><FaPhoneAlt size={22} className='icon'/>suchit.skrishna</a>
                </ContactButton>
                <ContactButton>
                    <a href="tel:+919630576848"><MdOutlineMail size={30} className='icon'/>(+91) 8484090481</a>
                </ContactButton>
            </div>
        </div>
    )
}

export default Contact;