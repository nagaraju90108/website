import React from 'react';
import Intro from '../Intro';
import Footer from '../Footer';
import Advantages from '../HomeComponents/Advantages/Advantages';
function Home() {
  return (
    <div className="pt-20 sm:pt-0">
      <Intro />
      <div className="text-center">
        <i className="fa-solid fa-angles-down text-white absolute bottom-2 text-2xl md:text-3xl xl:text-4xl animate-bounce"></i>
      </div>
      <Advantages />
      <Footer />
    </div>
  );
}

export default Home;
