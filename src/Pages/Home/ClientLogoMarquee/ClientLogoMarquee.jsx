import React from 'react';
import Marquee from "react-fast-marquee";
import logo1 from '../../../assets/brands/amazon.png';
import logo2 from '../../../assets/brands/amazon_vector.png';
import logo3 from '../../../assets/brands/casio.png';
import logo4 from '../../../assets/brands/moonstar.png';
import logo5 from '../../../assets/brands/randstad.png';
import logo6 from '../../../assets/brands/start.png';
import logo7 from '../../../assets/brands/start-people 1.png';

export default function ClientLogoMarquee() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <section className="py-12">
      <p className='text-3xl text-[#03373D] font-bold text-center mb-8'>
        We've helped thousands of sales teams
      </p>

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover
        autoFill
      >
        {logos.map((logo, index) => (
          <div key={index} className="mx-10 lg:mx-24 flex items-center">
            <img src={logo} alt={`Client ${index + 1}`} className="h-6 md:h-6 lg:h-6 object-contain"/>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
