import { publicEnquiryApi } from "./config";
import {IDomesticChefEnquiry, IProfessionalChefEnquiry} from "../utils/typeDef.js";
import { IMonthlyChefEnquiry } from "../utils/typeDef.js";

export const enquiryController={
     addProfessionalChefEnquiry:async (data:IProfessionalChefEnquiry)=>{
         try{
            let result=await publicEnquiryApi.post("/professional-chef-enquiry",data);
            return result;
         }
         catch(error){
            throw error;
         }
     },
     getProfessionalChefEnquiry:async ()=>{
        try{
          let result=await publicEnquiryApi.get("/professional-chef-enquiry");
          return result;
        }
        catch(error){
            throw error;
        }
     },
     addMonthlyChefEnquiry:async (data:IMonthlyChefEnquiry)=>{
        try{
           let result=await publicEnquiryApi.post("/monthly-chef-enquiry",data);
           return result;
        }
        catch(error){
            throw error;
        }

     },
     getMonthlyChefEnquiry:async ()=>{
        try{
             let result=await publicEnquiryApi.get("/monthly-chef-enquiry");
             return result;
        }
        catch(error){
            throw error;
        }
     },
     addDomesticChefEnquiry:async (data:IDomesticChefEnquiry)=>{
         try{
            let result=await publicEnquiryApi.post("/domestic-chef-enquiry",data);
            return result;

         }
         catch(error){
            throw error;
         }
     },
     getDomesticChefEnquiry:async ()=>{
        try{
           let result=await publicEnquiryApi.get("/domestic-chef-enquiry");
           return result;
        }
        catch(error){
            throw error;
        }
     }
}