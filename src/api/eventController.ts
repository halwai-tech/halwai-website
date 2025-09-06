import { publicEventApi } from "./config";

export const eventController={
    getAllEventCategory:async ()=>{
        try{
          const result=await publicEventApi.get("/all-event-category");
          return result;
        }
        catch(error)
        {
            throw error;
        }
    },
    getAllEvents:async ()=>{
        try{
            const result=await publicEventApi.get("/all-events");
            return result;
        } 
        catch(error){
            throw error;
        }
    }
}