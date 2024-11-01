import React from 'react';
import './styles/Hero.css';

const SimpleHero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="icon-wrapper">
          <svg 
            className="lightbulb-icon"
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        </div>
        <h1>Лампа</h1>
        <h2>Творческое пространство</h2>
        <p>Развиваем творческий потенциал вашего ребенка через увлекательное обучение</p>
        <div className="button-group">
          <button className="btn primary">Записаться на занятие</button>
          <button className="btn secondary">Узнать больше</button>
        </div>
      </div>
    </div>
  );
};

export default SimpleHero;