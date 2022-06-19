import React from 'react';
// import { Link } from 'react-router-dom';

function Intro() {
  // const LoginStatus = localStorage.getItem('LoginStatus');
  return (
    <>
      <div className=" min-h-[95vh] lg:min-h-[90vh] text-white flex flex-col items-center justify-center text-center">
        <div className="w-[90%] max-w-sm xs:max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-[80%] xs:w-[80%] 2xl:w-10/12 px-0">
          <div>
            <h1 className="font-bold text-3xl lg:text-5xl">
              WELCOME TO <br className="sm:hidden" />{' '}
              <span className="text-mycolor">MY FIRST WEBSITE</span>
            </h1>
            {/* <h1 className="font-bold text-3xl lg:text-4xl">
              ADVANCE YOUR CAREER WITH <br className="" />{' '}
              <span className="text-mycolor text-4xl md:text-6xl lg:text-7xl sm:tracking-widest">
                OSNR UNIVERSITY
              </span>
            </h1> */}
            <div className="introText xl:px-0 my-3 text-sm xl:text-base xl:my-6 text-justify">
              This is my first website using React and Tailwind CSS. React is an
              open-source JavaScript library that is used for building UI
              specifically for single-page applications.
              <section className="hidden sm:inline">
                React also allows us to create reusable UI components. Tailwind
                CSS is basically a utility-first CSS framework for rapidly
                building custom user interfaces.
                <section className="hidden lg:inline">
                  It is a highly customizable, low-level CSS framework that
                  gives you all of the building blocks you need to build bespoke
                  designs without any annoying opinionated styles you have to
                  fight to override.
                </section>
              </section>
            </div>
            {/* <div className="introText xl:px-0 my-5 text-sm xl:text-base xl:my-6 text-justify">
              One of India's Best Private Universities, a premier Institute
              providing the most enriching quality learning experience through
              cutting-edge research, innovative entrepreneurship, global
              exposure and the most lucrative career opportunities.
              <div className="hidden sm:inline">
                <div className="hidden lg:inline">
                  Ranked among the top 10% of Universities in India, OSNR
                  University is NAAC "A" Accredited and has received numerous
                  National and International Awards. It has over 58 MOUs with
                  excellent infrastructure and an environment for
                  research-driven learning.
                </div>
              </div>
            </div> */}
          </div>

          {/* <div className="my-12 mx-auto max-w-sm flex flex-col space-y-6 sm:hidden">
            <Link
              to={LoginStatus === '0' ? '/signin' : '/about'}
              className="mybtn_outline"
            >
              {LoginStatus === '0' ? 'EXPLORE' : 'ABOUT US'}
            </Link>
            <Link
              to={LoginStatus === '0' ? '/signup' : '/contact'}
              className="mybtn"
            >
              {LoginStatus === '0' ? 'REGISTER' : 'CONTACT US'}
            </Link>
          </div>

          <div className="my-8 xl:my-10 hidden sm:block space-x-20 mx-auto">
            <Link
              to={LoginStatus === '0' ? '/signin' : '/about'}
              className="mybtn_outline"
            >
              {LoginStatus === '0' ? 'EXPLORE' : 'ABOUT US'}
            </Link>
            <Link
              to={LoginStatus === '0' ? '/signup' : '/contact'}
              className="mybtn"
            >
              {LoginStatus === '0' ? 'REGISTER' : 'CONTACT US'}
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Intro;
