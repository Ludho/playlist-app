import axios from 'axios';
import React from 'react';
import UserManager from '../../Manager/UserManager';

export default function Profile() {

    function didTapLogOut() {
        if (window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?") == false) {
          return;
        }
        axios.post('https://hackiam.ludho.fr/api/auth/logout')
          .then(res => {
              localStorage.clear();
              window.location.href = "/"
          }).catch(function (error) {
              alert("Une erreur est survenue");
          });
    }

    function didTapDelete() {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.") == false) {
          return;
        }
        axios.delete('https://hackiam.ludho.fr/api/user/' + UserManager.shared.id)
          .then(res => {
              localStorage.clear();
              alert("Votre compte a bien été supprimé.");
              window.location.href = "/"
          }).catch(function (error) {
              alert("Une erreur est survenue");
          });
    }

    return (
      <div className="container mt-5 row mx-auto">
        <div className="mx-auto px-4 py-3 rounded-3 col-8">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center p-0">
              <img className="w-100 p-1 m-0 rounded-circle" src={(UserManager.shared.getImageName()==null?'./utils/profile-images/profile-image'+UserManager.shared.getImageName()+ ".jpg":'./utils/profile-images/default-user.png')} alt='logo' />
            </div>
            <div className='col-9 d-flex flex-column justify-content-center align-items-start'>
              <p className='fs-5 fw-semibold text-secondary m-0 p-0'>Compte</p>
              <p className='fs-2 fw-bold m-0 p-0'>{UserManager.shared.firstName} {UserManager.shared.lastName}</p>
            </div>
            <div className="col-2 d-flex flex-column justify-content-end align-items-end p-0">
                <button type="submit" onClick={() => didTapLogOut()} className="btn btn-danger">
                    Déconnexion
                </button>
            </div>
          </div>
          <div className="d-flex my-4">
            <p className="fw-semibold fs-5 m-0 py-2 px-4 rounded-3" style={{backgroundColor: "rgba(236, 236, 236, 1.00)"}}>Vous avez: {"UserManager.shared.videos.length"} video(s).</p>
          </div>
         <div>
              <p className="fw-semibold fs-5 pb-2 m-0">Options disponibles:</p>
              <div className="d-flex flex-row gap-3">
                  <button type="submit" className="btn btn-primary" onClick={() => window.location.href = "/edit-profile"}>
                      Modifier les informations
                  </button>
                  <button type="submit" className="btn btn-secondary" onClick={() => window.location.href = "/edit-image"}>
                      Choisir une nouvelle image
                  </button>
                  <button type="submit" onClick={() => didTapDelete()} className="btn btn-danger">
                      Supprimer le compte
                  </button>
              </div>
         </div>
        </div>
      </div>
    )
}