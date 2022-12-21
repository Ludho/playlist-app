import axios from "axios";
import { useEffect } from "react";

interface IProps {
    element: JSX.Element;
    redirect?: string;
    doRedirect?: boolean
}

const PrivateRoute = ({element,redirect='/',doRedirect=false }: IProps) => {

    useEffect(() => {
        axios
        .get(process.env.REACT_APP_API_URL + "/authentification", {
          withCredentials: true,
        })
        .then((user: any) => {
        }).catch(()=>{
          //setUser(null);
          window.location.href = redirect;
        });
      }, []);
      
    return (
        <>
            {element}
        </>
    )
}

export default PrivateRoute;