import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Manager/AuthContext";

interface IProps {
    element: JSX.Element;
    redirect?: string;
}

const PrivateRoute = ({element,redirect='/'}: IProps) => {
    // const user = useContext(AuthContext).user;
    const setUser = useContext(AuthContext).setUser;
    useEffect(() => {
        axios
        .get(process.env.REACT_APP_API_URL + "/authentification", {
          withCredentials: true,
        })
        .then((user: any) => {
        }).catch(()=>{
          setUser(null);
          window.location.href = redirect;
        });
      }, [redirect,setUser]);
      
    return (
        <>
            {element}
        </>
    )
}

export default PrivateRoute;