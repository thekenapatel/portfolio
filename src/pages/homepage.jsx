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