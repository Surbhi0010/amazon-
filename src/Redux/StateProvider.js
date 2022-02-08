import React, { createContext, useContext, useReducer } from "react";

//prepares the dataLayer
export const StateContext= createContext()

//wrap our app and provide the datalayer
export const StateProvider= ({reducer, initialState, children})=>(
<StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
)

//pullout the datalayer
export const useStateValue=()=>useContext(StateContext)



//reducer is something which push the data into datalayer.It plays a very imp role.