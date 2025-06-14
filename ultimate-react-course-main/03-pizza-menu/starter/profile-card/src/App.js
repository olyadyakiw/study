import './index.css'

const skills = [
    {
        skill: 'HTML+CSS',
        level: 'advanced',
        color: '#2662EA',
    },
    {
        skill: 'JavaScript',
        level: 'advanced',
        color: '#EFD81D',
    },
    {
        skill: 'Web Design',
        level: 'advanced',
        color: '#C3DCAF',
    },
    {
        skill: 'Git and GitHub',
        level: 'intermediate',
        color: '#E84F33',
    },
    {
        skill: 'React',
        level: 'advanced',
        color: '#60DAFB',
    },
    {
        skill: 'Svelte',
        level: 'beginner',
        color: '#FF3B00',
    },
]

function App() {
    return <ProfileCard />
}

const ProfileCard = function () {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    )
}

const Avatar = function () {
    return (
        <img
            alt="avatar"
            className="avatar"
            src="https://m.media-amazon.com/images/M/MV5BYThlZTdlYjYtMDIwMy00ODA4LWJjMTUtNTg1ZWI5NWU2NzhiXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg"
        />
    )
}

const Intro = function () {
    return (
        <div>
            <h1>Olha Diakiv</h1>
            <p>Full-stack Creative Developer with a deep 3D and animation experience</p>
        </div>
    )
}

const SkillList = function () {
    return (
        <div className="skill-list">
            {skills.map(skill => {
                return <Skill name={skill.skill} color={skill.color} emodji={skill.level} />
            })}
        </div>
    )
}

const Skill = function (props) {
    return (
        <div style={{ backgroundColor: props.color }} className="skill">
            {props.name}
            <span>
                {props.emodji === 'beginner' && '👶'}
                {props.emodji === 'intermediate' && '👍'}
                {props.emodji === 'advanced' && '💪'}
            </span>
        </div>
    )
}

export default App
