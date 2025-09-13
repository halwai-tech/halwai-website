
export interface IRegisterUser{
     username:string;
    email:string;
    password:string;
    role:"admin" | "halwai" | "user";
}

export interface ILoginUser{
    email:string;
    password:string;
}

export interface IEventCategory {
  _id: string;
  eventCategoryName: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IMeal {
  name: string;
  count: number;
}

export interface ISelectedDate {
  date: string;  
  guests: number;
  meals: IMeal[];
}

export interface IProfessionalChefEnquiry {
  occasion: string;
  burnersInKitchen: number;
  selectedDates: ISelectedDate[];
  whatsapp:string;
}

export interface IMonthlyChefEnquiry {
  people: string;
  startDate: string;  
  genderPreference: string;
  whatsapp:string;
}

export interface IDomesticChefEnquiry {
  people: string;
  days: string;
  visitsPerDay: string;
  whatsapp:string;
}
