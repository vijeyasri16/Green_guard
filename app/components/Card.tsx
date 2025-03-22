import React from 'react';
import '@/app/styles/styles.css';

interface CardProps {
  title: string;
  count: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, count,className }) => {
  return (
    <div className={`cardd ${className}`}>
      <p className='ca'> Issues {title}</p>
      <span className='nc'>{count}</span>
    </div>
  );
};

export default Card;
