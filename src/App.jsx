import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Navbar';
import Pizza from './Pizza';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Pizza />
      <Footer/>     
    </div>
  );
}