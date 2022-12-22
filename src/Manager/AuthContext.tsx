import React from "react";
import { User } from "./User";

const user:User|null = {
    id:0, name:"", email:"", avatarID:0
}
interface IAuthContext {
    user: User|null;
    setUser: (user:User|null) => void;
  }
  
  const defaultState = {
    user: user,
    setUser:()=>{}
  };

export const AuthContext = React.createContext<IAuthContext>(defaultState);