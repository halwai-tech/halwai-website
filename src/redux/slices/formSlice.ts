import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MealSelection {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  breakfastDishes: number | "";
  lunchDishes: number | "";
  dinnerDishes: number | "";
}

export interface FormData {
  // Contact Info
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;

  // Step 1 - Personal Info
  occasion?: string;
  dates?: string[];
  guestsPerDate?: Record<string, string>;
  burners?: string;

  // Step 2 - Meal Info
  meals?: Record<string, MealSelection>;

  // Step 3 - WhatsApp
  whatsapp?: string;
}

const initialState: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",

  occasion: "",
  dates: [],
  guestsPerDate: {},
  burners: "",

  meals: {},

  whatsapp: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<FormData>>) => {
      Object.assign(state, action.payload);
    },
    resetForm: () => initialState,
  },
});

export const { updateForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
