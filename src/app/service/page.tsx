import React from 'react'
import ServiceHeader from "@/components/service/ServiceHeader";
import ChefsSection from '@/components/service/ChefSection';
import ChefHighlights from '@/components/service/ChefHighlights';
import ChefServicesSection from '@/components/service/ChefServicesSection';

const Service = () => {
  return (
    <>
   <ServiceHeader />
   <ChefsSection />
   <ChefHighlights />
   <ChefServicesSection />
   </>
  )
}

export default Service