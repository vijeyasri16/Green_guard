import React from 'react';
import '@/app/styles/styles.css';

interface CardProps {
  title: string;
  count: number;
}

const Card: React.FC<CardProps> = ({ title, count }) => {
  return (
    <div className={`card ${title.toLowerCase()}`}>
      <h2>{title}</h2>
      <p>Issues</p>
      <span>{count}</span>
    </div>
  );
};

export default Card;
