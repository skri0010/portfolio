import './Introduction.scss'
import PersonalImage from '../../public/images/20230219_091010.jpg'

function Introduction() {
    return (
        <div className='intro intro-grid'>
            <div className='contact item'>
                <h1>Suchit<h1>Krishna<span className='gold'>.</span></h1></h1>
                <span className='line'></span>
                <p style={{ whiteSpace: 'pre-line' }}>{'Lorem ipsum | dolor \n sit amet | consectetur'}</p>
                <button className='contact-me-btn' id='contactMeBtn'>CONTACT ME</button>
            </div>

            <div className='image item middle-column'><img src={PersonalImage} className='personal-img'></img></div>
            <div className='summary item'>
                <h4>INTRODUCTION</h4>
                <h2>Software Engineer,<br></br> Full Stack Web Developer</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores esse facere illo aspernatur
                </p>
                <a className='gold'>LEARN MORE {'>'}</a>

            </div>

        </div>
    )
}

export default Introduction