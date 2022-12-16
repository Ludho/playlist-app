import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function LogIn() {

  // Erreurs et chargement
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Une erreur est survenue.");
  const [showError, setError] = useState(false);

  // Données du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function didTapConnect() {
    if (email === null || password === null || email === "" || password === "") {
      setError(true);
      setLoading(false);
      setErrorMessage("Veuillez renseigner tous les champs.");
      return;
    } else {
      setError(false);
    }
    
    setLoading(true);

    const jsonData = {
      email: email,
      password: password
    }
    console.log(jsonData);
    axios.post('https://hackiam.ludho.fr/api/auth/login', jsonData)
      .then(res => {
          localStorage.setItem("user_name", res.data.name);
          localStorage.setItem("user_points", res.data.points);
          localStorage.setItem("is_connected", "true");
          localStorage.setItem("user_id", res.data.id);
          localStorage.setItem("user_image_id", res.data.avatarURL);

          setLoading(false);
          window.location.href = "/"
      }).catch(function (error) {
        console.log(error);
          setError(true);
          setLoading(false);
          setErrorMessage("Mot de passe ou email incorrect.");
      });
    }

  return (
    <form className="mt-5 row mx-auto">
      <div className="mx-auto d-grid gap-3 px-4 py-3 rounded-3 col-7" style={{backgroundColor: "rgba(236, 236, 236, 1.00)"}}>
          <p className="text-center fw-bolder fs-2">Connection</p>
          <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Saisissez votre email" name="email" id="email"></input>
          </div>
          <div>
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Saisissez votre mot de passe" name="password" id="password"></input>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button type="submit" onClick={() => didTapConnect()} className="btn btn-primary">
              Continuer
            </button>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="m-0 p-0">Vous n'avez pas encore de compte ?</p>
            <a href="/signin">M'inscrire</a>
          </div>
          {showError === true &&
            <div className="alert alert-warning">
                <p className="text-center text-sm text-orange-500 p-0 m-0">{errorMessage}</p>
            </div>
          }
      </div>
  </form>
  )
}