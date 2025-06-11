import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// import Projects from './pages/projects';
import Greetings from './pages/greetings';
import Home from './pages/homepage';

const AppRoutes = () => {
    const location = useLocation();
    const hasSeenGreeting = sessionStorage.getItem('hasSeenGreeting');

    if (!hasSeenGreeting && location.pathname === '/home') {
        sessionStorage.setItem('hasSeenGreeting', 'true');
        return <Navigate to="/" replace />;
    }

    return (
        <Routes>
            <Route path="/greetings" element={<Greetings />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} /> {/* Optional: fallback route */}
        </Routes>
    );
};

const App = () => (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);

export default App;