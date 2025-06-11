import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/greetings.css';

const greetings = [
  'Hello', 'Kem Cho', 'Hola', 'Bonjour', 'नमस्ते', 'Ciao', 'Hallo', 'こんにちは', 'Hej', 'Olá', 'Salam', 'Nǐ hǎo', 'Olá'
];

const Greetings = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [showText, setShowText] = useState(false); // Add this
  const navigate = useNavigate();

  useEffect(() => {
    // Show greeting text shortly after mount
    const showDelay = setTimeout(() => {
      setShowText(true);
    }, 100); // short delay to ensure styles apply


    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 220);

    // After 3 seconds, redirect to homepage
    const timeout = setTimeout(() => {
      navigate('/home');
    }, 3000);

    return () => {
      clearTimeout(showDelay);
      clearInterval(interval);
      clearTimeout(timeout);
    }
  }, [navigate]);

  return (
    <div className="home-container">
      {showText && <h1 className="greeting">{greetings[currentGreeting]}</h1>}
    </div>
  );
};

export default Greetings;
