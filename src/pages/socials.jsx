import '../styles/socials.css'
import FigmaIcon from '/assets/socials/figma.png';
import LinkedinIcon from '/assets/socials/linkedin.png';
import GithubIcon from '/assets/socials/github.png';
import TwitterIcon from '/assets/socials/twitter.png';
import InstagramIcon from '/assets/socials/instagram.png';
import ProfileImage from '/assets/profile/meera.jpg';
import FileDownloadIcon from '@mui/icons-material/FileDownloadRounded';

const Socials = () => (
    <div className='socials-container'>
        <div className='left-part'>
            <p>SOCIALS</p>

            <div className='profiles'>

                <div className='profile'>
                    <a href='http://www.linkedin.com/in/thekenapatel' className='social-box'>
                        <img src={LinkedinIcon} alt="LinkedIn" className="social-icon" />
                    </a>
                    <a href="http://www.linkedin.com/in/thekenapatel" className='profile-text'>LinkedIn</a>

                </div>

                <div className='profile'>
                    <a href='https://figma.com/@kenapatel' className='social-box'>
                        <img src={FigmaIcon} alt="Figma" className="social-icon" />
                    </a>
                    <a href="https://figma.com/@kenapatel" className='profile-text'>Figma</a>
                </div>

                <div className='profile'>
                    <a href="https://github.com/thekenapatel" className='social-box'>
                        <img src={GithubIcon} alt="GitHub" className="social-icon" />
                    </a>
                    <a href="https://github.com/thekenapatel" className='profile-text'>GitHub</a>
                </div>

                <div className='profile'>
                    <a href="https://x.com/thekenapatel" className='social-box'>
                        <img src={TwitterIcon} alt="Twitter" className="social-icon" />
                    </a>
                    <a href="https://x.com/thekenapatel" className='profile-text'>Twitter</a>
                </div>

                <div className='profile'>
                    <a href="https://www.instagram.com/thekenapatel/" className='social-box'>
                        <img src={InstagramIcon} alt="Twitter" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/thekenapatel" className='profile-text'>Instagram</a>
                </div>
            </div>
        </div>


        <div className='right-part'>
            <div className='right-part-info'>
                <img src={ProfileImage} className='profileimage' />
                <div className='right-part-detail'>
                    <p>@thekenapatel</p>
                    <p>KENA A. PATEL</p>
                    <p>DESIGNER & DEVELOPER</p>
                    <p className='location'>Located in Ahmedabad, India.</p>
                </div>
            </div>
            <div className='resume'>
                <a href='/public/resume/kenapatelresume.pdf' download>
                    <FileDownloadIcon />
                    <p>Download Resume</p>
                </a>
            </div>
        </div >
    </div >
);


export default Socials;