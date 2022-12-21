import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {

  // Erreurs et chargement
  const [errorMessage, setErrorMessage] = useState("Une erreur est survenue.");
  const [showError, setError] = useState(false);

  // Données du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function register() {
    if (email === null || password === null || email === "" || password === "" ||name === null ||  name === "") {
      setError(true);
      setErrorMessage("Veuillez renseigner tous les champs.");
      return;
    } else {
      setError(false);
    }

    const jsonData = {
      email: email,
      password: password,
      name: name,
      avatarID: 1
    }
    axios.post(process.env.REACT_APP_API_URL+'/authentification/register', jsonData)
      .then(res => {
        axios.post(process.env.REACT_APP_API_URL+'/authentification/log-in', jsonData,{ withCredentials: true }).then((res=>{
          window.location.href = "/"
        }))
          
      }).catch(function (error) {
          setError(true);
          setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      });
    }

  return (
    <div className="mt-5 row mx-auto">
      <div className="mx-auto d-grid gap-3 px-4 py-3 rounded-3 col-7" style={{backgroundColor: "rgba(236, 236, 236, 1.00)"}}>
          <p className="text-center fw-bolder fs-2">Inscription</p>
          <div>
            <label htmlFor="name" className="form-label">Nom d'affichage</label>
            <input type="text" required value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Saisissez votre nom d'affichage" name="name"></input>
          </div>
          <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Saisissez votre email" name="email" ></input>
          </div>
          <div>
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Saisissez votre mot de passe" name="password"></input>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button onClick={() => register()} className="btn btn-primary">
              Continuer
            </button>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="m-0 p-0">Vous avez déjà un compte ?</p>
            <a href="/login">Se connecter</a>
          </div>
          {showError === true &&
            <div className="alert alert-warning">
                <p className="text-center text-sm text-orange-500 p-0 m-0">{errorMessage}</p>
            </div>
          }
      </div>
  </div>
  )
}