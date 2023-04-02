import axios from "axios";
import CookieService from "@/services/CookieService";
export default axios.create({
    baseURL: "http://localhost:4001/",
    headers: {
        "Content-type": "application/json",
        'token': CookieService.getCookie('token'),
    },
});
