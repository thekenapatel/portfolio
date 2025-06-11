import '../styles/contact.css'
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => (

    // <div className='contact-container'>
    //     <MailIcon style={{ width: '25px', height: '25px' }} />
    //     <a href='https://mail.google.com'>
    //         thekenapatel@gmail.com
    //     </a>
    // </div>

    <div className='mail-container'>
        {/* <div className="icon-circle"> */}
        <MailIcon className="mail-icon" />
        {/* </div> */}
        <div className="contact-container">

            <a href="https://mail.google.com" className="email-link">
                thekenapatel@gmail.com
            </a>
        </div>
    </div>


);
export default Contact;
