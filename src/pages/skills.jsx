import '../styles/skills.css'

import TypescriptIcon from '/assets/skills/languages/typescript.png'
import JavascriptIcon from '/assets/skills/languages/js.png'
import PythonIcon from '/assets/skills/languages/python.png'

import Expressjs from '/assets/skills/backend/expressjs.png'
import Nodejs from '/assets/skills/backend/nodejs.png'
import Nextjs from '/assets/skills/backend/nextjs.png'

import Firebase from '/assets/skills/databases/firebase.png'
import Mongodb from '/assets/skills/databases/mongodb.png'
import Postgres from '/assets/skills/databases/postgre.png'

import Bootstrap from '/assets/skills/frontend/bootstrap.png'
import Css from '/assets/skills/frontend/css.png'
import Html from '/assets/skills/frontend/html.png'
import Materialui from '/assets/skills/frontend/mui.png'
import ReactIcon from '/assets/skills/frontend/react.png'
import Tailwindcss from '/assets/skills/frontend/tailwindcss.png'

import Figma from '/assets/skills/other tools/figma.png'
import Git from '/assets/skills/other tools/git.png'
import Github from '/assets/skills/other tools/github.png'
import Postman from '/assets/skills/other tools/postman.png'

const skills = [
    { src: TypescriptIcon, alt: 'TypeScript', label: 'TypeScript' },
    { src: JavascriptIcon, alt: 'JavaScript', label: 'JavaScript' },
    { src: PythonIcon, alt: 'Python', label: 'Python' },
    { src: Expressjs, alt: 'Express.js', label: 'Express.js' },
    { src: Nodejs, alt: 'Node.js', label: 'Node.js' },
    { src: Nextjs, alt: 'Node.js', label: 'Next.js' },
    { src: Firebase, alt: 'Firebase', label: 'Firebase' },
    { src: Mongodb, alt: 'MongoDB', label: 'MongoDB' },
    { src: Postgres, alt: 'PostgreSQL', label: 'PostgreSQL' },
    { src: Bootstrap, alt: 'Bootstrap', label: 'Bootstrap' },
    { src: Css, alt: 'CSS', label: 'CSS' },
    { src: Html, alt: 'HTML', label: 'HTML' },
    { src: Materialui, alt: 'Material UI', label: 'Material UI' },
    { src: ReactIcon, alt: 'React', label: 'React' },
    { src: Tailwindcss, alt: 'Tailwind CSS', label: 'Tailwind CSS' },
    { src: Figma, alt: 'Figma', label: 'Figma' },
    { src: Git, alt: 'Git', label: 'Git' },
    { src: Github, alt: 'GitHub', label: 'GitHub' },
    { src: Postman, alt: 'Postman', label: 'Postman' },
];

const Skills = () => (
    <div className='skills-container'>
        <p>Skills</p>
        <div className="icon-box">
            {skills.map((skill, idx) => (
                <div className="skill-tooltip-wrapper" key={idx}>
                    <span className="skill-tooltip">{skill.label}</span>
                    <img src={skill.src} alt={skill.alt} className='icon' />
                </div>
            ))}
        </div>
    </div>
);
export default Skills;
