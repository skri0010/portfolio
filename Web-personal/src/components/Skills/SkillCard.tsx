import './Skills.scss'

type SkillProps = {
    skills: {
        title: string,
        image: string
    }[]
};

function SkillCard(props: SkillProps) {
    return (
        <div>
            {
                props.skills.map(skill => {
                    return (
                    <div className='skill-card'>
                        <div className='skill-img'><img src={skill.image}></img></div>
                        <div className='skill-text'> <span className='text'>{skill.title}</span> </div>
                    </div>)
                })
            }
        </div>
    )
}

export default SkillCard