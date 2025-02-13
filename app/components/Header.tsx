import React from 'react';
import Image from 'next/image';
import leaf from '@/public/leaf.png';
import '@/app/styles/styles.css';

const Header: React.FC = () => {
  return (
    <div className="headerr">
      <h1 className='h11' >Green Guard</h1>
      <Image  className="leaff"src={leaf} alt="Leaf" width={60} height={60} />
    </div>
  );
};

export default Header;
