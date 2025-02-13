import React from 'react';
import Image from 'next/image';
import screenshot from '@/public/map.png';
import '@/app/styles/styles.css';

const Screenshot: React.FC = () => {
  return (
    <div className="screenshot-container">
      <Image src={screenshot} alt="Screenshot" width={500} height={300} />
    </div>
  );
};

export default Screenshot;
