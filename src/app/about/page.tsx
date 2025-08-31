import React from 'react'
import WhoWeAre from '@/components/about/WhoWeAre';
import Banner from '@/components/about/Banner';
import ServingCities from '@/components/about/ServingCities';
import VisionStarted from '@/components/about/VisionStarted';
import LeaderShip from '@/components/about/LeaderShip';



const page = () => {
  return (
    <div>
      <Banner/>
      <WhoWeAre/>
      <ServingCities/>
      <VisionStarted/>
      <LeaderShip/>
      
      
      
    </div>
  )
}

export default page