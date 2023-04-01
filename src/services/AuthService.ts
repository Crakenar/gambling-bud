import http from "./http-common";

class AuthService {
    login() {
        return http.get('/');
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
        return http.get('/logout');
    }
}

export default new AuthService();
