import axios from "axios";

export default class UserManager {

    static shared = new UserManager();

    name = localStorage.getItem("user_name") ?? "unknown";
    id = localStorage.getItem("user_id") ?? "unknown";
    imageID = localStorage.getItem("user_image_id") ?? null;

    constructor() {
        this.setupStorageListener();
    }

    setupStorageListener() {
        window.addEventListener("storage", () => {
            this.name = localStorage.getItem("user_name") ?? "unknown";
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