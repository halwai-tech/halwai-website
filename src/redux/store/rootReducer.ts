import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import toastReducer from "../slices/toastSlice";
import formReducer from "../slices/formSlice";

const rootReducer=combineReducers({
    toast:toastReducer,
    auth:authReducer,
    form:formReducer
});

export type RootState=ReturnType<typeof rootReducer>;
export default rootReducer;