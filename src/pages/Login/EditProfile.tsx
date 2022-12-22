import React, { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Manager/AuthContext';
import {ColorDiv} from '../../styles/Style'

export default function EditImage() {

    // Erreurs et chargement
    const [errorMessage, setErrorMessage] = useState("Une erreur est survenue.");
    const [showError, setError] = useState(false);

    // Données du formulaire
    const [name, setName] = useState("");
    const user = useContext(AuthContext).user;
    const setUser = useContext(AuthContext).setUser;
    
    const update = () => {

        const jsonData = {
            name: name
        }

        axios.put(process.env.REACT_APP_API_URL + '/authentification', jsonData,{withCredentials:true})
            .then(res => {
                let tmpUser = {...user,...res.data}
                setUser(tmpUser)
                window.location.href = "/profile"
            }).catch(function (error) {
                window.location.href = "/login"
            });
    }

    return (
        <div className="mt-5 row mx-auto">
            <ColorDiv className="mx-auto d-grid gap-3 px-4 py-3 rounded-3 col-7">
                <p className="text-center fw-bolder fs-2">Modifier</p>
                <div>
                    <label htmlFor="name" className="form-label">Nom d'affichage</label>
                    <input type="text" required value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Saisissez votre nom d'affichage" name="name"></input>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="submit" onClick={() => update()} className="btn btn-primary">
                        Modifier
                    </button>
                </div>
            </ColorDiv>
        </div>
    )

}