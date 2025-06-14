import { Stack } from '@mui/material';
import '../styles/projects.css';
import Accordion from './Accordion';

// Example project data
const projects = [
    {
        name: 'DayBit',
        techStack: ['React', 'Typescript', 'Firebase'],
        description: 'DayBit is a personal finance tracker that uses a calendar-style heatmap to visually display daily transaction activity. It helps users analyze their spending habits through simple, color-coded insights.',
        image: '/src/assets/projects/daybit/homepage.png',
        github: 'https://github.com/thekenapatel/daybit',
        behindTheBuild: [
            'Implemented a calendar heatmap to visually map spending patterns.',
            'Color intensity dynamically reflects daily spend levels.',
            'Enhanced the UI to deliver a more intuitive and engaging experience.',
            {
                section: 'Future', points: [
                    'Tooltip with date, amount, place, and transaction type.',
                    'Recent transactions listed below heatmap.'
                ]
            }
        ]
    },
    {
        name: 'Wordle',
        techStack: ['React', 'Node.js', 'MongoDB'],
        description: 'Developed a functional Wordle game with complete word-guessing logic, responsive design, and smooth navigation.',
        image: '/src/assets/projects/wordle/wordle.png',
        github: 'https://thekenapatel.github.io/wordle',
        behindTheBuild: [
            'Focused on replicating Wordle’s logic with a clear and structured approach.',
            'Clean and responsive game UI.',
            {
                section: 'Future', points: [
                    'Hint feature before the game starts.']
            }
        ]
    },
    {
        name: 'KeepMe',
        techStack: ['React', 'Node.js', 'MongoDB'],
        description: 'Built a note-taking app replicating Google Keep’s core features, including creating, editing, and storing notes in real time. Integrated secure user login and designed a responsive Masonry layout with modal-based note editing.',
        image: '/src/assets/projects/keepme/homepage.png',
        github: 'https://thekenapatel.github.io/keepme',
        behindTheBuild: [
            'Responsive Masonry Layout for optimal note organization.',
            'Bootstrap Modal for a clean and efficient note editing workflow.',
            'Dark Mode functionality for improved user viewing comfort.',
            'Firestore Integration for secure note storage, complemented by Firebase Authentication for user management.',
            {
                section: 'Future', points: [
                    'Adding search functionality to find words in notes.']
            }
        ]
    }, {
        name: 'Gemini',
        techStack: ['React', 'Node.js', 'MongoDB'],
        description: 'Developed a dynamic, responsive AI chat interface with secure user login via Firebase Authentication. Implemented a sleek dark theme for an enhanced user experience.',
        image: '/src/assets/projects/gemini clone/gemini.png',
        github: 'https://thekenapatel.github.io/gemini-clone',
        behindTheBuild: [
            'Integrated Gemini API via official SDK.',
            'Built prompt/response chat system with basic auth.',
        ]
    },
];

const Projects = () => (
    <div className='projects-container'>
        <p className='topic-name'>Projects</p>
        {projects.map((project, idx) => (
            <Accordion key={idx} project={project} />
        ))}
    </div>
);

export default Projects;



