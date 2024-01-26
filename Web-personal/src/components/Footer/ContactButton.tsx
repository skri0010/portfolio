import React from 'react';
import './Contact.scss'

type ContactProps = {children: React.ReactNode}
function ContactButton(props:ContactProps){
    return (
        <div className='contact-card'>{props.children}</div>
    )
}

export default ContactButton;