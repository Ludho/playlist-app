import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Manager/AuthContext';

export default function Profile() {

  const user = useContext(AuthContext).user;
  const setUser = useContext(AuthContext).setUser;
  const [numberVideo,setNumberVideo] = useState();
    useEffect(() => {
      axios
        .get(process.env.REACT_APP_API_URL + "/videos", {
          withCredentials: true,
        })
        .then((res: any) => {
          setNumberVideo(res.data.length);
        });
    }, []);
  
    const logOut = () =>{
        if (window.confirm("Êtes-vous sûr de vouloir vous déconnecter ?") === false) {
          return;
        }

        axios.post(process.env.REACT_APP_API_URL+'/authentification/log-out',null,{ withCredentials: true })
          .then(res => {
              setUser(null);
              window.location.href = "/login"
          }).catch(function (error) {
              alert("Une erreur est survenue");
          });
    }

    const deleteAccount = () => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.") === false) {
          return;
        }
        axios.delete(process.env.REACT_APP_API_URL+'/authentification',{ withCredentials: true })
          .then(res => {
              alert("Votre compte a bien été supprimé.");
              setUser(null)
              window.location.href = "/login"
          }).catch(function (error) {
              alert("Une erreur est survenue");
          });
    }

    return (
      <div className="mt-5 row mx-auto">
        <div className="mx-auto px-4 py-3 rounded-3 col-8">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center p-0">
              <img  onClick={() => window.location.href = "/edit-image"} className="w-100 p-1 m-0 rounded-circle" src={"Images/profile-images/profile-image" + user?.avatarID + ".jpg"} alt='logo' />
            </div>
            <div className='col-9 d-flex flex-column justify-content-center align-items-start'>
              <p className='fs-5 fw-semibold text-secondary m-0 p-0'>Compte</p>
              <p className='fs-2 fw-bold m-0 p-0 text-light'>{user?.name}</p>
            </div>
            <div className="col-2 d-flex flex-column justify-content-end align-items-end p-0">
                <button type="submit" onClick={() => logOut()} className="btn btn-danger">
                    Déconnexion
                </button>
            </div>
          </div>
          <div className="d-flex my-4">
            <p className="fw-semibold fs-5 m-0 py-2 px-4 rounded-3" style={{backgroundColor: "rgba(236, 236, 236, 1.00)"}}>Vous avez: {numberVideo?numberVideo:0} video(s).</p>
          </div>
         <div>
              <p className="fw-semibold fs-5 pb-2 m-0">Options disponibles:</p>
              <div className="d-flex flex-row gap-3">
                  <button type="submit" className="btn btn-primary" onClick={() => window.location.href = "/edit-profile"}>
                      Modifier les informations
                  </button>
                  <button type="submit" onClick={() => deleteAccount()} className="btn btn-danger">
                      Supprimer le compte
                  </button>
              </div>
         </div>
        </div>
      </div>
    )
}