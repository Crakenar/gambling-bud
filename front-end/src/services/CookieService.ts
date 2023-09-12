class CookieService {
    getCookie(key?: string) {
        if (key) {
            const match = document.cookie.match(new RegExp('(^| )' + key + '=([^;]+)'));
            if (match) {
                return match[2];
            }else {
                console.log('Cookie does not exist')
            }
        }
        return document.cookie;
    }
}

export default new CookieService();
