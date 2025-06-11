import '../styles/skills.css'

import TypescriptIcon from '../assets/skills/languages/typescript.png'
import JavascriptIcon from '../assets/skills/languages/js.png'
import PythonIcon from '../assets/skills/languages/python.png'

import Expressjs from '../assets/skills/backend/expressjs.png'
import Nodejs from '../assets/skills/backend/nodejs.png'

import Firebase from '../assets/skills/databases/firebase.png'
import Mongodb from '../assets/skills/databases/mongodb.png'
import Postgres from '../assets/skills/databases/postgre.png'

import Bootstrap from '../assets/skills/frontend/bootstrap.png'
import Css from '../assets/skills/frontend/css.png'
import Html from '../assets/skills/frontend/html.png'
import Materialui from '../assets/skills/frontend/mui.png'
import React from '../assets/skills/frontend/react.png'
import Tailwindcss from '../assets/skills/frontend/tailwindcss.png'

import Figma from '../assets/skills/other tools/figma.png'
import Git from '../assets/skills/other tools/git.png'
import Github from '../assets/skills/other tools/github.png'
import Postman from '../assets/skills/other tools/postman.png'

const Skills = () => (
    <div className='skills-container'>
        <p>Skills</p>
        <div icon-box>
            <img src={TypescriptIcon} className='icon' />
            <img src={JavascriptIcon} className='icon' />
            <img src={PythonIcon} className='icon' />

            <img src={Expressjs} className='icon' />
            <img src={Nodejs} className='icon' />

            <img src={Firebase} className='icon' />
            <img src={Mongodb} className='icon' />
            <img src={Postgres} className='icon' />

            <img src={Bootstrap} className='icon' />
            <img src={Css} className='icon' />
            <img src={Html} className='icon' />
            <img src={Materialui} className='icon' />
            <img src={React} className='icon' />
            <img src={Tailwindcss} className='icon' />

            <img src={Figma} className='icon' />
            <img src={Git} className='icon' />
            <img src={Github} className='icon' />
            <img src={Postman} className='icon' />
        </div>
    </div>
);
export default Skills;
