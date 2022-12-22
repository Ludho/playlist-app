interface IProps {
    element: JSX.Element;
    redirect?: string;
}

const HomeRoute = ({element,redirect='/'}: IProps) => {
    window.location.href = redirect;
    return (
        <>
            {element}
        </>
    )
}

export default HomeRoute;