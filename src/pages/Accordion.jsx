import React, { useState } from 'react';
import '../styles/projects.css';
import ReactIcon from '../assets/skills/frontend/react.png';
import TypescriptIcon from '../assets/skills/languages/typescript.png';
import FirebaseIcon from '../assets/skills/databases/firebase.png';
import BootstrapIcon from '../assets/skills/frontend/bootstrap.png';
import NextjsIcon from '../assets/skills/backend/nextjs.png';
import TailwindcssIcon from '../assets/skills/frontend/tailwindcss.png';
import JavascriptIcon from '../assets/skills/languages/js.png';

const Accordion = ({ project }) => {
    const [open, setOpen] = useState(false);
    const [insightsOpen, setInsightsOpen] = useState(false);

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={() => setOpen(!open)}>
                <div>
                    <strong>{project.name}</strong>
                    {project.name === 'DayBit' && ' - Every bit counts'}
                    {project.name === 'Wordle' && ' - Guess the word. Beat the game.'}
                    {project.name === 'KeepMe' && ' - Your memory’s better half.'}
                    {project.name === 'Gemini' && ' - AI built for you.'}
                </div>
                <span className="accordion-arrow" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20">
                        <polyline
                            points="6 8 10 12 14 8"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </div>
            <hr style={{ border: '1px solid black', margin: 0 }} />
            {open && (
                <div className="accordion-body">
                    {project.image && (
                        <div className="project-image-col">
                            <img src={project.image} alt={project.name} className="project-image" />
                            <div className="project-actions">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">View on GitHub</a>
                            </div>
                        </div>
                    )}
                    <div className="project-desc-col">
                        <div className="project-tech-icons">
                            {project.name === 'DayBit' && (
                                <>
                                    <img src={ReactIcon} alt="React" className="project-tech-img" />
                                    <img src={TypescriptIcon} alt="TypeScript" className="project-tech-img" />
                                    <img src={FirebaseIcon} alt="Firebase" className="project-tech-img" />
                                    <img src={BootstrapIcon} alt="Bootstrap" className="project-tech-img" />
                                </>
                            )}
                            {project.name === 'Wordle' && (
                                <>
                                    <img src={NextjsIcon} alt="Next.js" className="project-tech-img" />
                                    <img src={TailwindcssIcon} alt="Tailwind CSS" className="project-tech-img" />
                                    <img src={TypescriptIcon} alt="TypeScript" className="project-tech-img" />
                                </>
                            )}
                            {project.name === 'KeepMe' && (
                                <>
                                    <img src={ReactIcon} alt="React" className="project-tech-img" />
                                    <img src={JavascriptIcon} alt="JavaScript" className="project-tech-img" />
                                    <img src={FirebaseIcon} alt="Firebase" className="project-tech-img" />
                                    <img src={BootstrapIcon} alt="Bootstrap" className="project-tech-img" />
                                </>
                            )}
                            {project.name === 'Gemini' && (
                                <>
                                    <img src={ReactIcon} alt="React" className="project-tech-img" />
                                    <img src={JavascriptIcon} alt="JavaScript" className="project-tech-img" />
                                    <img src={FirebaseIcon} alt="Firebase" className="project-tech-img" />
                                </>
                            )}
                        </div>
                        <p className="project-desc-text">{project.description}</p>
                        {project.behindTheBuild && (
                            <div className="project-insights-toggle" onClick={() => setInsightsOpen(!insightsOpen)}>
                                <span className="project-insights-arrow">{insightsOpen ? '▼' : '▶'}</span> Behind the Build
                            </div>
                        )}
                        <div
                            className={`project-insights-wrapper${insightsOpen ? ' open' : ''}`}
                        >
                            {project.behindTheBuild && insightsOpen && (
                                <div className="project-insights">
                                    <ul>
                                        {project.behindTheBuild.map((item, idx) => (
                                            typeof item === 'string' ? (
                                                <li key={idx}>{item}</li>
                                            ) : (
                                                <li key={idx} style={{ marginTop: '1.2em', listStyle: 'none' }}>
                                                    <div className="future-section-title">{item.section}</div>
                                                    <ul className="future-section-list">
                                                        {item.points.map((pt, i) => (
                                                            <li key={i}>{pt}</li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            )
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Accordion;
