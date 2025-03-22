'use client';

import React from 'react';

import Navbar from '@/app/components/Navbar';
import Header from '@/app/components/Header';
import Card from '@/app/components/Card';
import Screenshot from '@/app/components/Screenshot';
import '@/app/styles/styles.css';
const Desktop: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      
      <div>
      <Card title="Solved" count="18" />
      <Card title="Reported" count="07" className="cal" />
      </div>

      <Screenshot />
    </>
  );
};


export default Desktop;
