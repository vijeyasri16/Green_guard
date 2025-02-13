'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Header from '@/app/components/Header';
import Card from '@/app/components/Card';
import Screenshot from '@/app/components/Screenshot';
import '@/app/styles/styles.css';

const Desktop: React.FC = () => {
  return (
    <div className="desktop">
      <div className="container">
        <Header />
        <Navbar />

        <div className="cards">
          <Card title="Reported" count={7} />
          <Card title="Solved" count={18} />
        </div>

        <Screenshot />
      </div>
    </div>
  );
};

export default Desktop;
