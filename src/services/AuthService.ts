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
        return http.post('/logout', {}, { withCredentials: true }).then(res => {
            if (res.data.success){
                location.reload();
            }
        });
    }
}

export default new AuthService();
