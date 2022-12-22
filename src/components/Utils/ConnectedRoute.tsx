import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Manager/AuthContext";

interface IProps {
    element: JSX.Element;
    redirect?: string;
}

const ConnectedRoute = ({element,redirect='/'}: IProps) => {
    const setUser = useContext(AuthContext).setUser;
    useEffect(() => {
        axios
        .get(process.env.REACT_APP_API_URL + "/authentification", {
          withCredentials: true,
        })
        .then((user: any) => {
            window.location.href = redirect;
        }).catch(()=>{
          setUser(null);
        });
      }, []);
      
    return (
        <>
            {element}
        </>
    )
}

export default ConnectedRoute;