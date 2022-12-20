import axios from "axios";

export default class UserManager {

    static shared = new UserManager();

    name = localStorage.getItem("user_name") ?? "unknown";
    id = localStorage.getItem("user_id") ?? "unknown";
    imageID = localStorage.getItem("user_image_id") ?? null;
    email = '';
    constructor() {
        this.setupStorageListener();
    }

    setupStorageListener = () => {
        axios.get(process.env.REACT_APP_API_URL+'/authentification',{ withCredentials: true }).then((user:any)=>{
            console.log(user)
            this.name= user.name;
            this.id = user.id
            this.email = user.email;
            this.imageID = user.avatarID;
        })
    }

    isLoggedIn = async ():Promise<boolean> =>{
        let promise = axios.get(process.env.REACT_APP_API_URL+'/authentification',{ withCredentials: true }).then(()=>{
            return true;
        }).catch(()=>{
            return false;
        })
        return await promise;
    }

    
    getImageName = () => {
        if (this.imageID != null) {
            return "profile-image" + this.imageID + ".jpg";
        } else {
            return "default-user.png";
        }
    }

}