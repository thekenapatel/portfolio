import { useEffect, useState } from 'react';
import '../styles/footer.css';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString(); // e.g., 11:32:21 AM
    const formattedDate = currentTime.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }); // e.g., June 6, 2025

    return (
        <footer className="footer">
            <p>{formattedTime}</p>
            <div></div>
            <p className='footer-name' style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/'}>thekenapatel</p>
            <div></div>
            <p>{formattedDate}</p>
        </footer>
    );
};

export default Footer;
