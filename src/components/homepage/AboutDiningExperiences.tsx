import React from 'react';

const AboutDiningExperiences = () => {
  return (
    <section className="relative overflow-hidden bg-white ">
      <div className="max-w-7xl mx-auto text-black  h-full px-4 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-[40%_40%] gap-[20%] items-center h-full">
          <div>
            <h4 className="text-lg font-roboto-slab uppercase text-[#C7702A] mb-2">
              Finest Culinary Delights
            </h4>
            <h1 className="text-4xl font-playfair leading-snug">
              Customized Dining Experiences Tailored by Gulliver
            </h1>
          </div>
          <div className="text-lg font-roboto-slab text-gray-700 space-y-2">
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet consectetur.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat non.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='grid grid-cols-[20%_40%_20%] gap-[10%] items-center h-[800px]'>
            <div>
            <img src="/images/homepage/dining-experience-1.jpeg" />
            </div>
            <div className=' flex justify-center items-center'>
  <img src="/images/homepage/dining-experience-2.jpeg" className='w-[400px]' />
            </div>
            <div>
           <img src="/images/homepage/dining-experience-3.jpeg" className='translate-y-[60px]' />
           <img src="/images/homepage/dining-experience-4.png" className='translate-x-[-120px]  w-[200px]'  />

            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDiningExperiences;
