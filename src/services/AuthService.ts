import http from "./http-common";
import {useAuthenticateStore} from "@/stores/authStore";
import type {loginInterface, registerInterface} from "@/Interface/AuthInterface";

class AuthService {
    login(loginForm: loginInterface) {
        return http.post('/login', { loginForm });
    }

    register(registerForm: registerInterface) {
        return http.post('/register', {
            registerForm
        });
    }

    checkAuthenticated() {
        return http.get('/checkToken');
    }

    authGoogle() {
        // return http.get(`/t`);
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
