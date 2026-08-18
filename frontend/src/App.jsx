import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Slider from './components/Slider';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="wrap">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Slider />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
