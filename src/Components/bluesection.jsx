import React from 'react';
import FloatingObject2 from './floating-object2';

const Bluesection = () => {
  return (
    <> 
    <div className=''>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path fill="#03234d" fillOpacity="1" d="M0,64L26.7,80C53.3,96,107,128,160,117.3C213.3,107,267,53,320,42.7C373.3,32,427,64,480,90.7C533.3,117,587,139,640,133.3C693.3,128,747,96,800,106.7C853.3,117,907,171,960,192C1013.3,213,1067,203,1120,186.7C1173.3,171,1227,149,1280,128C1333.3,107,1387,85,1413,74.7L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
      </svg>
      <div className='bg-[#03234d] w-full h-auto lg:h-[85vh] xl:h-[89vh] '>
        {/* Content of your section */}
      </div>
    </div>
    <div className=''>
    <FloatingObject2 />
  </div>
    </>
  );
};

export default Bluesection;
