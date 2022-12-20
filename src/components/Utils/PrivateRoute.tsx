import React from 'react'
import UserManager from '../../Manager/UserManager'
import { Route } from 'react-router-dom'

interface IProps {
    element: JSX.Element;
}

const PrivateRoute = ({
    element }: IProps) => {

    UserManager.shared.isLoggedIn().then((logged) => {
        if (logged) {

        } else {
            window.location.href = "/login"
        }
    })

    return (
        <>
            {element}
        </>
    )
}

export default PrivateRoute;