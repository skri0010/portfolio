import './Introduction.scss'
import PersonalImage from '../../public/images/20230219_091010.jpg'

function Introduction() {
    return (
        <div className='intro section'>
            <div className='contact'>
                <h1>Suchit<h1>Krishna<span className='dot'>.</span></h1></h1>
                <span className='line'></span>
                <p>Lorem ipsum | dolor </p><p>sit amet | consectetur</p>
                <button className='contact-me-btn' id='contactMeBtn'>CONTACT ME</button>
            </div>

            <div className='image'><img src={PersonalImage} className='personal-img'></img></div>
            <div className='summary'>
                <h4>INTRODUCTION</h4>
                <h2>Software Engineer, Full Stack Web Developer</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores esse facere illo aspernatur, maxime qui dicta quibusdam
                    omnis quae? Ut aliquid deleniti quisquam laudantium provident aliquam nesciunt
                    aperiam eaque adipisci?
                </p>
                <span className='dot'>LEARN MORE {'>'}</span>

            </div>

        </div>
    )
}

export default Introduction