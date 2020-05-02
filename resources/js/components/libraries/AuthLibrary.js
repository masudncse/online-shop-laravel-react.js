/**
 * Auth Service
 */
class AuthLibrary {
    /**
     *
     * @return {*}
     */
    logout = () => {
        window.localStorage.clear();
        window.sessionStorage.clear();
    };

    /**
     *
     * @return {*}
     */
    status = () => {
        return Boolean(localStorage.getItem('AUTH_EMAIL'));
    };

    /**
     *
     * @return {*}
     */
    email = () => {
        return localStorage.getItem('AUTH_EMAIL') || "";
    };
}

export default new AuthLibrary();
