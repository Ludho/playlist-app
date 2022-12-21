interface IProps {
    element: JSX.Element;
    redirect?: string;
    doRedirect?: boolean
}

const PrivateRoute = ({element,redirect='/',doRedirect=false }: IProps) => {
    console.log(doRedirect);
  //  if(doRedirect)window.location.href = redirect;

    return (
        <>
            {element}
        </>
    )
}

export default PrivateRoute;