import React from 'react';
import Image from 'next/image';
import screenshot from '@/public/map.png';
import '@/app/styles/styles.css';

const Screenshot: React.FC = () => {
  return (
    <div className="mapp">
      <Image src={screenshot} alt="Screenshot"/>
    </div>
  );
};

export default Screenshot;
