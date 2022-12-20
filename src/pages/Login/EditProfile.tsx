import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import UserManager from '../../Manager/UserManager';

export default function EditImage() {

  const imagesIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
   function changeImage(imageID:number) {

    const jsonData = {
        avatarID: imageID
    }

    
    const userID = localStorage.getItem("user_id");
    if (userID === "" || userID == null) {
        window.location.href = "/profile"
        return;
    }

    axios.post('https://hackiam.ludho.fr/api/user/' + userID, jsonData)
      .then(res => {
          localStorage.setItem("user_image_id", imageID.toString());
          //UserManager.shared.imageID = imageID;
          window.location.href = "/profile"
      }).catch(function (error) {
          window.location.href = "/profile"
      });
  } 

  function deleteImage() {
    const jsonData = {
      avatarID: null
    }
    const userID = localStorage.getItem("user_id");
    if (userID === "" || userID == null) {
        window.location.href = "/profile"
        return;
    }
    axios.post('https://hackiam.ludho.fr/api/user/' + userID, jsonData)
    .then(res => {
        localStorage.removeItem("user_image_id");
        //UserManager.shared.imageID = null;
        window.location.href = "/profile"
    }).catch(function (error) { 

    });
   
  }

  return (
    <div className="mt-5 row mx-auto">
      <div className="mx-auto px-4 py-3 rounded-3 col" >
          <p className="text-center fw-bolder fs-2">Choisissez une nouvelle image</p>
          <div className="row">

          {imagesIndex.map((value) => {
              return <div className="col-2 my-3" style={{cursor: 'pointer'}} onClick={() => {changeImage(value)}}>
                        <img className="" src={'/Images/profile-images/profile-image' + value + '.jpg'} alt='logo' />
                      </div>
          })}
          </div>
          <div className='d-flex'>
            <button className="btn btn-danger mx-auto" onClick={(event => {deleteImage()})}>Choisir aucune image</button>
          </div>
      </div>
  </div>
  )
}