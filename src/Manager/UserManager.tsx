import axios from "axios";

export default class UserManager {

    static shared = new UserManager();

    firstName = localStorage.getItem("user_name") ?? "unknown";
    lastName = localStorage.getItem("user_lastname") ?? "unknown";
    id = localStorage.getItem("user_id") ?? "unknown";
    imageID = localStorage.getItem("user_image_id") ?? null;

    constructor() {
        this.setupStorageListener();
    }

    setupStorageListener() {
        window.addEventListener("storage", () => {
            this.firstName = localStorage.getItem("user_name") ?? "unknown";
            this.lastName = localStorage.getItem("user_lastname") ?? "unknown";
            this.id = localStorage.getItem("user_id") ?? "unknown";
            this.imageID = localStorage.getItem("user_image_id") ?? null;
        });
    }

    getImageName() {
        if (this.imageID != null) {
            return "profile-image" + this.imageID + ".jpg";
        } else {
            return "default-user.png";
        }
    }

}