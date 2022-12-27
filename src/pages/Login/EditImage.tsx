import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../Manager/AuthContext';

 const EditImage = ()=>{

    const imagesIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const user = useContext(AuthContext).user;
    const setUser = useContext(AuthContext).setUser;

    const changeImage = (imageID: number) => {

        const jsonData = {
            avatarID: imageID
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
            <div className="mx-auto px-4 py-3 rounded-3 col" >
                <p className="text-center fw-bolder fs-2">Choisissez une nouvelle image</p>
                <div className="row">

                    {imagesIndex.map((value, index) => {
                        return <div className="col-2 my-3" style={{ cursor: 'pointer' }} onClick={(event => { changeImage(value) })}>
                            <img className="" src={'/Images/profile-images/profile-image' + value + '.jpg'} alt='logo' />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default EditImage;