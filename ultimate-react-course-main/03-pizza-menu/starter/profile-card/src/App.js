import './index.css'

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
            <Skill name="React" color="yellow" emodji="S" />
            <Skill name="Three.js" color="green" emodji="S" />
            <Skill name="GSAP" color="blue" emodji="S" />
            <Skill name="Next.js" color="violet" emodji="M" />
            <Skill name="Git" color="red" emodji="S" />
            <Skill name="Blender" color="orange" emodji="S" />
            <Skill name="After Effects" color="magenta" emodji="S" />
        </div>
    )
}

const Skill = function (props) {
    return (
        <div style={{ backgroundColor: props.color }} className="skill">
            {props.name} {props.emodji}
        </div>
    )
}

export default App
