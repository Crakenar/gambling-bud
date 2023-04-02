import http from "./http-common";
import type {loginInterface, registerInterface} from "@/Interface/AuthInterface";
import CookieService from "@/services/CookieService";

class AuthService {
    login(loginForm: loginInterface) {
        return http.post('/login',  JSON.stringify(loginForm));
    }

    register(registerForm: registerInterface) {
        return http.post('/register', JSON.stringify(registerForm));
    }

    checkAuthenticated() {
        return http.get('/checkToken', {
            headers : {
                'token': CookieService.getCookie('token'),
            }
        });
    }

    authGoogle() {
        window.open(`http://localhost:4001/google/callback`); //cannot use _self
        // return http.get('/google/callback');
    }

    logout() {
        return http.post('/logout', {}, { withCredentials: true }).then(res => {
            if (res.data.success){
                location.reload();
            }
        });
    }
}

export default new AuthService();
