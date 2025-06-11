import '../styles/homepage.css';
import Projects from './projects';
import Socials from './socials';
import Skills from './skills';
import Awards from './awards';
import Contact from './contact';
import Footer from './footer';
import ArrowIcon from '@mui/icons-material/ArrowForwardRounded';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='main-container'>
                <div className='homepage'>
                    <nav className="navbar">
                        <p className="lioness" onClick={() => navigate('/greetings')}>
                            <span style={{ color: '#b6b5b5' }}>kena</span>
                            <span style={{ color: 'white' }}>patel.</span>
                        </p>
                    </nav>

                    <hr />

                    <div className='titles'>
                        <div className="title">
                            <div className="title-left">
                                <a href="#home">Home</a>
                                <p>(01)</p>
                            </div>
                            <div className="title-right">
                                <a href='#home'>
                                    <ArrowIcon />
                                </a>
                            </div>
                        </div>

                        <div className="title">
                            <div className="title-left">
                                <a href="#projects">Works</a>
                                <p>(02)</p>
                            </div>
                            <div className="title-right">
                                <a href='#projects'>
                                    <ArrowIcon />
                                </a>
                            </div>
                        </div>

                        <div className="title">
                            <div className="title-left">
                                <a href="#socials">Socials</a>
                                <p>(03)</p>
                            </div>
                            <div className="title-right">
                                <a href='#socials'>
                                    <ArrowIcon />
                                </a>
                            </div>
                        </div>

                        <div className="title">
                            <div className="title-left">
                                <a href="#skills">Skills</a>
                                <p>(04)</p>
                            </div>
                            <div className="title-right">
                                <a href="#skills">
                                    <ArrowIcon />
                                </a>
                            </div>
                        </div>

                        <div className="title">
                            <div className="title-left">
                                <a href="#awards">Awards</a>
                                <p>(05)</p>
                            </div>
                            <div className="title-right">
                                <a href='#awards'>
                                    <ArrowIcon />
                                </a>
                            </div>
                        </div>

                        <div className="title">
                            <div className="title-left">
                                <a href="#contact">Contact</a>
                                <p>(06)</p>
                            </div>
                            <div className="title-right">
                                <a href='#contact'>
                                    <ArrowIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='other-sections'>
                    <section id="projects">
                        <Projects />
                    </section>

                    <section id="socials">
                        <Socials />
                    </section>

                    <hr />

                    <section id="skills">
                        <Skills />
                    </section>

                    <section id="awards">
                        <Awards />
                    </section>

                    <section id="contact">
                        <Contact />
                    </section>

                    <hr />

                    <Footer />

                </div>
            </div>
        </>
    );
};

export default Home;



// import { useNavigate } from 'react-router-dom';
// import '../styles/homepage.css';
// import ArrowIcon from '@mui/icons-material/ArrowForwardRounded';
// import Projects from './projects'; // ⬅️ Import Projects section

// const Home = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="homepage">
//             <nav className="navbar">
//                 <p className="lioness" onClick={() => navigate('/greetings')}>
//                     <span style={{ color: '#b6b5b5' }}>kena</span>
//                     <span style={{ color: 'white' }}>patel.</span>
//                 </p>
//             </nav>

//             <hr />

//             {/* Titles Menu */}
//             <div className='titles'>
//                 {[
//                     { label: 'Home', id: 'home' },
//                     { label: 'Works', id: 'projects' },
//                     { label: 'Socials', id: 'socials' },
//                     { label: 'Skills', id: 'skills' },
//                     { label: 'Awards', id: 'awards' },
//                     { label: 'Contact', id: 'contact' },
//                 ].map((item, i) => (
//                     <div className="title" key={i}>
//                         <div className="title-left">
//                             <a href={`#${item.id}`}>{item.label}</a>
//                             <p>({String(i + 1).padStart(2, '0')})</p>
//                         </div>
//                         <div className="title-right">
//                             <a href={`#${item.id}`}>
//                                 <ArrowIcon />
//                             </a>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* SECTIONS START HERE */}

//             <section id="home">
//                 <h1>Welcome to My Portfolio</h1>
//                 {/* Your intro or hero content */}
//             </section>

//             <section id="projects">
//                 <h2>Works:</h2>
//                 <Projects /> {/* your minimal project section */}
//             </section>

//             <section id="socials">
//                 <h2>Socials</h2>
//                 {/* content goes here */}
//             </section>

//             <section id="skills">
//                 <h2>Skills</h2>
//                 {/* content goes here */}
//             </section>

//             <section id="awards">
//                 <h2>Awards</h2>
//                 {/* content goes here */}
//             </section>

//             <section id="contact">
//                 <h2>Contact</h2>
//                 {/* content goes here */}
//             </section>
//         </div>
//     );
// };

// export default Home;




// import { useNavigate } from 'react-router-dom';
// import ArrowIcon from '@mui/icons-material/ArrowForwardRounded';
// import '../styles/homepage.css';

// const Home = () => {
//     const navigate = useNavigate();

//     const sections = [
//         { label: 'Home', path: '/home' },
//         { label: 'Works', path: '/projects' },
//         { label: 'Socials', path: '/socials' },
//         { label: 'Skills', path: '/skills' },
//         { label: 'Awards', path: '/awards' },
//         { label: 'Contact', path: '/contact' },
//     ];

//     return (
//         <div className="homepage">
//             <nav className="navbar">
//                 <p className="lioness" onClick={() => navigate('/greetings')}>
//                     <span style={{ color: '#b6b5b5' }}>kena</span>
//                     <span style={{ color: 'white' }}>patel.</span>
//                 </p>
//             </nav>

//             <hr />

//             <div className="titles">
//                 {sections.map((item, index) => (
//                     <div className="title" key={index}>
//                         <div className="title-left" onClick={() => navigate(item.path)}>
//                             <p>{item.label}</p>
//                             <p>({String(index + 1).padStart(2, '0')})</p>
//                         </div>
//                         <div className="title-right" onClick={() => navigate(item.path)}>
//                             <ArrowIcon />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Home;













// import '../styles/homepage.css';
// import ArrowIcon from '@mui/icons-material/ArrowForwardRounded';

// // Import all your sections
// import Projects from './projects';
// import '../styles/homepage.css'
// // import Socials from './socials';   // if you create it
// // import Skills from './skills';     // if you create it
// // import Awards from './awards';     // if you create it
// // import Contact from './contact';   // if you create it

// const Home = () => {
//     return (
//         <div className="homepage">

//             <nav className="navbar" id="home">
//                 <p className="lioness">
//                     <span style={{ color: '#b6b5b5' }}>kena</span>
//                     <span style={{ color: 'white' }}>patel.</span>
//                 </p>
//             </nav>

//             <hr />

//             <div className="titles">
//                 {[
//                     { id: 'home', label: 'Home' },
//                     { id: 'projects', label: 'Works' },
//                     { id: 'socials', label: 'Socials' },
//                     { id: 'skills', label: 'Skills' },
//                     { id: 'awards', label: 'Awards' },
//                     { id: 'contact', label: 'Contact' },
//                 ].map((section, idx) => (
//                     <div className="title" key={section.id}>
//                         <div className="title-left">
//                             <a href={`#${section.id}`}>{section.label}</a>
//                             <p>({String(idx + 1).padStart(2, '0')})</p>
//                         </div>
//                         <div className="title-right">
//                             <a href={`#${section.id}`}>
//                                 <ArrowIcon />
//                             </a>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Render all the sections below */}
//             <Projects />
//             <Socials />
//             <Skills />
//             <Awards />
//             <Contact />
//         </div>
//     );
// };

// export default Home;
