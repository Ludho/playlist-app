import React from "react";
import {User} from './User'

export const CartCountContext = React.createContext({user:null,setUser:(user:User)=>{},isLoggedIn:():boolean=>{return false}});