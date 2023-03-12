import http from "./httpapi-common";

class AuthService {
    login() {
        return http.get('/');
    }

    authGoogle() {
        return http.get('/google');
    }

    logout() {
        return http.get('/logout');
    }
}

export default new AuthService();
