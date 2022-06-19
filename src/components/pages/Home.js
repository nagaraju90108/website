import React from 'react';
import Intro from '../HomeComponents/Intro';
import Footer from '../Footer';
import Advantages from '../HomeComponents/Advantages/Advantages';
import Why from '../HomeComponents/Why/Why';
import Courses from '../HomeComponents/Courses/Courses';
import Companies from '../HomeComponents/Companies/Companies';
import CampusLis from '../HomeComponents/Campus/CampusLis';
import Experience from '../HomeComponents/Experience/Experience';
// import Facilities from '../HomeComponents/Facilities/Facilities';
function Home() {
  return (
    <div className="pt-20 sm:pt-0">
      <Intro />
      <div className="text-center">
        <i className="fa-solid fa-angles-down text-white absolute bottom-2 text-2xl md:text-3xl xl:text-4xl animate-bounce"></i>
      </div>
      <Advantages />
      <Why />
      <Courses />
      <Companies />
      <CampusLis />
      {/* <Facilities /> */}
      <Experience />
      <Footer />
    </div>
  );
}

export default Home;
