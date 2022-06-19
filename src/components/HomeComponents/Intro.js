import React from 'react';
import { Link } from 'react-router-dom';

function Intro() {
  const LoginStatus = localStorage.getItem('LoginStatus');
  return (
    <>
      <div className=" min-h-[95vh] lg:min-h-[90vh] text-white flex flex-col items-center justify-center text-center">
        <div className="w-[90%] max-w-sm xs:max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-[80%] xs:w-[80%] 2xl:w-10/12 px-0">
          <div>
            <h1 className="font-bold text-3xl lg:text-4xl">
              ADVANCE YOUR CAREER WITH <br className="" />{' '}
              <span className="text-mycolor text-4xl md:text-6xl lg:text-7xl sm:tracking-widest">
                OSNR UNIVERSITY
              </span>
            </h1>
            <div className="introText xl:px-0 my-5 text-sm xl:text-base xl:my-6 text-justify">
              One of India's Best Private Universities, a premier Institute
              providing the most enriching quality learning experience through
              cutting-edge research, innovative entrepreneurship, global
              exposure and the most lucrative career opportunities.
              <section className="hidden sm:inline">
                <section className="hidden lg:inline">
                  Ranked among the top 10% of Universities in India, OSNR
                  University is NAAC "A" Accredited and has received numerous
                  National and International Awards. It has over 58 MOUs with
                  excellent infrastructure and an environment for
                  research-driven learning.
                </section>
              </section>
            </div>
          </div>

          <div className="my-12 mx-auto max-w-sm flex flex-col space-y-6 sm:hidden">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
