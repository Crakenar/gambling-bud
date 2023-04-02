import axios from "axios";
import CookieService from "@/services/CookieService";
export default axios.create({
    baseURL: "http://localhost:4001/",
    headers: {
        "Content-type": "application/json",
        // "Authorization": CookieService.getCookie('token'),
        'token': CookieService.getCookie('token'), //TODO CHECK PARCE QUE CA CA VA PAS PTN IL EST PAS MIS A JOUR
    },
    withCredentials: true
});
