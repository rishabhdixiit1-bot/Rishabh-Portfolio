import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import About from '../component/About';
import Projects from '../component/Projects';
import Contact from '../component/Contact';
import Footer from '../component/Footer';
import Experience from '../component/Experience';
import Resume from '../component/Resume';
import Loader from '../component/Loader';


const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <Loader />
        </div>
      )}

      <div className={`${loading ? "hidden" : "block"} bg-black`}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;