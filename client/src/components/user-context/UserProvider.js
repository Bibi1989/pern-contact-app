import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { REGISTER, USER_ERROR, LOGIN } from "./types";
import axios from "axios";
// import jwt from "jwt-decode";

export const context = createContext();

const initialState = {
  status: "",
  token: "",
  errors: ""
};

export const UserProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   register function
  const registerUsers = async body => {
    try {
      const response = await axios.post("/users/register", body);
      sessionStorage.setItem("token", response.headers.auth);
      return dispatch({ type: REGISTER, payload: response.data });
    } catch (error) {
      dispatch({ type: USER_ERROR, payload: "Something went wrong" });
    }
  };

  // login function
  const loginUsers = async body => {
    try {
      const response = await axios.post("/users/login", body);
      sessionStorage.setItem("token", response.headers.auth);
      return dispatch({ type: LOGIN, payload: response.data });
    } catch (error) {
      dispatch({ type: USER_ERROR, payload: "Something went wrong" });
    }
  };

  return (
    <context.Provider
      value={{
        state,
        dispatch,
        registerUsers,
        loginUsers
      }}
    >
      {props.children}
    </context.Provider>
  );
};
